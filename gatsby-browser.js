import wrapWithProvider from "./wrap-with-provider"

import React from "react"
import { silentAuth } from "./src/utils/auth"

require("typeface-montserrat")

export class SessionCheck extends React.Component {
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


export const wrapRootElement = wrapWithProvider