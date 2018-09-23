import * as React from 'react'
import { Block } from 'bem-react-core'

export interface AbstractProps {
  onPress?: Function
  onRelease?: Function
  onMouseEnter?: Function
  onMouseLeave?: Function
  onFocus?: Function
  onBlur?: Function
  children?: React.ReactNode
}

export interface AbstractState {
  pressed: boolean
  hovered: boolean
  focused: boolean
}

class AbstractControl extends React.Component<AbstractProps, AbstractState> {
  props: AbstractProps
  state: AbstractState

  onTouchStart = (e: any) => {
    this.setState({ pressed: true })
    if (this.props.onPress) {
      this.props.onPress(e)
    }
  }
  onMouseDown = (e: any) => {
    this.setState({ pressed: true })
    if (this.props.onPress) {
      this.props.onPress(e)
    }
  }
  onMouseUp = (e: any) => {
    this.setState({ pressed: false })
    if (this.props.onRelease) {
      this.props.onRelease(e)
    }
  }
  onMouseEnter = (e: any) => {
    this.setState({
      hovered: true
    })

    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e)
    }
  }
  onMouseLeave = (e: any) => {
    this.setState({
      hovered: false
    })
    if (this.state.pressed) {
      this.setState({ pressed: false })
    }
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e)
    }
  }
  onFocus = (e: any) => {
    this.setState({
      focused: true
    })

    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
  }
  onBlur = (e: any) => {
    this.setState({
      focused: false
    })

    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
  }
}

const withControl = <P extends ControlAttrsProps>(
  Component: React.ComponentType<ControlAttrsProps & P>
) =>
  class Control extends AbstractControl {
    state: AbstractState = {
      pressed: false,
      focused: false,
      hovered: false
    }

    static defaultProps = Component.defaultProps

    render() {
      const {
        onTouchStart,
        onMouseDown,
        onMouseUp,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur
      } = this
      const { pressed, hovered, focused } = this.state
      return (
        <Component
          onTouchStart={onTouchStart}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          pressed={pressed}
          hovered={hovered}
          focused={focused}
          {...this.props}
        >
          {this.props.children}
        </Component>
      )
    }
  }

interface BemReactCoreDeclaration<P, S = {}> extends Block<P, S> {
  block: string
}

interface BemReactCoreClass<P, S = {}> {
  new (props: P, context?: any): BemReactCoreDeclaration<P, S>
}

export interface ControlAttrsProps {
  pressed?: boolean
  hovered?: boolean
  focused?: boolean
  onTouchStart?: any
  onMouseDown?: any
  onMouseUp?: any
  onMouseEnter?: any
  onMouseLeave?: any
  onFocus?: any
  onBlur?: any
  onKeyDown?: any
  onKeyUp?: any
}

function withControlAttrs<P>(
  Component: BemReactCoreClass<ControlAttrsProps & P>
) {
  return class extends Component {
    mods(...rest: Array<any>) {
      const { pressed, hovered, focused } = this.props
      return {
        ...super.mods(...rest),
        pressed,
        hovered,
        focused
      }
    }
    elemMods(...rest: Array<any>) {
      const { pressed, hovered, focused } = this.props
      return {
        ...super.elemMods(...rest),
        pressed,
        hovered,
        focused
      }
    }
    attrs(...rest: Array<any>) {
      const {
        onTouchStart,
        onMouseDown,
        onMouseUp,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
        onKeyDown,
        onKeyUp
      } = this.props

      return {
        ...super.attrs(...rest),
        tabIndex: 0,
        onTouchStart,
        onMouseDown,
        onMouseUp,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
        onKeyDown,
        onKeyUp
      }
    }
  }
}

export default AbstractControl
export { withControl, withControlAttrs }
