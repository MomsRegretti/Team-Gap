import React from 'react'

function Agent({ agent, handleSetSquadMate }) {
    return (
        <div>
            <img onClick={() => handleSetSquadMate(agent)} className='agent-icon' src={agent.displayIcon} alt={agent.displayName} />
        </div>
    )
}

export default Agent