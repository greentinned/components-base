import * as React from 'react'
import ListItem, { ListItemProps } from './ListItem'
import Switch from '../Switch/Switch'

export interface Props extends ListItemProps {
  checked: boolean
  disabled: boolean
}

class ListItemSwitch extends React.Component<Props> {
  props: Props

  static defaultProps = {
    ...ListItem.defaultProps,
    checked: false,
    disabled: false
  }

  render() {
    const { checked, ...rest } = this.props
    return (
      <ListItem
        {...rest}
        trail={<Switch checked={checked} disabled={this.props.disabled} />}
      />
    )
  }
}

export default ListItemSwitch
