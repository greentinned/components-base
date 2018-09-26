import { Block } from 'bem-react-core'
import { withControl, withControlAttrs } from '../Control/Control'

export enum ButtonType {
  normal = 'normal',
  accent = 'accent'
}

export interface Props {
  label: string
  type: ButtonType
  maxWidth: boolean
}

class Button extends Block<Props> {
  props: Props

  block = 'Button'

  static defaultProps = {
    label: 'Button',
    type: ButtonType.normal,
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
