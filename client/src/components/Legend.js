import React, { Fragment } from "react";
import "./Legend.css";

const Legend = (props) => {
  const { legend } = props;
  return (
    <Fragment>
      <h2>Legend</h2>
        <ul class="lagent">
          {legend?.map((legend) => {
            return legend.tags.map((tag) => {
              return <li style={{ color: tag.Color }}>{tag.Label}</li>;
            });
          })}
        </ul>
    </Fragment>
  );
};

export default Legend;
