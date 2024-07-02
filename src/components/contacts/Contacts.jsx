import React from 'react';
import './css/Contacts.css';
import Card from './Card';
import Form from './Form';

const Contacts = () => {
  return (
    <div className="container">
      <div className="contacts-container">
        <div className="contacts-card">          
          <Card />
        </div>
        <div className="contacts-form">
          {/* <h1>Contáctame</h1> */}
          <Form />
        </div>
      </div>
    </div>
    
  );
}

export default Contacts;



