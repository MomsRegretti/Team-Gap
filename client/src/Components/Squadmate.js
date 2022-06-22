import React from 'react'
function Squadmate({ squadMate, handleRemoveSquadMate }) {
    const placeHolder = "https://wallpaperaccess.com/full/4547519.jpg"
    const handleClassName = () => {
        return `bust-image-${squadMate.role}`
    }
    return (
        <div className="bust-div" >
            <img className={squadMate ? handleClassName() : "bust-image"} onClick={() => handleRemoveSquadMate(squadMate)} src={squadMate ? squadMate.fullPortraitV2 : placeHolder} alt={squadMate.displayName} />
            {squadMate ? <div className={"squadmate-text"}>{squadMate.displayName}</div> : null}
        </div>
    )
}

export default Squadmate