import * as React from 'react'
import { Bem, Elem } from 'bem-react-core'
import { withControl, withControlAttrs } from '../../Control/Control'
import Icon from '../../Icon/Icon'

enum PositionType {
  Left = 'left',
  Right = 'right'
}

interface Props {
  position: PositionType
  icon?: string
  label?: string
}

class Action extends Elem<Props> {
  block = 'AppBar'
  elem = 'Action'

  elemMods() {
    const { position } = this.props
    return {
      position
    }
  }
  content() {
    const { icon, label } = this.props
    return (
      <React.Fragment>
        {icon && <Icon name={icon} />}
        {label && <Label>{label}</Label>}
      </React.Fragment>
    )
  }
}

export default withControl(withControlAttrs(Action))
export { PositionType }

const Label = ({ children }: any) => (
  <Bem
    block="AppBar"
    elem="Label"
    mix={{ block: 'Typo', mods: { size: 'hint' } }}
  >
    {children}
  </Bem>
)
