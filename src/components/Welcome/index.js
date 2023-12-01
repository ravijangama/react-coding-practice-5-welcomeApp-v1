// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  clickOnSubscribe = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return (
        <button type="button" onClick={this.onSubscribe} className="button">
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" onClick={this.onSubscribed} className="button">
        Subscribed
      </button>
    )
  }

  render() {
    const jsxElement = (
      <div className="bg-container">
        <div className="welcome-container">
          <h1 className="heading">Welcome</h1>
          <p className="wishing">Thank you! Happy Learning</p>
          {this.clickOnSubscribe()}
        </div>
      </div>
    )
    return jsxElement
  }
}
export default Welcome
