import { Bem, Block } from 'bem-react-core'
import * as React from 'react'
import { withControl, withControlAttrs } from '../Control/Control'

export interface Props {
  checked: boolean
  disabled: boolean
}

class Switch extends Block<Props> {
  props: Props

  block = 'Switch'

  static defaultProps = {
    checked: false,
    disabled: false
  }

  mods() {
    const { checked, disabled } = this.props
    return { checked, disabled }
  }
  content() {
    return <Bem elem="Toggle" />
  }
}

export default withControl(withControlAttrs(Switch))
