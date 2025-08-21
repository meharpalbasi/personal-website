import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  RichTextItemResponse,
  ToggleBlockObjectResponse,
  ImageBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Quote } from '../Quote';

// Custom list block wrappers produced by `notesApi` to group list items
type BulletedListBlock = {
  type: 'bulleted_list';
  id: string;
  bulleted_list: { children: BulletedListItemBlock[] };
};

type NumberedListBlock = {
  type: 'numbered_list';
  id: string;
  numbered_list: { children: NumberedListItemBlock[] };
};

type BulletedListItemBlock = BulletedListItemBlockObjectResponse & {
  bulleted_list_item: BulletedListItemBlockObjectResponse['bulleted_list_item'] & {
    children?: Block[];
  };
};

type NumberedListItemBlock = NumberedListItemBlockObjectResponse & {
  numbered_list_item: NumberedListItemBlockObjectResponse['numbered_list_item'] & {
    children?: Block[];
  };
};

type ToggleBlock = ToggleBlockObjectResponse & {
  toggle: ToggleBlockObjectResponse['toggle'] & {
    children?: Block[];
  };
};

type ImageBlock = ImageBlockObjectResponse & {
  image: ImageBlockObjectResponse['image'] & {
    placeholder: string;
    size: { width: number; height: number };
  };
};

type BaseBlock = Exclude<
  BlockObjectResponse,
  | BulletedListItemBlockObjectResponse
  | NumberedListItemBlockObjectResponse
  | ToggleBlockObjectResponse
  | ImageBlockObjectResponse
>;

type Block =
  | BaseBlock
  | BulletedListBlock
  | NumberedListBlock
  | BulletedListItemBlock
  | NumberedListItemBlock
  | ToggleBlock
  | ImageBlock;

type Props = {
  block: Block;
};

export const NotionBlockRenderer = ({ block }: Props) => {
  const { id } = block;

  switch (block.type) {
    case 'paragraph':
      return (
        <p>
          <NotionText textItems={block.paragraph.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <NotionText textItems={block.heading_1.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <NotionText textItems={block.heading_2.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <NotionText textItems={block.heading_3.rich_text} />
        </h3>
      );
    case 'bulleted_list':
      return (
        <ul className="list-outside list-disc">
          {block.bulleted_list.children.map((child) => (
            <NotionBlockRenderer key={child.id} block={child} />
          ))}
        </ul>
      );
    case 'numbered_list':
      return (
        <ol className="list-outside list-decimal">
          {block.numbered_list.children.map((child) => (
            <NotionBlockRenderer key={child.id} block={child} />
          ))}
        </ol>
      );
    case 'bulleted_list_item':
      return (
        <li className="pl-0">
          <NotionText textItems={block.bulleted_list_item.rich_text} />
          {block.bulleted_list_item.children?.map((child) => (
            <NotionBlockRenderer key={child.id} block={child} />
          ))}
        </li>
      );
    case 'numbered_list_item':
      return (
        <li className="pl-0">
          <NotionText textItems={block.numbered_list_item.rich_text} />
          {block.numbered_list_item.children?.map((child) => (
            <NotionBlockRenderer key={child.id} block={child} />
          ))}
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={block.to_do.checked} />{' '}
            <NotionText textItems={block.to_do.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <NotionText textItems={block.toggle.rich_text} />
          </summary>
          {block.toggle.children?.map((child) => (
            <NotionBlockRenderer key={child.id} block={child} />
          ))}
        </details>
      );
    case 'child_page':
      return <p>{block.child_page.title}</p>;
    case 'image':
      const src = block.image.type === 'external' ? block.image.external.url : block.image.file.url;
      const caption = block.image.caption ? block.image.caption[0]?.plain_text : '';
      return (
        <figure>
          <Image
            className="object-cover"
            placeholder="blur"
            src={src}
            alt={caption}
            blurDataURL={block.image.placeholder}
            width={block.image.size.width}
            height={block.image.size.height}
          />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return <Quote key={id} quote={block.quote.rich_text[0].plain_text} />;
    case 'code':
      return (
        <pre className={`language-${block.code.language}`}>
          <code key={id}>{block.code.rich_text[0].plain_text}</code>
        </pre>
      );
    case 'file':
      const src_file =
        block.file.type === 'external' ? block.file.external.url : block.file.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = block.file.caption ? block.file.caption[0]?.plain_text : '';
      return (
        <figure>
          <div>
            📎{' '}
            <Link href={src_file} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case 'bookmark':
      const href = block.bookmark.url;
      return (
        <a href={href} target="_brank">
          {href}
        </a>
      );
    default:
      return (
        <>
          ❌ Unsupported block (
          {block.type === 'unsupported' ? 'unsupported by Notion API' : block.type})
        </>
      );
  }
};

const NotionText = ({ textItems }: { textItems: RichTextItemResponse[] }) => {
  if (!textItems) {
    return null;
  }

  return (
    <>
      {textItems.map((textItem, idx) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
        } = textItem;

        if ('text' in textItem) {
          const { text } = textItem;
          return (
            <span
              key={text.content + idx}
              className={clsx({
                'font-bold': bold,
                'font-mono font-semibold bg-zinc-600 text-zinc-200 px-1 py-0.5 m-1 rounded-md':
                  code,
                italic: italic,
                'line-through': strikethrough,
                underline: underline,
              })}
              style={color !== 'default' ? { color } : {}}
            >
              {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
            </span>
          );
        }

        return null;
      })}
    </>
  );
};
