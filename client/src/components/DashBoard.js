import React, {Fragment} from 'react'
import Legends from '../Legends.json';
import './DashBoard.css';
import Legend from './Legend'


const onClickButton = (e) => {
    console.log("On click");
    console.log(e);
}

const monitorByMonitorTypeID = Legends.Monitor.reduce((acc, a) => 
     ((acc[a.MonitorTypeId] = acc[a.MonitorTypeId] || []).push(a), acc), {})

const legendByLegendID = Legends.Legends.reduce((acc, a) => 
     ((acc[a.Id] = acc[a.Id] || []).push(a), acc), {})


 const DashBoard = () => {
    return (
        <Fragment>
            
            {/* <h1>DashBoard</h1> */}
            <section id="navbar">
            {
                Legends.MonitorType.map(monitorType => 
                    {
                        return  <ul>
                            <li key={monitorType.Id}>{monitorType.description}
                                {
                                    monitorByMonitorTypeID[monitorType.Id].map(monitor => 
                                    {
                                        return <ul>
                                            <li>{monitor.Name}
                                                <ul>
                                                    {
   
                                                        // legendByLegendID[monitorType.LegendId].map(legend =>
                                                        // {
                                                        //     return legend.tags.map(tag => {
                                                        //         return <li color={tag.Color}>{tag.Label}</li>    
                                                        //     })
                                                            
                                                        // })
                                                    }
                                                </ul>
                                            </li>
                                        </ul>
                                    })
                                }
                            </li>
                        </ul>     
                    }
                )
               
            }
             </section>  

            
        </Fragment>
    )
}

export default DashBoard;
