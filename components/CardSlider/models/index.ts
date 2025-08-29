import { JSXElementConstructor, ReactElement } from "react";

export type CardSliderProps = {
    data: unknown[];
    renderItem: (item: { item: unknown; index: number}) => ReactElement<unknown, string | JSXElementConstructor<any>> | null;
    customStyle?: object;
    itemWidth?: number;
}