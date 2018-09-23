import { Block } from 'bem-react-core'

export interface Props {
  label: string
  center: boolean
  waiting: boolean
  loading: boolean
}

class Progress extends Block<Props> {
  props: Props

  block = 'Progress'

  static defaultProps = {
    label: 'Loading',
    center: false,
    waiting: false,
    loading: true
  }

  mix() {
    const { center } = this.props
    if (!center) return

    return {
      block: 'Typo',
      mods: {
        size: 'text'
      }
    }
  }
  mods() {
    const { center, waiting, loading } = this.props
    return { center, waiting, loaded: !loading }
  }
  content() {
    const { label } = this.props
    return label
  }
}

export default Progress
