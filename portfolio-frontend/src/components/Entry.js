import React from 'react'

const Entry = ({data}) => {
    const {title, subtitle, link, color} = data
    return (
        <a href={link} target="_blank">
            <div className="Entry" style={{backgroundColor: color}}>
                <div className="Entry__content">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </a>
    )
}

export default Entry
