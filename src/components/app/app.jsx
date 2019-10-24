import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount, onClickHandler} = props;
  return <WelcomeScreen
    gameTime = {gameTime}
    errorCount = {errorCount}
    onClickHandler = {onClickHandler}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  onClickHandler: PropTypes.func
};

export default App;
