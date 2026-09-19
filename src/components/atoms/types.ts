import type Link from "next/link";
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ReactElement,
  ReactNode,
  Ref,
} from "react";

export type LinkVariant =
  | "nav"
  | "primary"
  | "secondary"
  | "outline"
  | "review";

type NextLinkProps = React.ComponentProps<typeof Link>;

export interface CustomLinkProps
  extends
    Omit<NextLinkProps, "className">,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Какой вид ссылки рисуем. По умолчанию — обычная навигационная. */
  variant?: LinkVariant;
  /**
   * Только для variant="nav". Явно пометить пункт как активный
   * (подчёркивание останется всегда, а не только при hover).
   * Если не передать — компонент сам сверит href с текущим путём.
   */
  active?: boolean;
  /**
   * Ссылка ведёт на внешний ресурс (Telegram, WhatsApp, Max, Avito и т.п.).
   * Автоматически проставляет target="_blank" и rel="noopener noreferrer".
   * Для variant="review" включается по умолчанию, так как отзывы всегда внешние.
   */
  external?: boolean;
  className?: string;
}
// Heading

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "xl" | "lg" | "md" | "sm" | "xs";
export type HeadingColor = "ink" | "inkDeep" | "slate" | "paper" | "brand";
export type HeadingWeight = "regular" | "medium" | "semibold" | "bold";
export type HeadingAlign = "left" | "center" | "right";

export interface HeadingOwnProps<T extends HeadingTag> {
  as?: T;
  size?: HeadingSize;
  color?: HeadingColor;
  weight?: HeadingWeight;
  align?: HeadingAlign;
  balance?: boolean;
  className?: string;
  children?: ReactNode;
}

export type HeadingProps<T extends HeadingTag> = HeadingOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof HeadingOwnProps<T>>;

export type HeadingComponent = <T extends HeadingTag = "h2">(
  props: HeadingProps<T> & { ref?: Ref<HTMLHeadingElement> },
) => ReactElement | null;

// Text

export type TextTag = "p" | "span" | "div" | "label" | "li" | "blockquote";
export type TextSize = "lg" | "md" | "sm" | "xs";
export type TextColor =
  | "ink"
  | "ink-deep"
  | "slate"
  | "gray"
  | "grayDark"
  | "brand"
  | "paper";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextAlign = "left" | "center" | "right";

export interface TextOwnProps<T extends TextTag> {
  as?: T;
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  align?: TextAlign;
  italic?: boolean;
  uppercase?: boolean;
  truncate?: boolean;
  className?: string;
  children?: ReactNode;
}

export type TextProps<T extends TextTag> = TextOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps<T>>;

export type TextComponent = <T extends TextTag = "p">(
  props: TextProps<T> & { ref?: Ref<Element> },
) => ReactElement | null;

// section

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"]

type SectionOwnProps<T extends ElementType = "section"> = {
  as?: T
  padding?: "none" | "sm" | "md" | "lg"
  variant?: "default" | "muted" | "inverted"
  container?: boolean
  className?: string
  children?: ReactNode
}

export type SectionProps<T extends ElementType = "section"> = SectionOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof SectionOwnProps<T>>
