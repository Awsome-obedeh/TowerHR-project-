import React from 'react'
import SideNav from '../sideNav'
import MainLayout from './layout'
import classes from './body.module.css'

const Body = () => {
  return (

    <>
    <div style={{display:'block',backgroundColor:'red' }}>Dashboard</div>
      <div className={classes.main}>
      
        <div className={classes.sidenav}>
              <SideNav/>
        </div>
    

                <div className={classes.bodyContent}>
                    <MainLayout/>
                </div>
               
         
     

        
        
        

      </div>
    </>
   
  )
}

export default Body
