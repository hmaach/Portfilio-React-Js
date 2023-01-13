import React, { useEffect } from 'react'
import './certificat.css'

const Filter = ({ certificats, setFiltred, activeButton, setActiveButton }) => {

    useEffect(() => {
        if (activeButton === "all") {
            setFiltred(certificats);

            return;
        }

        const filtred = certificats.filter((item) =>
            item.filter.includes(activeButton));

        setFiltred(filtred)
        // console.log(filtred)
    }, [activeButton]);

    return (
        <div className="filter">
            <button
                className={
                    activeButton === "all" ?
                        "active btn-filter" :
                        "btn-filter"}
                onClick={() => setActiveButton("all")}
            >All</button>
            <button
                className={
                    activeButton === "frontend" ?
                        "active btn-filter" :
                        "btn-filter"}
                onClick={() => setActiveButton("frontend")}
            >Front-End</button>
            <button
                className={
                    activeButton === "backend" ?
                        "active btn-filter" :
                        "btn-filter"}
                onClick={() => setActiveButton("backend")}
            >Back-End</button>
            <button
                className={
                    activeButton === "database" ?
                        "active btn-filter" :
                        "btn-filter"}
                onClick={() => setActiveButton("database")}
            >Data Base</button>
            <button
                className={
                    activeButton === "other" ?
                        "active btn-filter" :
                        "btn-filter"}
                onClick={() => setActiveButton("other")}
            >Other</button>
            {/* <br /><p>{JSON.stringify(filtred)}</p>    */}
        </div>
    )
}

export default Filter
