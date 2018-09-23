import * as React from 'react'
import { Bem, Elem } from 'bem-react-core'

interface Props {
  title: string
  subtitle?: string
  accent: boolean
}

class Detail extends Elem<Props> {
  props: Props

  block = 'ListItem'
  elem = 'Detail'

  static defaultProps = {
    title: 'Detail',
    accent: false
  }

  elemMods() {
    const { accent, subtitle } = this.props
    return {
      accent: accent || !!subtitle
    }
  }
  content() {
    const { title, subtitle } = this.props
    return (
      <React.Fragment>
        <Bem
          block="ListItem"
          elem="DetailTitle"
          mix={{
            block: 'Typo',
            mods: {
              size: 'text'
            }
          }}
        >
          {title}
        </Bem>
        {subtitle && (
          <Bem
            block="ListItem"
            elem="DetailSubtitle"
            mix={{
              block: 'Typo',
              mods: {
                size: 'hint'
              }
            }}
          >
            {subtitle}
          </Bem>
        )}
      </React.Fragment>
    )
  }
}

export default Detail
