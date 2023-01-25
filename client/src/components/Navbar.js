import React from "react";
import "./DashBoard.css";

const Navbar = (props) => {
  const { monitorTypes, monitor, onLegendSelected } = props;
  const monitorByMonitorTypeID = monitor.reduce((acc, a) => 
    ((acc[a.MonitorTypeId] = acc[a.MonitorTypeId] || []).push(a), acc), {})
  return (
    <section class="menu" id="navbar">
      <ul>
        {monitorTypes.map((monitorType) => {
          return (
            <li>
              {monitorType.description}
              <ul>
                {monitorByMonitorTypeID[monitorType.Id].map((monitor) => {
                  return (
                    <li>
                      <a
                        href="#"
                        onClick={() => onLegendSelected(monitorType.LegendId)}
                      >
                        {monitor.Name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Navbar;
