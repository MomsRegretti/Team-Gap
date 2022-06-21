import React from 'react'

function Agent({ agent , handleSetSquadMate}) {
    return (
        <>
            <img onClick={() => handleSetSquadMate(agent)} className='agent-icon' src={agent.displayIcon} alt={agent.displayName} />
        </>
    )
}

export default Agent