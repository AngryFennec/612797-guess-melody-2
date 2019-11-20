import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import settings from "./mocks/settings.js";
import questions from "./mocks/questions.js";
import reducer from "./reducer.js";

const init = (questions) => {

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  /* eslint-enable */

  ReactDOM.render(<Provider store={store}
      <App
        errorCount = {settings.errorCount}
        gameTime = {settings.gameTime}
        questions = {questions}
      />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(questions);
