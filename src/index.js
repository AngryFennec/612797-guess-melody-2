import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const init = () => {

  const settings = {
    errorCount: 3,
    gameTime: 5,
    onClickHandler: () => {}
  };
  ReactDOM.render(
      <App
        errorCount = {settings.errorCount}
        gameTime = {settings.gameTime}
        onClickHandler = {settings.onClickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
