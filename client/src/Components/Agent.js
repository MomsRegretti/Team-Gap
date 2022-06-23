import React from 'react'

function Agent({ agent, handleSetSquadMate, currentMap }) {
    return (
        <div>
            <img onClick={() => handleSetSquadMate(agent)} className={currentMap.rolebias === agent.role ? 'agent-icon-selected':'agent-icon'} src={agent.displayIcon} alt={agent.displayName} />
        </div>
    )
}

export default Agent