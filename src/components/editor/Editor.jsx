import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/CardEditForm';
import CardAddForm from '../card_add_form/CardAddForm';

const Editor = ({cards, addCard, updateCard, deleteCard}) => (
  <section className={styles.editor}>
    <h2 className={styles.title}>Card Maker</h2>
    {
      Object.keys(cards).map(key => (
        <CardEditForm 
        key={key} 
        card={cards[key]} 
        updateCard={updateCard} 
        deleteCard={deleteCard} 
        />
      ))
    }
    <CardAddForm onSubmit={addCard}/>
  </section>
);

export default Editor;