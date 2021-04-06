import React from 'react'

const ComplexEntry = ({data}) => {
    const {title, subtitle, text_position, background} = data
    const url = `http://localhost:1337${background[0].url}`

    return (
        <div className="ComplexEntry" style={{backgroundImage: `url(${url})`}}>
            <div className="V_center">
                <div className={`ComplexEntry__center ComplexEntry__${text_position}`}>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default ComplexEntry
