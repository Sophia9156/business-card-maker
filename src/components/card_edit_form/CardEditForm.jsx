import React, { useRef } from 'react';
import styles from './cardEditForm.module.css';
import Button from '../button/Button';

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
  const {name, company, title, email, message, theme, fileName } = card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onChange = (e) => {
    if(e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({...card, [e.currentTarget.name]: e.currentTarget.value})
  }
  const onSubmit = () => {
    deleteCard(card);
  }

  return (
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" defaultValue={name} onChange={onChange} />
      <input ref={companyRef} className={styles.input} type="text" name="company" defaultValue={company} onChange={onChange} />
      <select ref={themeRef} className={styles.select} name="theme" defaultValue={theme} onChange={onChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" defaultValue={title} onChange={onChange} />
      <input ref={emailRef} className={styles.input} type="text" name="email" defaultValue={email} onChange={onChange} />
      <textarea ref={messageRef} className={styles.textarea} name="message" defaultValue={message} onChange={onChange}></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  )
}

export default CardEditForm;