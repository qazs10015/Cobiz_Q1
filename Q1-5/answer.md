## Can you explain the problem with the following code, and how to fix it. 

I prefer ReactHooks not ReactClassComponent, but this problem seems state will always be 1 not 3, because `setState` is asynchronous.

The solution is use previous state to modify state

```jsx
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    this.setState((pre) => ({ ...pre, count: pre.count + 1 }));
    this.setState((pre) => ({ ...pre, count: pre.count + 1 }));
    this.setState((pre) => ({ ...pre, count: pre.count + 1 }));
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById('root'));

```