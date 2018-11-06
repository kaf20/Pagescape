import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom';

const Counter = ({dispatch, state}) =>
    <div>
        <button onClick={() => dispatch('SGA_INCREMENT_ASYNC')}>
            Increment after 1 second
        </button>
        {' '}
        <button onClick={() => dispatch('RDX_INCREMENT')}>
            Increment
        </button>
        {' '}
        <button onClick={() => dispatch('RDX_DECREMENT')}>
            Decrement
        </button>
        {' '}
        <button onClick={() => dispatch('SGA_DONE')}>
            Done
        </button>
        {' '}
        <Link to='/error'>Error</Link>
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
