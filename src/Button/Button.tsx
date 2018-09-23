import { Block } from 'bem-react-core'
import { withControl, withControlAttrs } from '../Control/Control'

export interface Props {
  label: string
  type: string
  maxWidth: boolean
}

class Button extends Block<Props> {
  props: Props

  block = 'Button'

  static defaultProps = {
    label: 'Button',
    type: 'normal',
    maxWidth: true
  }

  mix() {
    return {
      block: 'Typo',
      mods: {
        size: 'text'
      }
    }
  }

  mods() {
    const { type, maxWidth } = this.props
    return {
      type,
      maxWidth
    }
  }

  content() {
    const { label } = this.props
    return label
  }
}

export default withControl(withControlAttrs(Button))
