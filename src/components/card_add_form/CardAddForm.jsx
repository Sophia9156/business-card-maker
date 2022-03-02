import React, { useRef, useState } from 'react';
import styles from './cardAddForm.module.css';
import Button from '../button/Button';

const CardAddForm = ({FileInput, onSubmit}) => {
  const [file, setFile] = useState({fileName: null, fileURL: null});

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onFileChange = file => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onClick = (e) =>{
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    }
    formRef.current.reset();
    setFile({fileName: null, fileURL: null});
    onSubmit(card);
  }

  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
      <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company" />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email" />
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message"></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onClick} />
    </form>
  )
}

export default CardAddForm;