//Core
import ReactDOM from "react-dom";
//Components
import App from "components/App";
//Styles
import GlobalStyles from "styles/index.styles";
import "rc-slider/assets/index.css";

ReactDOM.render(
  <>
    <App />

    <GlobalStyles />
  </>,
  document.getElementById("root")
);
