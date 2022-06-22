import React, { useState } from 'react'
import Squadmate from '../Components/Squadmate'
import Agent from '../Components/Agent'
import AgentMap from '../Components/AgentMap'
import Bust from '../Components/Bust'
function AgentSelector({ maps, mapsLoaded, agents, agentsLoaded }) {

    const [currentMap, setCurrentMap] = useState("")
    const [agentData, setAgentData] = useState([])
    const [squadMate1, setSquadMate1] = useState("")
    const [squadMate2, setSquadMate2] = useState("")
    const [squadMate3, setSquadMate3] = useState("")
    const [squadMate4, setSquadMate4] = useState("")
    const [mapRetrieved, setMapRetrieved] = useState(false)

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

    const handleMapClick = (map, configObjPOST) => {
        fetch(`/mapclick`, configObjPOST)
            .then((res) => res.json())
            .then((data) => {
                setAgentData(data.mapagents)
                setMapRetrieved(true)
            })
        setCurrentMap(map)
        if (mapRetrieved) {
            fetch(`/maps/${currentMap.uuid}`)
        }
    }

    const strongAgents = agentData.filter((agent) => agent.rating === "Strong")
    const generallyGoodAgents = agentData.filter((agent) => agent.rating === "Generally Good")
    const weakAgents = agentData.filter((agent) => agent.rating === "Weak")

    const getAgent = (agent_id) => {
        return agents.find((agent) => agent.id === agent_id)
    }

    const poke = () => console.log('that tickles')

    const renderStrongAgents = strongAgents.map((agent) => {
        return <Bust key={agent.id} agent={getAgent(agent.agent_id)} handleSetSquadMate={poke} />
    })

    const renderGenerallyGoodAgents = generallyGoodAgents.map((agent) => {
        return <Bust key={agent.id} agent={getAgent(agent.agent_id)} handleSetSquadMate={poke} />
    })

    const renderWeakAgents = weakAgents.map((agent) => {
        return <Bust key={agent.id} agent={getAgent(agent.agent_id)} handleSetSquadMate={poke} />
    })

    const renderMaps = maps.map((map) => {
        return <AgentMap map={map} currentMap={currentMap} handleMapClick={handleMapClick} />
    })

    const renderAgents = agents.map((agent) => {
        return <Agent key={agent.displayName} agent={agent} handleSetSquadMate={handleSetSquadMate} />
    })

    if (mapsLoaded && agentsLoaded) {
        return (
            <div className="page-container">
                <div className='agentmap-container'>
                    <div className='cards'>
                        {renderMaps}
                    </div>
                </div>
                <div className='bust-container'>
                    <Squadmate key="1" squadMate={squadMate1} handleRemoveSquadMate={handleRemoveSquadMate} />
                    <Squadmate key="2" squadMate={squadMate2} handleRemoveSquadMate={handleRemoveSquadMate} />
                    <Squadmate key="3" squadMate={squadMate3} handleRemoveSquadMate={handleRemoveSquadMate} />
                    <Squadmate key="4" squadMate={squadMate4} handleRemoveSquadMate={handleRemoveSquadMate} />
                </div>
                <div className="agent-pool">
                    {renderAgents}
                </div>

                <div className="recommend-container">
                    <div className='recommendations' id='Strong'>
                        {currentMap ? renderStrongAgents : null}
                    </div>
                    <div className='recommendations' id='Generally Good'>
                        {currentMap ? renderGenerallyGoodAgents : null}
                    </div>
                    <div className='recommendations' id='Weak'>
                        {currentMap ? renderWeakAgents : null}
                    </div>
                </div>
            </div>
        )
    } else
        return null
}

export default AgentSelector