import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './maker.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
      id: '1', 
      name: 'Ellie', 
      company: 'Samsung', 
      theme: 'dark', 
      title: 'Software Engineer', 
      email: 'ellie@gmail.com', 
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    },
    {
      id: '2', 
      name: 'Ellie2', 
      company: 'Samsung', 
      theme: 'light', 
      title: 'Software Engineer', 
      email: 'ellie@gmail.com', 
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    },
    {
      id: '3', 
      name: 'Ellie3', 
      company: 'Samsung', 
      theme: 'colorful', 
      title: 'Software Engineer', 
      email: 'ellie@gmail.com', 
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null
    }
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        navigate('/');
      }
    })
  })

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker;