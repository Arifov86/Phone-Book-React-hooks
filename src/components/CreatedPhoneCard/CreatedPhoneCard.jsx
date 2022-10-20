import React from 'react'
import './CreatedPhoneCard.scss'
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';


export default function CreatedPhoneCard({children, create, show, ...props}) {

  const [card, setCard] = useState({name: '', phone: '', email: '',});
 
  const addNewCard = (e) => {
    if(isNaN(card.name) && card.phone && card.email){

      const newCard = {
        ...card, 
        id: Date.now(),
      }
      create(newCard);
  
      setCard({name: '', phone: '', email: '',});
      alert('Congradulations! Your contacts added to phone book!');
    } else {
      alert('You did not fill out the all form!');
    }
  }

  const clearNewCard = () => {
    setCard({name: '', phone: '', email: '',});
    alert('Your form is clear');
  }

  return (
    <div className="form__wrap">
      <h2>{children}</h2>
      <form className="form__main">
        <Input
            className="input" 
            value={card.name} 
            onChange={e => setCard({...card, name: e.target.value})} 
            type="text" 
            placeholder="Name" 
        />
        <Input
            className="input" 
            value={card.phone} 
            onChange={e => setCard({...card, phone: e.target.value})} 
            type="number" 
            placeholder="Phone" 
        />
        <Input
            className="input" 
            value={card.email} 
            onChange={e => setCard({...card, email: e.target.value})} 
            type="email" 
            placeholder="Email" 
        /> 
        <Button className="btn" onClick={addNewCard}>Add contact</Button>
        <Button className="btn" onClick={clearNewCard}>Clear form</Button>  
      </form>
    </div>
  )
}
