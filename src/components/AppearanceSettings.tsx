import { useTheme } from '../lib/theme'
import { ThemePicker } from './ThemePicker'
import { PanelLayoutPicker } from './PanelLayoutPicker'
import { usePanelLayout } from '../lib/panelLayout'
import { Note } from './ui/note'
import { CardDescription, CardHeader, CardRow, CardTitle, SettingsCard } from './ui/card'

/** The "Appearance" pane of /settings. The theme is a property of this
 *  browser rather than the account — it is how the device looks, like zoom —
 *  so nothing here touches the server. */
export function AppearanceSettings() {
  const { theme, resolved } = useTheme()
  const panelLayout = usePanelLayout()
  return (
    <>
      <SettingsCard>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>
            Light or dark, across every canvas and page in this browser. System follows your operating system and
            switches whenever it does.
          </CardDescription>
        </CardHeader>
        <CardRow label="Appearance">
          <ThemePicker />
          <Note>
            {theme === 'system'
              ? `Following your system — ${resolved} right now.`
              : 'Set by hand — your system setting is ignored.'}
          </Note>
        </CardRow>
      </SettingsCard>
      <SettingsCard>
        <CardHeader>
          <CardTitle>Canvas panels</CardTitle>
          <CardDescription>
            How the canvas editor lays out Layers, the inspector and Agents in this browser. Floating panels hover over
            the canvas; docked panels sit flush against the window's edges, with the canvas between them.
          </CardDescription>
        </CardHeader>
        <CardRow label="Layout">
          <PanelLayoutPicker />
          <Note>{panelLayout === 'docked' ? 'Panels are docked to the edges.' : 'Panels float over the canvas.'}</Note>
        </CardRow>
      </SettingsCard>
    </>
  )
}
