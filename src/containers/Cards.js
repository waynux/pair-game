import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card/Card'
import { flipCard } from '../actions'
import './styles/cards.css';

const Cards = ({ game, flipCard }) => {
  return (
    <div className='cards'>
    {
      game.cards.map(card =>
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          src={card.src}
          isFlipped={card.isFlipped}
          isCorrect={card.isCorrect}
          onClick={flipCard}
        />
      )
    }
    </div>
  )
}

const mapStateToProps = state => ({
  game: state.game,
})

const mapDispatchToProps = dispatch => ({
  flipCard: id => dispatch(flipCard(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)
