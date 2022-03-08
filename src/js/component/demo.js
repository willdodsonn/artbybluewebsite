import React, { useState } from 'react'

const testPage = (props) => {
    const [page, setPage] = useState("");

    return (
        <div className="setingColor">
            <div className="colors">
                <button
                    onClick={() => setPage("red")}
                    className={
                        "light red " + (page === "red" ? " glow" : "")
                    }></button>
                <button
                    onClick={() => setPage("yellow")}
                    className={
                        "light yellow" + (page === "yellow" ? " glow" : "")
                    }></button>
                <button
                    onClick={() => setPage("green")}
                    className={
                        "light green" + (page === "green" ? " glow" : "")
                    }></button>
            </div>
        </div>
    )

}