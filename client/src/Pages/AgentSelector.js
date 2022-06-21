import React, { useState, useEffect } from 'react'
import Squadmate from '../Components/Squadmate'
import Agent from '../Components/Agent'
function AgentSelector() {
    const [agents, setAgents] = useState([])
    const [map, setMap] = useState("")
    const [squadMate1, setSquadMate1] = useState("")
    const [squadMate2, setSquadMate2] = useState("")
    const [squadMate3, setSquadMate3] = useState("")
    const [squadMate4, setSquadMate4] = useState("")

    useEffect(() => {
        fetch('/agents')
            .then(r => r.json())
            .then(data => setAgents(data))
    }, [])

    const handleRemoveSquadMate = (squadmate) => {
        if (squadmate === squadMate1) {
            setSquadMate1("")
        }
        if (squadmate === squadMate2) {
            setSquadMate2("")
        }
        if (squadmate === squadMate3) {
            setSquadMate3("")
        }
        if (squadmate === squadMate4) {
            setSquadMate4("")
        }
    }

    const handleSetSquadMate = (agent) => {
        if (!squadMate1) {
            setSquadMate1(agent)
        }
        if (squadMate1 && !squadMate2) {
            setSquadMate2(agent)
        }
        if (squadMate1 && squadMate2 && !squadMate3) {
            setSquadMate3(agent)
        }
        if (squadMate1 && squadMate2 && squadMate3 && !squadMate4) {
            setSquadMate4(agent)
        }
    }

    const renderAgents = agents.map((agent) => {
        return <Agent key={agent.displayname} agent={agent} handleSetSquadMate={handleSetSquadMate} />
    })


    return (
        <div className="page-container">
            <div className='bust-container'>
                <Squadmate key="1" squadMate={squadMate1} handleRemoveSquadMate={handleRemoveSquadMate}/>
                <Squadmate key="2" squadMate={squadMate2} handleRemoveSquadMate={handleRemoveSquadMate}/>
                <Squadmate key="3" squadMate={squadMate3} handleRemoveSquadMate={handleRemoveSquadMate}/>
                <Squadmate key="4" squadMate={squadMate4} handleRemoveSquadMate={handleRemoveSquadMate}/>
            </div>
            <div className="agent-pool">
                <div>
                    {renderAgents}
                </div>
                {/* <button onClick={() => console.log(squadMate1)}> squadmates 1</button>
                <button onClick={() => console.log(squadMate2)}> squadmates 2</button>
                <button onClick={() => console.log(squadMate3)}> squadmates 3 </button>
                <button onClick={() => console.log(squadMate4)}> squadmates 4</button> */}
            </div>
        </div>
    )
}

export default AgentSelector