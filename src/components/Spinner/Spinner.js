import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="looping-rhombuses-spinner">
    	<div className="rhombus"></div>
    	<div className="rhombus"></div>
    	<div className="rhombus"></div>
    </div>
  );
};
export default Spinner;
