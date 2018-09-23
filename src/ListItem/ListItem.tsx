import * as React from 'react'
import { Bem, Block } from 'bem-react-core'
import { withControl, withControlAttrs } from '../Control/Control'

import Title from './Title/ListItem-Title'
import Subtitle from './Subtitle/ListItem-Subtitle'
import Icon from '../Icon/Icon'

interface Props {
  lead?: React.ReactNode
  trail?: React.ReactNode
  title: string
  subtitle?: string
  navigation: boolean
  disabled: boolean
  double: boolean
}

class ListItem extends Block<Props> {
  props: Props

  block = 'ListItem'

  static defaultProps = {
    title: 'Title',
    subtitle: '',
    disabled: false,
    navigation: false
  }

  mods() {
    const { double, navigation, disabled, subtitle } = this.props
    return {
      double: double || !!subtitle,
      navigation,
      disabled
    }
  }
  content() {
    const { lead, trail, title, subtitle } = this.props
    const { navigation } = this.props
    return (
      <Content>
        {lead && <Lead>{lead}</Lead>}
        <Text>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Text>
        {(trail || navigation) && (
          <Trail>
            {trail}
            {navigation && <Icon name="ChevronSmall" />}
          </Trail>
        )}
      </Content>
    )
  }
}

export default withControl(withControlAttrs(ListItem))
export { Props as ListItemProps }

/**
 * Inline
 */
const Content = ({ children }: any) => (
  <Bem block="ListItem" elem="Content">
    {children}
  </Bem>
)

const Lead = ({ children }: any) => (
  <Bem block="ListItem" elem="Lead">
    {children}
  </Bem>
)

const Text = ({ children }: any) => (
  <Bem block="ListItem" elem="Text">
    {children}
  </Bem>
)

const Trail = ({ children }: any) => (
  <Bem block="ListItem" elem="Trail">
    {children}
  </Bem>
)
