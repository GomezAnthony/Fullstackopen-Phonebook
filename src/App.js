import React, { useState, useEffect} from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import Data from "./components/Data";
import Filter from "./components/Filter";
import info from './services/information';

const App = () => {
  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [phone, setPhone] = useState('')
  const [filter, setFilter] = useState([])

  useEffect(() => {
    info
      .getAll()
      .then(infor => {
        setPerson(infor)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Button Clicked', e.target)
    const addName = {
      name: newName,
      number: phone,
    }
    const existing = person.find(person => person.name === newName)
    if (existing) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        info
          .update(existing.id, addName)
          .then(returned => {
            setPerson(person.map(persons => persons.id === returned.id ? persons : returned))
          })
          .catch(err => err)
      }
    } else {
      info
      .create(addName)
      .then(add => {
        alert(`${newName} added`)
        setPerson(person.concat(add))
        setNewName('')
        setPhone('')
      })
    }
    
  }

  const deletePerson = (id, name) => {
   if (window.confirm(`Delete ${name}`)) {
    info
      .remove(id)
      .then(() => {
        setPerson(person.filter(persons => persons.id !== id))
        
      })
      .catch(err => {
        setPerson(person.filter(p => p.id !== id))
      })
   }

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
       <Data person={filtered}  deletePeople={deletePerson}/>
    </div>
  );
};

export default App;
