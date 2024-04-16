import {theme} from "styles/Theme";

type FontType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fMin?: number
    fMax?: number
}
export const font = ({color, weight, family, lineHeight, fMin, fMax}: FontType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color:  ${color || theme.colors.font};
    line-height:  ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${fMax} - ${fMin}) + ${fMin}px);

`