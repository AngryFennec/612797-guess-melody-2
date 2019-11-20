import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from 'prop-types';
import GuessGenre from "../guess-genre/guess-genre.jsx";
import GuessArtist from "../guess-artist/guess-artist.jsx";
const QuestionType = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  _getScreen(question, onClick) {
    if (!question) {
      const {
        errorCount,
        gameTime,
      } = this.props;

      return <WelcomeScreen
        errorCount={errorCount}
        gameTime={gameTime}
        onStartButtonClick={onClick}
      />;
    }

    switch (question.type) {
      case `genre`: return <GuessGenre
        question={question}
        onAnswer={onClick}
      />;

      case `artist`: return <GuessArtist
        question={question}
        onAnswer={onClick}
      />;
    }

    return null;
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;
    let gameType;
    if (this.state.question !== -1) {
      gameType = questions[question].type === `genre` ? Question.GENRE : QuestionType.ARTIST;
    }

    return <section className={`game ${gameType !== undefined ? gameType : `` }`}>
      {this.state.question !== -1 && <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`
            }}
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"/>
          <div className="wrong"/>
          <div className="wrong"/>
        </div>
      </header>}

      {this._getScreen(questions[question], () => {
        this.setState({
          question: question >= questions.length - 1
            ? -1
            : question + 1,
        });
      })}
    </section>;
  }
}


App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});


const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementQuestion());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question,
        mistakes,
        maxMistakes
    ));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
