import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/CardEditForm';

const Editor = ({cards}) => (
  <section className={styles.editor}>
    <h2 className={styles.title}>Card Maker</h2>
    {
      cards.map(card => <CardEditForm card={card} />)
    }
  </section>
);

export default Editor;