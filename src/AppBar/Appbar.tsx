import * as React from 'react'
import { Bem, Block } from 'bem-react-core'
import Action, { PositionType } from './Action/AppBar-Action'

type ActionType = {
  label?: string
  icon?: string
}

export interface Props {
  theme: string
  title: string
  subtitle?: string
  actionLeft?: ActionType
  actionRight?: ActionType
  actionRight2?: ActionType
  height: number
}

class AppBar extends Block<Props> {
  block = 'AppBar'

  static height: number = 64
  static width: number = 360
  style() {
    return {
      height: AppBar.height + 'px'
    }
  }

  mix() {
    return {
      block: 'Typo',
      mods: {
        size: 'text'
      }
    }
  }

  mods() {
    const { theme } = this.props
    return {
      theme
    }
  }

  content() {
    const {
      title,
      subtitle,
      actionLeft,
      actionRight,
      actionRight2
    } = this.props

    return (
      <React.Fragment>
        <Left>
          {actionLeft && (
            <Action
              position={PositionType.Left}
              icon={actionLeft.icon}
              label={actionLeft.label}
            />
          )}
        </Left>
        <Body>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Body>
        <Right>
          {actionRight && (
            <Action
              position={PositionType.Right}
              icon={actionRight.icon}
              label={actionRight.label}
            />
          )}
          {actionRight2 && (
            <Action
              position={PositionType.Right}
              icon={actionRight2.icon}
              label={actionRight2.label}
            />
          )}
        </Right>
      </React.Fragment>
    )
  }
}

export default AppBar
export { AppBar, ActionType }

/**
 * Inline
 */
const Body = ({ children }: any) => (
  <Bem block="AppBar" elem="Body">
    {children}
  </Bem>
)

const Left = ({ children }: any) => (
  <Bem block="AppBar" elem="Left">
    {children}
  </Bem>
)

const Right = ({ children }: any) => (
  <Bem block="AppBar" elem="Right">
    {children}
  </Bem>
)

const Title = ({ children }: any) => (
  <Bem
    block="AppBar"
    elem="Title"
    mix={{ block: 'Typo', mods: { size: 'text' } }}
  >
    {children}
  </Bem>
)

const Subtitle = ({ children }: any) => (
  <Bem
    block="AppBar"
    elem="Subtitle"
    mix={{ block: 'Typo', mods: { size: 'hint' } }}
  >
    {children}
  </Bem>
)
