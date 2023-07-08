import {Component} from 'react'

import './index.css'

class ShowHide extends Component {

  state = {isClicked: true, isClickedLast: true}

  changeFirstBtn = () => {
    const {isClicked} = this.state

    if (isClicked === true) {
      this.setState({isClicked: false})
    } else {
      this.setState({isClicked: true})
    }
  }

  changeLastBtn =() => {
    const {isClickedLast} = this.state

    if (isClickedLast === true) {
      this.setState({isClickedLast: false})
    } else {
      this.setState({isClickedLast: true})
    }
  }

  render() {
    const {isClicked, isClickedLast} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="container">
          <div className="card-container1">
            <div>
              <button
                className="button" type="button" onClick={this.changeFirstBtn}>Show/Hide Firstname</button>

              {isClicked ? (
                <div className="inner-container1">
                  <h1 className="name">Joe</h1>
                </div>
              ) : null}
            </div>
          </div>
          <div className="card-container2">
            <div>
              <button
                className="button"
                type="button"
                onClick={this.changeLastBtn}
              >
                Show/Hide Lastname
              </button>
              {isClickedLast ? (
                <div className="inner-container1">
                  <h1 className="name">Jonas</h1>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide