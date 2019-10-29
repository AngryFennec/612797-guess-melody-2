import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import settings from "./mocks/settings.js";
import questions from "./mocks/questions.js";

const init = () => {

  ReactDOM.render(
      <App
        errorCount = {settings.errorCount}
        gameTime = {settings.gameTime}
      />,
      document.querySelector(`#root`)
  );
};

init();
