import React from 'react'

const Tiles = (props) => {    
    
    return (
        <>
            <div className='board-tile' onClick={props.onClick} >{ props.value }</div>
        </>
    )
}

export default Tiles;