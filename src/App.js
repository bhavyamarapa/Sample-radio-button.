import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      country: 'australia'
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onRadioChange = (e) => {
    this.setState({
      country: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <strong>Select country:</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="india"
                  checked={this.state.country === "india"}
                  onChange={this.onRadioChange}
                />
                <span>India</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="australia"
                  checked={this.state.country === "australia"}
                  onChange={this.onRadioChange}
                />
                <span>Australia</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="england"
                  checked={this.state.country === "england"}
                  onChange={this.onRadioChange}
                />
                <span>England</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="spain"
                  checked={this.state.country === "spain"}
                  onChange={this.onRadioChange}
                />
                <span>Spain</span>
              </label>
            </li>

          </ul>

          <button type="submit">Choose Country</button>
        </form>
      </div>
    );
  }
}

export default App;