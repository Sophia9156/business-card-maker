import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/CardEditForm';
import CardAddForm from '../card_add_form/CardAddForm';

const Editor = ({FileInput, cards, addCard, updateCard, deleteCard}) => (
  <section className={styles.editor}>
    <h2 className={styles.title}>Card Maker</h2>
    {
      Object.keys(cards).map(key => (
        <CardEditForm 
        key={key}
        FileInput={FileInput} 
        card={cards[key]} 
        updateCard={updateCard} 
        deleteCard={deleteCard} 
        />
      ))
    }
    <CardAddForm FileInput={FileInput} onSubmit={addCard}/>
  </section>
);

export default Editor;