import { Avatar,Icon } from '@material-ui/core';
import React from 'react'
import './SidebareRow.css';
function SidebareRow({Icon,src,title}) {
    return (
        <div className='sidebareRow'>
           
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
            
        </div>
    )
}

export default SidebareRow
