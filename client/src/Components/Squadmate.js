import React from 'react'
function Squadmate({ squadMate, handleRemoveSquadMate, currentMap }) {
    const placeHolder = "https://wallpaperaccess.com/full/4547519.jpg"
    const handleClassName = () => {
        if (currentMap) {
            const strongAgents = currentMap.mapagents.filter((agent) => agent.agent_id === squadMate.id)
            const strongAgentsIds = strongAgents.map((mapagent) => mapagent.agent_id)
            if (currentMap.rolebias === squadMate.role) {
                return `bust-image-selected`
            } else if (strongAgentsIds.includes(squadMate.id)) {
                return 'bust-image-strong'
            }
        } else
            return "bust-image"
    }

    const sectionStyle = {
        backgroundImage: `url(https://media.valorant-api.com/agents/roles/${squadMate.role_uuid}/displayicon.png)`
    }
    return (
        <div className="bust-div" >
            <img className={handleClassName()} style={sectionStyle} onClick={() => handleRemoveSquadMate(squadMate)} src={squadMate ? squadMate.fullPortrait : placeHolder} alt={squadMate.displayName} />
            {squadMate ? <div className={"squadmate-text"}>{squadMate.displayName}</div> : null}
        </div>
    )
}

export default Squadmate