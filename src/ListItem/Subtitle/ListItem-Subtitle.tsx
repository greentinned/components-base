import { Elem } from 'bem-react-core'

interface Props {
  children: string
}

class Subtitle extends Elem<Props> {
  props: Props

  block = 'ListItem'
  elem = 'Subtitle'

  mix() {
    return {
      block: 'Typo',
      mods: {
        size: 'hint'
      }
    }
  }
}

export default Subtitle
