import React from 'react';

const Link = ({ onClick, active, children }) => {

    return (
        <div 
        onClick={e => onClick()}
        style={active ? {color:"red"} : {color:'inherit'}}
        >
            {children}
           
        </div>
    )
}
export default Link