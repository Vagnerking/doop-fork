import type { ComponentType } from 'react'
import { isPanelLayout, setPanelLayout, usePanelLayout, type PanelLayout } from '../lib/panelLayout'
import { ToggleChipGroup, ToggleChipItem } from './ui/toggle-chip'
import { PanelsDockedIcon, PanelsFloatingIcon, type IconProps } from './ui/icons'

const options: { value: PanelLayout; label: string; Icon: ComponentType<IconProps> }[] = [
  { value: 'floating', label: 'Floating', Icon: PanelsFloatingIcon },
  { value: 'docked', label: 'Docked', Icon: PanelsDockedIcon },
]

/** The chip row on the Appearance settings pane that picks the canvas
 *  editor's panel layout. */
export function PanelLayoutPicker() {
  const layout = usePanelLayout()
  return (
    <ToggleChipGroup
      aria-label="Canvas panels"
      value={layout}
      onValueChange={(next) => isPanelLayout(next) && setPanelLayout(next)}
    >
      {options.map(({ value, label, Icon }) => (
        <ToggleChipItem key={value} value={value}>
          <Icon aria-hidden /> {label}
        </ToggleChipItem>
      ))}
    </ToggleChipGroup>
  )
}
