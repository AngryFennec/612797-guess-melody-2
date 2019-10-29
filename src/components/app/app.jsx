import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';

class App extends React.PureComponent {
  render () {
    const {
      gameTime,
      errorCount,
    } = this.props;

    return <WelcomeScreen
      gameTime = {gameTime}
      errorCount = {errorCount}
    />;
  }
}
App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
};

export default App;
