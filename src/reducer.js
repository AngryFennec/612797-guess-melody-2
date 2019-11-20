const initialState = {
  question: -1,
  mistakes: 0
};

const ActionType = {
  INCREMENT_QUESTIONS: `INCREMENT_QUESTIONS`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  RESET: `RESET`
}

const isArtistAnswerCorrect = (userAnswer, question) =>
  userAnswer.artist === question.song.artist;

const isGenreAnswerCorrect = (userAnswer, question) =>
  userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
));

const ActionCreator = {
  incrementQuestion: () => ({
    type: ActionType.INCREMENT_QUESTIONS,
    payload: 1
  }),
  resetGame: () => {
    return {
      type: ActionType.RESET
    };
  },
  incrementMistake: (userAnswer, question) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_QUESTIONS:
      return Object.assign({}, state, {
        step: state.step + action.payload,
      });

    case ActionType.INCREMENT_MISTAKES:
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.RESET:
      return Object.assign({}, initialState);
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  isArtistAnswerCorrect,
  isGenreAnswerCorrect,
  reducer,
};
