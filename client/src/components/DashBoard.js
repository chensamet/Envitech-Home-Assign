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
             </Fragment>
    )
}

export default DashBoard;
