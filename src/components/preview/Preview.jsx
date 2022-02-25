import React from 'react';
import Card from '../card/Card';
import styles from './preview.module.css';

const Preview = ({cards}) => (
  <section className={styles.preview}>
    <h2 className={styles.title}>Card Preview</h2>
    <ul className={styles.cards}>
    {
      cards.map(card => <Card card={card} />)
    }
    </ul>
  </section>
);

export default Preview;