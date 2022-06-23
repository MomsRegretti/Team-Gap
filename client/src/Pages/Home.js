import React from 'react'

function Home({ user }) {
    return (
        <div className="page-container" style={{ margin: "5% auto" , height: "70vh"}}>
            <div style={{ width: "80%", margin : "auto"}}>
                <p style={{ fontFamily: "valorant" }}>Welcome to Team Canyon{user ? ", " + user.name : null}!</p>
                <div style={{ display: "grid", height: "auto", width: "100%"}}>
                    <div style={{ width: "100%", height: "auto", margin: "auto"}}>
                        <img style={{ width: "inherit", height: "inherit" }} src="https://valorant-api.com/assets/img/logo_transparent.png?v=1" class="img-fluid animated" alt="logo"></img>
                    </div>
                    <div style={{ gridColumn: 2, justifyContent: "center", justifyItems: "center", display: "grid" }}>
                        <p style={{ textAlign: "center", placeSelf: "center"}}>Welcome to Team Canyon! This web application was made to be used in the pre-game lobby of the FPS game, Valorant. </p>
                        <p style={{ textAlign: "center" }}>The assets used herein are property of Riot Games, retrieved using an external "Valorant API". </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home