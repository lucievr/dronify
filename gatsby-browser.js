import { Provider } from 'react-redux'
import store from './src/state/store'

import React from "react"
import { silentAuth } from "./src/utils/auth"

require("typeface-montserrat")
class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <SessionCheck>
        {element}
      </SessionCheck>
    </Provider>
  )
}
