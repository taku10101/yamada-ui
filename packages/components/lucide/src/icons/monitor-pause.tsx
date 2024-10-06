import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorPause as MonitorPauseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorPause` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorPause = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorPauseIcon} {...props} />
))
