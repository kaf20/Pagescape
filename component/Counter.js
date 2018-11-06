import React, {PropTypes} from 'react'

const Counter = ({dispatch, state}) =>
    <div>
        <button onClick={() => dispatch('SGA_INCREMENT_ASYNC')}>
            Increment after 1 second
        </button>
        {' '}
        <button onClick={() => dispatch('RDR_INCREMENT')}>
            Increment
        </button>
        {' '}
        <button onClick={() => dispatch('RDR_DECREMENT')}>
            Decrement
        </button>
        {' '}
        <button onClick={() => dispatch('SGA_DONE')}>
            Done
        </button>
        <hr />
        <div>
            Clicked: {state} times
        </div>
    </div>

Counter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.number.isRequired
}

export default Counter
