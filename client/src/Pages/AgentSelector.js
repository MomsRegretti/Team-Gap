import React, { useState, useEffect } from 'react'

function AgentSelector() {
    const [agents, setAgents] = useState([])

    useEffect(() => {
        fetch('/agents')
        .then(r=> r.json())
        .then(data => setAgents(data))
    },[])
    
    return (
        <div>AgentSelector
            <div>
                {agents.map((agent)=> {
                    return <img className='agent-portrait' key={agent.uuid} src={agent.bustPortrait} alt={agent.displayName}/>
                })}
            </div>
        </div>
    )
}

export default AgentSelector