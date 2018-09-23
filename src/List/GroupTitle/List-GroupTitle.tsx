import { Elem } from 'bem-react-core'

export interface Props {
  title: string
}

class GroupTitle extends Elem<Props> {
  props: Props

  block = 'List'
  elem = 'GroupTitle'

  static defaultProps = {
    title: 'Group'
  }

  content() {
    return this.props.title
  }
}

export default GroupTitle
