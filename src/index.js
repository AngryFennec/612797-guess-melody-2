import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const init = () => {

  const settings = {
    errorCount: 3,
    gameTime: 5
  };
  ReactDOM.render(
      <App
        errorCount = {settings.errorCount}
        gameTime = {settings.gameTime}
      />,
      document.querySelector(`#root`)
  );
};

init();
