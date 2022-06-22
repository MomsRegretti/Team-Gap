import React from 'react'

function AgentMap({ map, currentMap, handleMapClick}) {

    const configObjPOST = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            map
        })
    };

    return (
        <div className={currentMap === map?"card-active":"card"} style={{ background: `url(${map.splash}) no-repeat center` }} onClick={() =>handleMapClick(map, configObjPOST)}>
            <div className='shadow'></div>
            <div className='label'>
                <div className='icon'>
                    
                </div>
                <div className='info'>
                    <div className='title' style={{ textalign : "center"}}>This Map has been Chosen!</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default AgentMap