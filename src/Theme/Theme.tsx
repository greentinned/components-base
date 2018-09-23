import { Block } from 'bem-react-core'

interface Props {
  name: string
}

class Theme extends Block<Props> {
  props: Props

  block = 'Theme'

  mods() {
    const { name } = this.props
    return {
      name
    }
  }
}

export default Theme
