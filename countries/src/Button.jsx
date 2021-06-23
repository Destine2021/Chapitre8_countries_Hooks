import React, { useState, useEffect } from 'react';

const Button = (props) => {
  


return <button className="btn btn-primary m-1" onClick={props.onClick}>  
{props.children}</button>
}
      
export default Button;
