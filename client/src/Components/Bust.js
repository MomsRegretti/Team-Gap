import React from 'react'

function Bust({ agent }) {
    return (
        <div id='immediate'>
            <img className="agent-bust" src={agent.fullPortrait} alt={agent.displayName} />
        </div>
    )

}

export default Bust