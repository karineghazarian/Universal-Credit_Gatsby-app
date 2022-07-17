/* eslint-disable react/prop-types */
import { Component } from "react"
import ReactDOM from "react-dom"

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

export default class Portal extends Component {
  constructor() {
    super();
    // Use a ternary operator to make sure that the document object is defined
    this.el =
      typeof document !== `undefined` ? document.createElement("div") : null
  }

  componentDidMount() {
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el)
  }

  render() {
    // Check that this.el is not null before using ReactDOM.createPortal
    if (this.el) {
      // eslint-disable-next-line react/destructuring-assignment
      return ReactDOM.createPortal(this.props.children, this.el)
    }
    return null
  }
}
