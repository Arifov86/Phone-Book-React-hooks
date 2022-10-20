import PhoneCard from '../PhoneCard/PhoneCard';
import './PhoneBook.scss'

export default function PhoneBook({children, cards, remove}) {
  return (
    <div className="items__wrap">
         <h2>{children}</h2>
    {cards.map((card, index) => 
    <PhoneCard cards={cards} remove={remove} key={Date.now() + Math.random()*10} number={index + 1} card={{name: card.name, phone: card.phone, email: card.email, id: Date.now(),}}/>  
    ).reverse()}
    </div>
  )
}