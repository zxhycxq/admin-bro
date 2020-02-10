import { parseToRgb } from 'polished'
import { DefaultTheme } from 'styled-components'

export default (theme: DefaultTheme): string => {
  const rgb = parseToRgb(theme.colors.blueSecondary)
  const color = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, .58)`
  return `box-shadow: 0 1px 4px 0 ${color};`
}
