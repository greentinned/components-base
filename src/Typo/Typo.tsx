import { Block } from 'bem-react-core'

export interface Props {
  size: string
}

class Typo extends Block<Props> {
  props: Props

  block = 'Typo'

  static defaultProps = {
    size: 'text'
  }

  tag() {
    return 'span'
  }
  mods() {
    const { size } = this.props
    return {
      size
    }
  }
}

export default Typo
export { Typo }
