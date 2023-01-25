import React, {Fragment, useState} from 'react'
import Legends from '../Legends.json';
import './DashBoard.css';
import Legend from './Legend';
import Navbar from './Navbar';

const legendByLegendID = Legends.Legends.reduce((acc, a) => 
     ((acc[a.Id] = acc[a.Id] || []).push(a), acc), {})


 const DashBoard = () => {
    const [legend, setLegend] = useState(undefined)

    const onLegendSelected = (legendId) => {
        console.log("chjanged" + legendId)
        const legend = legendByLegendID[legendId];
        setLegend(legend);
    }

    return (
        <Fragment>
            <Legend legend={legend}/>
            <Navbar monitorTypes={Legends.MonitorType} monitor={Legends.Monitor} onLegendSelected={(legendId) => onLegendSelected(legendId)}/>
            
       
            {/* <section id="navbar">
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
             </section>   */}

            
        </Fragment>
    )
}

export default DashBoard;
