import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import './card.css';

const Card = ({id, isFlipped, isCorrect, text, src, onClick}) => {
  const style = classNames({
    card: true,
    flipped: isFlipped,
    correct: isCorrect,
  });

  return (
    <div onClick={() => onClick(id)} className={style}>
      { (isFlipped || isCorrect) &&
        <img src={src} alt={text}/>
      }
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card
