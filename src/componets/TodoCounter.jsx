import React from 'react'

function TodoCounter(props) {
    return (
        <h2>
        You have completed {props.completed} of {props.total} Todo´s
        </h2>
    )
}

export {TodoCounter}
