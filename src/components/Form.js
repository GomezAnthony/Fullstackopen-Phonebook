import React from "react";

const Form = ({onSubmit, value, onChange}) => {
   return ( 
      <div>
         <form onSubmit={onSubmit}>
            <div>
               <input
                value={value}
                onChange={onChange}
                 />
            </div>
            <div>
               <button type="submit">Add</button>
            </div>
         </form>
      </div>
    );
}
 
export default Form;