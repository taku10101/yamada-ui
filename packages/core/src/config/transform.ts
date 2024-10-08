import type { Dict } from "@yamada-ui/utils"
import type { CSSFunction } from "../css"
import type { StyledTheme } from "../theme.types"

const transformValues = [
  "rotate(var(--ui-rotate, 0))",
  "scaleX(var(--ui-scale-x, 1))",
  "scaleY(var(--ui-scale-y, 1))",
  "skewX(var(--ui-skew-x, 0))",
  "skewY(var(--ui-skew-y, 0))",
]

export function transform(
  value: any,
  _theme: StyledTheme,
  _css?: CSSFunction,
  _prev?: Dict,
) {
  if (value === "auto")
    return [
      "translateX(var(--ui-translate-x, 0))",
      "translateY(var(--ui-translate-y, 0))",
      ...transformValues,
    ].join(" ")

  if (value === "auto-3d")
    return [
      "translate3d(var(--ui-translate-x, 0), var(--ui-translate-y, 0), 0)",
      ...transformValues,
    ].join(" ")

  return value
}
