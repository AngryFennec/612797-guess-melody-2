import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';
import GuessGenre from "../guess-genre/guess-genre.jsx";
import GuessArtist from "../guess-artist/guess-artist.jsx";

class App extends React.PureComponent {

  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount
      } = props;
      return <WelcomeScreen
        gameTime = {gameTime}
        errorCount = {errorCount}
        onStartButtonClick = {onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];
    switch (currentQuestion.type) {
      case `genre`: return <GuessGenre
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <GuessArtist
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      questions
    } = this.props;
    const question = this.state.question;
    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          prevState,
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }


}
App.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};

export default App;
