import type { HTMLProps, ReactElement } from "react";

// given '<h2>some element</h2>' returns 'some element'
function stripHTMLTags(value: string) {
  return value.replace(/<\/?[^>]+(>|$)/g, "");
}

interface HeadingProps extends HTMLProps<HTMLElement> {
  element: "h1" | "h2" | "h3" | "h4"; // tailwind typography doesn's support h5/h6
  providedId?: string;
  children: ReactElement;
}

export function Heading({ children, element, id: providedId }: HeadingProps) {
  const CustomTag = element;

  const id =
    providedId ||
    stripHTMLTags(children.props.value).toLowerCase().replaceAll(" ", "-");

  return (
    <CustomTag>
      <span className="fragment-link-wrapper" id={id}>
        <a href={"#" + id} className="fragment-link">
          <svg width="32" height="32" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="m208.6 118.1l-28.3 28.3a50.1 50.1 0 0 1-70.7 0a6 6 0 0 1 8.5-8.5a38 38 0 0 0 53.7 0l28.3-28.3a38 38 0 1 0-53.7-53.7l-19.8 19.8a6 6 0 0 1-8.5-8.5l19.8-19.8a49.9 49.9 0 0 1 70.7 0a50 50 0 0 1 0 70.7Zm-79.2 62.2l-19.8 19.8a38 38 0 0 1-53.7-53.7l28.3-28.3a38 38 0 0 1 53.7 0a6 6 0 0 0 8.5-8.5a50 50 0 0 0-70.7 0l-28.3 28.3a50 50 0 0 0 0 70.7a50.1 50.1 0 0 0 70.7 0l19.8-19.8a6 6 0 0 0-8.5-8.5Z"
            />
          </svg>
        </a>

        {children}
      </span>
    </CustomTag>
  );
}
