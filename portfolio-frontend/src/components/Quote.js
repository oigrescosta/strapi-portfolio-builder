import React from 'react'

const Quote = ({data}) => {
    const {big_text, author, background_color} = data
    return (
        <div className="Quote" style={{backgroundColor: background_color}}>
            <div className="V_center">
                <h1>{big_text}</h1>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default Quote
