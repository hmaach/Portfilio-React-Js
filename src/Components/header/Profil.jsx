import React from 'react'
import './profil.css'
import data from '../../data/data.json'

const Profil = () => {

    const information = data
    const Me1 = information.images.me3
    return (
        <div>
            <div className="profil_container">
                <div className="anime">
                </div>
                <div className="pic">
                    <div className="pic2">
                    {/* <img src={Me1}  /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil
