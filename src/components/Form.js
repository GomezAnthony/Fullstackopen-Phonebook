import React from "react";

const Form = ({onSubmit, name, phone, nameChange, phoneChange}) => {
   return ( 
      <div>
         <form onSubmit={onSubmit}>
            <div>
               Name:
               <input
                value={name}
                onChange={nameChange}
                 />
            </div>
            <div>
               Phone:
               <input 
               value={phone}
               onChange={phoneChange}
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