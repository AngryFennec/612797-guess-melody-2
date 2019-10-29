import React from "react";
import PropTypes from 'prop-types';
import GuessGenre from "../guess-genre/guess-genre.jsx";

const WelcomeScreen = (props) => {
  const {gameTime, errorCount} = props;
  const onClickHandler = () => {};
  return (<section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>
    <button
      onClick = {onClickHandler}
      className="welcome__button">
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {gameTime} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {errorCount} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
    <GuessGenre/>
  </section>);
};

WelcomeScreen.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
};


export default WelcomeScreen;
