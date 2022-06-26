import React from "react";


const Data = ({person, deletePeople}) => {

   return ( 
      <div>
         {person.map(({name, number ,id}) =>
               <div key={id}>{name} {number}
               <button type="submit" onClick={() => deletePeople(id, name)}>delete</button>
               </div>
            )}
         
      </div>
    );
}
 
export default Data;