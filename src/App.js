import React, { useState } from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import Data from "./components/Data";
const App = () => {
  const [person, setPerson] = useState([
    {name: 'Anthony Gomez'},
    {name: 'Rijja Gomez'}
  ])
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Button Clicked', e.target)
    const addName = {
      name: newName

    }
  
    const check = person.map(persons => persons.name)
    console.log(check)
    if (check.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPerson(person.concat(addName))
    setNewName('')
  }

 
 
  const handleChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }
  return (
    <div>
      <Title label="PhoneBook"/>
      <Form 
        onSubmit={handleSubmit} 
        value={newName}
        onChange={handleChange}
        />
        <Title label="Numbers"/>
        {person.map(people =>
          <Data key={people.name} people={people.name}/>
          )}
    </div>
  );
};

export default App;
