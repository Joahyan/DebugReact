import { Component } from "react";

export default class ComponentPage extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // setState更新数据 只要执行 setState()，即使不改变 state 状态数据，组件也会重新 render()。
  setStateHandler = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      // callback 是可选的回调函数,它在状态更新完毕、界面也更新后(render 调用后)才被调用
      console.log("callback");
    });
  };

  // forceUpdate更新视图
  forceUpdateHandler = () => {
    this.state.count++;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h3>ComponentPage</h3>
        <p>{this.state.count}</p>
        <button onClick={this.setStateHandler}>setState</button>
        <button style={{ marginLeft: 16 }} onClick={this.forceUpdateHandler}>
          forceUpdate
        </button>
      </div>
    );
  }
}
