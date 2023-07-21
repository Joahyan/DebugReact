import { Component, createElement, createRef } from "react";
export default class CreateElementPage extends Component {
  // 字符串类型
  buildButtons = () => {
    return createElement(
      "button",
      {
        onClick: () => {
          console.log("this is a button");
        },
        className: "",
      },
      "click"
    );
  };
  function1 = () => {
    console.log("hello, it is a function");
    return <>functionComponent</>;
  };
  // 方法类型
  buildFunctions = () => {
    return createElement(this.function1, {
      onClick: () => {
        console.log("parent function!");
      },
      ref: createRef(),
      name: "functionComponent",
    });
  };

  //   class类型
  buildClasses = () => {
    return createElement(ClassCopmonent, {
      onClick: () => {
        console.log("this is a class");
      },
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: 500,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <div>Fragment</div>
          <div>{this.buildButtons()}</div>
          {/* <div>{this.buildFregament()}</div> */}
        </div>
        <div
          style={{
            width: 500,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <div>Function</div>
          <div>{this.buildFunctions()}</div>
        </div>
        <div
          style={{
            width: 500,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <div>Class</div>
          <div>{this.buildClasses()}</div>
        </div>
      </div>
    );
  }
}

class ClassCopmonent extends Component {
  render() {
    return <>ClassComponent</>;
  }
}
