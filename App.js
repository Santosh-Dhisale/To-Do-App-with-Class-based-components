
// To Do application with Class based components:
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    this.setState((state) => ({
      items: state.items.concat({ text: this.state.text }),
      text: ""
    }));
  };
  handleCancel = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      items: state.items.splice(1),
      text: ""
    }));
  };
  render() {
    return (
      <div>
        <center>
        <h1>To-Do Application</h1>
        <form onSubmit={this.handleSubmit}>
          <h2><label htmlFor="new-todo">What needs to be done?   </label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text}  />
          <button>Add #{this.state.items.length + 1}</button></h2>
          <ol>
            {this.state.items.map((item) => (
              <li key={item.id}>
                {item.text}
                <button onClick={this.handleCancel}>Cancel</button>
              </li>
            ))}
          </ol>
        </form>
        </center>
      </div>
    );
  }
}
export default App;



