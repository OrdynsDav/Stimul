import { createElement, ElementType, forwardRef, ReactNode, useMemo } from "react";
import {
    HeadingAlign,
    HeadingColor,
    HeadingComponent,
    HeadingProps,
    HeadingSize,
    HeadingTag,
    HeadingWeight,
} from "../types";
import { cx } from "@/utils/cx";
import "./Heading.css"
import { getTypograf } from "@/lib/typograf";

const SIZE_MAP: Record<HeadingSize, string> = {
    xl: 'heading--xl',
    lg: 'heading--lg',
    md: 'heading--md',
    sm: 'heading--sm',
    xs: 'heading--xs',
};

const COLOR_MAP: Record<HeadingColor, string> = {
    ink: 'heading--color-ink',
    inkDeep: 'heading--color-ink-deep',
    slate: 'heading--color-slate',
    brand: 'heading--color-brand',
    paper: 'heading--color-paper'
};

const WEIGHT_MAP: Record<HeadingWeight, string> = {
    regular: 'heading--weight-regular',
    medium: 'heading--weight-medium',
    semibold: 'heading--weight-semibold',
    bold: 'heading--weight-bold',
};

const ALIGN_MAP: Record<HeadingAlign, string> = {
    left: 'heading--align-left',
    center: 'heading--align-center',
    right: 'heading--align-right',
};

function applyTypograf(children: ReactNode): ReactNode {
    if (typeof children === 'string') {
        return getTypograf().execute(children);
    }
    return children;
}

const HeadingImpl = forwardRef<HTMLHeadingElement, HeadingProps<HeadingTag>>(
    (
        {
            as,
            size = 'lg',
            color = 'ink',
            weight = 'semibold',
            align,
            balance = false,
            className,
            children,
            ...rest
        },
        ref
    ) => {
        const Tag: ElementType = as ?? 'h2';

        const content = useMemo(() => applyTypograf(children), [children]);

        return createElement(
            Tag,
            {
                ref,
                className: cx(
                    'heading',
                    SIZE_MAP[size],
                    COLOR_MAP[color],
                    WEIGHT_MAP[weight],
                    align && ALIGN_MAP[align],
                    balance && 'heading--balance',
                    className
                ),
                ...rest,
            },
            content
        );
    }
);

HeadingImpl.displayName = 'Heading';

export const Heading = HeadingImpl as HeadingComponent;