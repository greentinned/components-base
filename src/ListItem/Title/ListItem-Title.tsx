import { Elem } from 'bem-react-core'

interface Props {
  children: string
}

class Title extends Elem<Props> {
  props: Props

  block = 'ListItem'
  elem = 'Title'

  mix() {
    return {
      block: 'Typo',
      mods: {
        size: 'text'
      }
    }
  }
}

export default Title
