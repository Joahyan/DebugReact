import { Component } from "react";

export default class AboutThisPage extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // this.handle = this.handle.bind(this);
  }

  handleOfArrow = (arg) => {
    console.log("箭头函数 this", this); //sy-log
    this.setState({ count: this.state.count + 1 }, () => {
      // callback 是可选的回调函数,它在状态更新完毕、界面也更新后(render 调用后)才被调用
      console.log("callback");
    });
  };

  handle() {
    console.log("标准函数 this", this); //sy-log
    // 通过forceUpdate 更新视图
    this.state.count++;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h3>AboutThisPage</h3>
        <p>{this.state.count}</p>
        <button onClick={this.handleOfArrow}>箭头函数</button>
        <button onClick={(...arg) => this.handle(arg)}>标准函数</button>
      </div>
    );
  }
}
