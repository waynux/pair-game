import prepareCards from '../data/prepareCards';

const defaultState = {
    selectedCardA: null,
    selectedCardB: null,
    cards: prepareCards(),
};

const game = (state=defaultState, action) => {
  switch (action.type) {
    case 'FLIP_CARD':
      const selectedCard = state.cards.find(card => card.id===action.id);

      if (state.selectedCardA!==null && state.selectedCardB===null) {
        if (selectedCard.id===state.selectedCardA.id) {
          return state
        }

        if (state.selectedCardA.text===selectedCard.text) {
          return {...state,
            selectedCardB: selectedCard,
            cards: state.cards.map(card =>
              (card.id===state.selectedCardA.id || card.id===selectedCard.id) ?
                {...card, isFlipped: true, isCorrect: true} : card
            )
          }
        }

        return {...state,
          selectedCardB: selectedCard,
          cards: state.cards.map(card => card.id===selectedCard.id ?
            {...card, isFlipped: true} : card
          )
        }
      }

      return {...state,
        selectedCardA: selectedCard,
        selectedCardB: null,
        cards: state.cards.map(card =>
          ({...card, isFlipped: card.id===action.id})
        )
      }

    case 'RESTART_GAME':
      return {
        selectedCardA: null,
        selectedCardB: null,
        cards: prepareCards(),
      };

    default:
      return state
  }
}

export default game
