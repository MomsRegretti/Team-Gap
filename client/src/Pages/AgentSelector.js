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
            .then((res) => {
                if (res.ok) {
                    res.json()
                        .then((data) => {
                            if (data) {
                                setAgentData(data.mapagents)
                                setCurrentMap(data)
                            }
                        })
                }
            })
    }

    const strongAgents = agentData.filter((agent) => agent.rating === "Strong")
    const generallyGoodAgents = agentData.filter((agent) => agent.rating === "Generally Good")
    const weakAgents = agentData.filter((agent) => agent.rating === "Weak")

    const getAgent = (agent_id) => {
        return agents.find((agent) => agent.id === agent_id)
    }

    const poke = () => console.log('that tickles')



    const renderMapBias = () => {
        if (currentMap.rolebias === "Controller") {
            return <img style={{ margin: "20px auto" }} src='https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png' alt='Controller' />
        } else if (currentMap.rolebias === "Initiator") {
            return <img style={{ margin: "20px auto" }} src='https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png' alt='Initiator' />
        } else if (currentMap.rolebias === "Sentinel") {
            return <img style={{ margin: "20px auto" }} src='https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png' alt='Sentinel' />
        } else if (currentMap.rolebias === "Duelist") {
            return <img style={{ margin: "20px auto" }} src='https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png' alt='Duelist' />
        }
    }

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
        return <AgentMap key={map.uuid} map={map} currentMap={currentMap} handleMapClick={handleMapClick} />
    })

    const renderAgents = agents.map((agent) => {
        return <Agent key={agent.id} currentMap={currentMap} agent={agent} handleSetSquadMate={handleSetSquadMate} />
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
                <div className='teambias-container'>
                    <li className="teambias-text">Suggested Team Bias:</li>
                    {currentMap ? renderMapBias() : <li className='teambias-text' style={{ margin: 55 }}>Choose a Map!</li>}
                </div>
                <div className="agent-pool">
                    {renderAgents}
                </div>
                <div className="recommend-container">
                    <div style={{ gridColumn: 1 }} className='recommendations' id='Strong'>
                        <li >Strong</li>
                        {currentMap ? renderStrongAgents : null}
                    </div>
                    <div style={{ gridColumn: 2 }} className='recommendations' id='Generally Good'>
                        <li >Generally Good</li>
                        {currentMap ? renderGenerallyGoodAgents : null}
                    </div>
                    <div style={{ gridColumn: 3 }} className='recommendations' id='Weak'>
                        <li >Weak</li>
                        {currentMap ? renderWeakAgents : null}
                    </div>
                </div>
            </div>
        )
    } else
        return null
}

export default AgentSelector