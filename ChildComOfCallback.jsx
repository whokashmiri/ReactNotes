/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ChildComOfCallback = React.memo((props) => {
    console.log("Child Rerender");
    
    return (
        <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
    );
});

export default ChildComOfCallback;
