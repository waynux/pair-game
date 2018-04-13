const cards = [
  {
    text: 'Grin',
    src: 'https://cdn.jsdelivr.net/emojione/assets/png/1f601.png',
  },
  {
    text: 'Joy',
    src: 'https://cdn.jsdelivr.net/emojione/assets/png/1f602.png',
  },
  {
    text: 'Blush',
    src: 'https://cdn.jsdelivr.net/emojione/assets/png/1f60a.png',
  },
  {
    text: 'Heart Eyes',
    src: 'https://cdn.jsdelivr.net/emojione/assets/png/1f60d.png',
  },
  {
    text: 'Yum',
    src: 'https://cdn.jsdelivr.net/emojione/assets/png/1f60b.png',
  },
]

export default () => cards.concat(cards)
  .sort((a, b) => 0.5 - Math.random())
  .map((card, index) => ({...card,
    id: index + 1,
    isFlipped: false,
    isCorrect: false,
  }))
