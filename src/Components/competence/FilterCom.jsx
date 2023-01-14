import React, { useEffect } from 'react'

const FilterCom = ({ competences, activeButton, setFiltred, setActiveButton }) => {

    useEffect(() => {
        const filtred = competences.filter((item) =>
            item.filter.includes(activeButton))
        setFiltred(filtred)
    }, [activeButton]);

    return (
        <div className="competence_filter">
            <button
                className={
                    activeButton === "hardskills" ?
                        "activeCom btn-competence_filter" :
                        "btn-competence_filter"}
                onClick={() => setActiveButton("hardskills")}
            >Hard-Skills</button>
            <button
                className={
                    activeButton === "softskills" ?
                        "activeCom btn-competence_filter" :
                        "btn-competence_filter"}
                onClick={() => setActiveButton("softskills")}
            >Soft-Skills</button>
            <button
                className={
                    activeButton === "logiciels" ?
                        "activeCom btn-competence_filter" :
                        "btn-competence_filter"}
                onClick={() => setActiveButton("logiciels")}
            >Logiciels</button>
            <button
                className={
                    activeButton === "other" ?
                        "activeCom btn-competence_filter" :
                        "btn-competence_filter"}
                onClick={() => setActiveButton("other")}
            >Other</button>
        </div>
    )
}

export default FilterCom
