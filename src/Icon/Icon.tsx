import { Block } from 'bem-react-core'

export interface Props {
  name: string
  color?: string
  colorConst?: string
}

class Icon extends Block<Props> {
  props: Props

  block = 'Icon'

  mods() {
    const { name } = this.props
    return {
      name
    }
  }
  style({ name, color, colorConst }: Props) {
    // const url = `url(./assets/${name}.svg)`

    return {
      // maskImage: url,
      // WebkitMaskImage: url,
      backgroundColor: colorConst ? `var(${colorConst})` : color
    }
  }
}

export default Icon
export { Icon }
