import { Block } from 'bem-react-core'

import GroupTitle from './GroupTitle/List-GroupTitle'

export interface Props {}

class List extends Block<Props> {
  props: Props

  block = 'List'

  mods() {
    return {}
  }
  content() {
    return 'List'
  }
}

export default List
export { List, GroupTitle as ListGroupTitle }
