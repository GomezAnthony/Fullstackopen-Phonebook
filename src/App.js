import React, { useState, useEffect} from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import Data from "./components/Data";
import Filter from "./components/Filter";
import axios from "axios";
const App = () => {
  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [phone, setPhone] = useState('')
  const [filter, setFilter] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPerson(response.data)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Button Clicked', e.target)
    const addName = {
      name: newName,
      phone: phone
    }
  
    const check = person.map(persons => persons.name)
    console.log(check)
    if (check.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPerson(person.concat(addName))
    setNewName('')
    setPhone('')
  }

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    console.log(e.target.value)
    setPhone(e.target.value)
  }

  const handleFilterChange = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }
  console.log(person.filter(e => e.name.includes('B')))
  const filtered = person.filter(e => e.name.toLowerCase().includes(filter))
  return (
    <div>
      <Title label="PhoneBook"/>
      <Filter
       onChange={handleFilterChange}
       value={filter}
       />
      <Title label="Add a new"/>
      <Form 
        onSubmit={handleSubmit} 
        name={newName}
        nameChange={handleNameChange}
        phone={phone}
        phoneChange={handlePhoneChange}
        />
        <Title label="Numbers"/>
        {filtered.map(people =>
          <Data key={people.name} people={people.name} phone={people.number}/>
          )}
    </div>
  );
};

export default App;
