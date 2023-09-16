import Card from "./Cards/card"
import classes from "./layout.module.css"

export default function MainLayout(){
    return (
        <>
       
           
                <div className={classes.firstSection}> 
           
                <Card title='Total Employees' employeeNo={30} increase='30%'/>
                <Card title='Remote Employees' employeeNo={10} increase='10%'/>
                <Card title='Online Employees' employeeNo={250} increase='20%'/>
                <Card title='Open Vaccancies' employeeNo={9} increase='20%'/>
            </div>
        
            
        </>
    )
}