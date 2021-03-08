import React, { Component } from "react";

class InputPanel extends Component {
  state = { username: "", numOfTweets: 0 };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = () => {
    this.props.submitData(this.state.username, this.state.numOfTweets);
  };

  render() {
    return (
      <div className="container-inner">
        <form className="h-form">
          <label className="h-label">
            Username
            <input
              className="h-input"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label className="h-label">
            Number of Tweets
            <input
              className="h-input"
              type="text"
              name="numOfTweets"
              value={this.state.numOfTweets}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default InputPanel;
