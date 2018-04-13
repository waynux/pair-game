import React from 'react'
import { connect } from 'react-redux'
import './styles/restartButton.css';
import { restartGame } from '../actions'

const RestartButton = ({restart}) => {
  return (
    <button onClick={restart} className={'restartButton'}>
      Restart
    </button>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  restart: () => dispatch(restartGame())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestartButton)
