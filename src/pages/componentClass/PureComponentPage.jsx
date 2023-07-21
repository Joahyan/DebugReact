import { PureComponent } from "react";

export default class PureComponentPage extends PureComponent {
  state = {
    message: "Hello,React",
  };

  handleClick = () => {
    // 虽然执行了 setState()，但是因为要更新的 state 中的 message 和旧的 state 中的 messafe 的值一样，所以 Parent 组件和 Child 子组件都不会重新 render()
    this.setState({ message: "Hello,React" });
  };

  render() {
    console.log("Parent render");
    return (
      <>
        <h1 onClick={this.handleClick}>{this.state.message}</h1>
        <button
          onClick={() => {
            this.setState({ message: "Hello,React 18" });
          }}
        >
          change
        </button>
        <Child />
      </>
    );
  }
}

class Child extends PureComponent {
  render() {
    console.log("Child render");
    return <h2>这是 Child 组件</h2>;
  }
}
