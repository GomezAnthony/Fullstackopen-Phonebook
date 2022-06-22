import React from "react";

const Filter = ({names, onChange}) => {
   return ( 
      <div>
         filter shown with
         <input onChange={onChange} value={names}/>
      </div>
    );
}
 
export default Filter;