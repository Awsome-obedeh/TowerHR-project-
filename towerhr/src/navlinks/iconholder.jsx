import React from 'react'
import classes from './iconholder.module.css'


const iconholder = ({svg, title}) => {
  return (
    <div className={classes.navLink}>
      <img src={svg}/>
      <p>{title} </p>
    </div>
  )
}

export default iconholder


