import * as React from 'react'
import ListItem, { ListItemProps } from './ListItem'
import Detail from './Detail/ListItem-Detail'

export interface Props extends ListItemProps {
  detail?: string
  subdetail?: string
  accent: boolean
}

class ListItemDetail extends React.Component<Props> {
  props: Props

  static defaultProps = {
    ...ListItem.defaultProps,
    detail: 'Detail',
    subdetail: '',
    accent: false
  }

  render() {
    const { detail, subdetail, accent, ...rest } = this.props
    return (
      <ListItem
        {...rest}
        double={!!subdetail}
        trail={<Detail title={detail} subtitle={subdetail} accent={accent} />}
      />
    )
  }
}

export default ListItemDetail
