import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkReact from "remark-react";
import RemarkCode from "./remark-code";
import { defaultSchema } from "hast-util-sanitize";
import "github-markdown-css/github-markdown.css";
interface Props {
  doc: string;
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), "className"],
  },
};

const Preview = (props: Props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, {
      createElement: React.createElement,
      sanitize: schema,
      remarkReactComponents: {
        code: RemarkCode,
      },
    })
    .processSync(props.doc).result;

  return <div className="flex-1 h-full overflow-auto p-2">{md}</div>;
};

export default Preview;
