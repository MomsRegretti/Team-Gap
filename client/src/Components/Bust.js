import React from 'react'

function Bust({ agent }) {
    return (
        <div>
            <img className='agent-bust' src={agent.fullPortrait} alt={agent.displayName} />
        </div>
    )

}

export default Bust