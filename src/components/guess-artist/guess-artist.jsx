import React from "react";
import PropTypes from 'prop-types';
import AudioPlayer from "../audio-player/audio-player.jsx";

class GuessArtist extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {isPlaying} = this.state;
    const {
      answers,
      song,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <AudioPlayer
          isPlaying={isPlaying}
          onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
          src={song.src}
        />
      </div>

      <form className="game__artist" onChange={onAnswer}>
        {answers.map((it, i) => <div className="artist" key={`artist-${i}`}>
          <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${i}`} id={`artist-${i}`} />
          <label className="artist__name" htmlFor={`artist-${i}`}>
            <img className="artist__picture" src={it.picture} alt={it.artist} />
            {it.artist}
          </label>
        </div>)}
      </form>
    </section>;
  }
}

GuessArtist.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default GuessArtist;
