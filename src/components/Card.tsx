import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;
  return (
    <li className="my-2">
      <div className="flex items-center gap-10">
        <Datetime datetime={pubDatetime} className="flex flex-col sm:flex-row" />
        <a href={href} className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0">
          {secHeading ? (
            <h2 className="text-lg font-medium decoration-dashed hover:underline flex">
              {title}
            </h2>
          ) : (
            <h3 className="text-lg font-medium decoration-dashed hover:underline flex">
              {title}
            </h3>
          )}
        </a>
      </div>
      {/* <p>{description}</p> */}
    </li>
  );
}