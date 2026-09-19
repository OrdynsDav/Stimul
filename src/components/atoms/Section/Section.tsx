import {
  forwardRef,
  type ElementType,
  type PropsWithoutRef,
  type ReactElement,
} from "react"
import "./Section.css"
import { cx } from "@/utils/cx"
import { Container } from "../Container/Container"
import { PolymorphicRef, SectionProps } from "../types"

function fixedForwardRef<T, P extends object = object>(
  render: (props: P, ref: React.Ref<T>) => ReactElement | null
) {
  return forwardRef(
    render as unknown as React.ForwardRefRenderFunction<T, PropsWithoutRef<P>>
  ) as unknown as (props: P & React.RefAttributes<T>) => ReactElement | null
}

const SectionInner = <T extends ElementType = "section">(
  {
    as,
    padding = "md",
    variant = "default",
    container = true,
    className,
    children,
    ...rest
  }: SectionProps<T>,
  ref: PolymorphicRef<T>
) => {
  const Component = (as || "section") as ElementType

  return (
    <Component
      ref={ref}
      className={cx(
        "section",
        "u-reveal",
        `section--padding-${padding}`,
        variant !== "default" && `section--${variant}`,
        className
      )}
      {...rest}
    >
      {container ? <Container>{children}</Container> : children}
    </Component>
  )
}

export const Section = fixedForwardRef(SectionInner) as <T extends ElementType = "section">(
  props: SectionProps<T> & { ref?: PolymorphicRef<T> }
) => ReactElement | null