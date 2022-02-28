import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/CardEditForm';
import CardAddForm from '../card_add_form/CardAddForm';

const Editor = ({cards, addCard}) => (
  <section className={styles.editor}>
    <h2 className={styles.title}>Card Maker</h2>
    {
      cards.map(card => <CardEditForm key={card.id} card={card} />)
    }
    <CardAddForm onSubmit={addCard}/>
  </section>
);

export default Editor;