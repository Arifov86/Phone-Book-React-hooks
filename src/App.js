import './App.css';
import PhoneBook from './components/PhoneBook/PhoneBook';
import CreatedPhoneCard from './components/CreatedPhoneCard/CreatedPhoneCard'
import {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function App() {
  const [cards, setCadrs] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(result => result.json())
          .then(result => setCadrs(result))
          .catch(erorr => console.error('Erorr'));    
    }, []);

    const createCard = (newCard) => {
        setCadrs([...cards, newCard]);
    }

    const removeCard = (card) => {
        setCadrs(cards.filter(elem => elem.name + elem.id !== card.name + elem.id));
    }
    
  return (

    <BrowserRouter>
      <div className='navbar'>
        <div className='navbar__links'>
            <Link to='/phonebook' className='navbar__links'>Phone book</Link>
            <Link to='/createphonecard' className='navbar__links'>Create contact</Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<h1 className='title__main'>Hi in my App "Phone Book" in REAC</h1>}/>
        <Route path='/phonebook' element={<PhoneBook remove={removeCard} cards={cards} >Phone book</PhoneBook> }/>
        <Route path='/createphonecard' element={<CreatedPhoneCard create={createCard}>New phone card</CreatedPhoneCard>}/>
        <Route path='*' element={<h2 className='text__error'>Page not found</h2>} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App;