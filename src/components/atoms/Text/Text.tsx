import { ElementType, ReactNode, createElement, forwardRef, useMemo } from "react";
import {
    TextAlign,
    TextColor,
    TextComponent,
    TextProps,
    TextSize,
    TextTag,
    TextWeight,
} from "../types";
import { cx } from "@/utils/cx";
import { getTypograf } from "@/lib/typograf";
import "./Text.css"

const SIZE_MAP: Record<TextSize, string> = {
    lg: 'text--lg',
    md: 'text--md',
    sm: 'text--sm',
    xs: 'text--xs',
};

const COLOR_MAP: Record<TextColor, string> = {
    ink: 'text--color-ink',
    'ink-deep': 'text--color-ink-deep',
    slate: 'text--color-slate',
    brand: 'text--color-brand',
    gray: "text--color-gray",
    grayDark: "text--color-gray-dark",
    paper: "text--color-paper",
};

const WEIGHT_MAP: Record<TextWeight, string> = {
    regular: 'text--weight-regular',
    medium: 'text--weight-medium',
    semibold: 'text--weight-semibold',
    bold: 'text--weight-bold',
};

const ALIGN_MAP: Record<TextAlign, string> = {
    left: 'text--align-left',
    center: 'text--align-center',
    right: 'text--align-right',
};

function applyTypograf(children: ReactNode): ReactNode {
    if (typeof children === 'string') {
        return getTypograf().execute(children);
    }
    return children;
}

const TextImpl = forwardRef<Element, TextProps<TextTag>>(
    (
        {
            as,
            size = 'md',
            color = 'ink',
            weight = 'regular',
            align,
            italic = false,
            uppercase = false,
            truncate = false,
            className,
            children,
            ...rest
        },
        ref
    ) => {
        const Tag: ElementType = as ?? 'p';

        const content = useMemo(() => applyTypograf(children), [children]);

        return createElement(
            Tag,
            {
                ref,
                className: cx(
                    'text',
                    SIZE_MAP[size],
                    COLOR_MAP[color],
                    WEIGHT_MAP[weight],
                    align && ALIGN_MAP[align],
                    italic && 'text--italic',
                    uppercase && 'text--uppercase',
                    truncate && 'text--truncate',
                    className
                ),
                ...rest,
            },
            content
        );
    }
);

TextImpl.displayName = 'Text';

export const Text = TextImpl as TextComponent;