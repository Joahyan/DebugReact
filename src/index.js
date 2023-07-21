import { React, createRoot, ReactDOM } from "./whichReact";
import "./index.css";

import jsx from "./pages/ExamplePage";
import TransitionPage from "./pages/TransitionPage";
import LifeCyclePage from "./pages/LifeCyclePage";
import SuspensePage from "./pages/SuspensePage";
import UseCallbackPage from "./pages/UseCallbackPage";
import UseMemoPage from "./pages/UseMemoPage";
import AboutThisPage from "./pages/AboutThisPage";
import ComponentPage from "./pages/componentClass/ComponentPage";
import PureComponentPage from "./pages/componentClass/PureComponentPage";
import MemoComponent from "./pages/componentClass/MemoComponent";
import CreateElementPage from "./pages/api/CreateElement";

// import FunctionPage from "./pages/componentClass/FunctionPage";

// ReactDOM.render(jsx, document.getElementById("root"));

const root = createRoot(document.getElementById("root"));

// root.render(jsx);
root.render(<CreateElementPage />);

console.log("React", React.version); //sy-log
