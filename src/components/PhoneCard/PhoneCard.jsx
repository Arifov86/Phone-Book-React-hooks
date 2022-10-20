import React from 'react'
import Button from '../Button/Button'
import './PhoneCard.scss'
import '../Modal/Modal.scss'
import { useState } from 'react'
import Input from '../Input/Input'
import Modal from '../Modal/Modal'

export default function PhoneCard({cards, ...props}) {
  
  const [visibleName, setVisibleName] = useState(false);
  const [visiblePhone, setVisiblePhone] = useState(false);
  const [visibleEmail, setVisibleEmail] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editEmail, setEditEmail] = useState('');

  const saveName = () => {
    cards.forEach(elem => {
      if(elem.name === props.card.name){
        if(editName){
          setEditName(elem.name = editName, props.card.name = editName);
          setVisibleName(false);
          setEditName('');
        } else {
          alert('Wrong fill form');
        }

      }
    });      
  }

  const savePhone = () => {
    cards.forEach(elem => {
      if(elem.name === props.card.name){
        if(editPhone){
          setEditPhone(elem.phone = editPhone, props.card.phone = editPhone);
          setVisiblePhone(false);
          setEditPhone('');
        } else {
          alert('Wrong fill form');
        }
      } 
    });      
  }

  const saveEmail = () => {
    cards.forEach(elem => {
      if(elem.name === props.card.name){
        if(editEmail){
          setEditEmail(elem.email = editEmail, props.card.email = editEmail);
          setVisibleEmail(false);
          setEditEmail('');
        } else {
          alert('Wrong fill form');
        }
      } 
    });      
  }

  return (
    <div className="phoneCard">  
        <div>
          <h4>Full name:</h4> 
          {visibleName ? 
          <Input type="text" onChange={(e) => setEditName(e.target.value)} placeholder={props.card.name}/>  
          :
          <p onClick={() => {setVisibleName(true)}} className="name">{`${props.number}).`}{props.card.name}</p>}
          {visibleName ? (<Button className="btn__save" onClick={saveName}>Save</Button> ) : null}
          {visibleName ? (<Button className="btn__cancel" onClick={() => setVisibleName(false)}>Cancel</Button> ) : null} 
        </div>
        <div>
          <h4>Phone:</h4>
          {visiblePhone ? (<Input type="number" onChange={(e) => setEditPhone(e.target.value)} placeholder={props.card.phone}/>)
          : 
          <p onClick={() => {setVisiblePhone(true)}} className="phone">{props.card.phone}</p>}
          {visiblePhone ? (<Button className="btn__save" onClick={savePhone}>Save</Button> ) : null}
          {visiblePhone ? (<Button className="btn__cancel" onClick={() => setVisiblePhone(false)}>Cancel</Button> ) : null} 
        </div>
        <div>
          <h4>E-mail:</h4>
          {visibleEmail ? (<Input type="email" onChange={(e) => setEditEmail(e.target.value)} placeholder={props.card.email}/>) 
          : 
          <p onClick={() => {setVisibleEmail(true)}} className="email">{props.card.email}</p>}
          {visibleEmail ? (<Button className="btn__save" onClick={saveEmail}>Save</Button> ) : null}
          {visibleEmail ? (<Button className="btn__cancel" onClick={() => setVisibleEmail(false)}>Cancel</Button> ) : null}
        </div>
        <Button className="btn__del" onClick={() => {setVisibleModal(true)}}>X</Button>
        {visibleModal 
        ? 
        <Modal className="modal">
          Are you sure delete contact?
          <div className="btns">
            <Button className="btn__yes" onClick={() => {props.remove(props.card)}}>YES</Button>
            <Button className="btn__no" onClick={() => setVisibleModal(false)}>NO</Button>
          </div>
        </Modal>
        : null}
    </div>  
  )
}
