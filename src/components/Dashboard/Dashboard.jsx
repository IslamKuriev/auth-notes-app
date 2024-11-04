import React, { useState } from 'react';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [colorBlock, setColorBlock] = useState('#f9f9f9')
  const [colorText, setColorText] = useState('black')
  const [editingId, setEditingId] = useState(null)

  const handleAddNote = () => {
    if (titleValue.trim() === '' || contentValue.trim() === '') {
      return;
    }
    if(editingId) {
      setNotes(
        notes.map((note) => note.id === editingId ? {...note, title: titleValue, content: contentValue, colorBlock: colorBlock, colorText: colorText} : note)
      )
      setEditingId(null)
    } else {
       setNotes([...notes, {
      id: Math.random(),
      title: titleValue,
      content: contentValue,
      date: new Date().toLocaleDateString(),
      colorBlock,
      colorText,
    }]);
    }
  
    setTitleValue('');
    setContentValue('');
    setColorBlock('#f9f9f9')
    setColorText('black')
  };

  const handleRemoveNote = (id) => {
    setNotes(
      notes.filter((note) => note.id !== id)
    )
  }

  const handleEditNote = (id) => {
  const noteToEdit = notes.find((note) => note.id === id)
  if(noteToEdit) {
    setEditingId(id)
    setTitleValue(noteToEdit.title)
    setContentValue(noteToEdit.content)
    setColorBlock(noteToEdit.colorBlock)
    setColorText(noteToEdit.colorText)
  }
  }

  const filtered = notes.filter((note) => { 
    return note.title.toLowerCase().includes(searchInputValue.toLocaleLowerCase())
 })

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Dashboard</h2>
      <div className={styles.describe}>
        <input value={titleValue} onChange={(e) => setTitleValue(e.target.value)} className={styles.inputDescribe} type="text" placeholder='Заголовок заметки' />
        <textarea value={contentValue} onChange={(e) => setContentValue(e.target.value)} placeholder='Содержимое заметки'></textarea>
        <span style={{marginBottom: "5px"}}>Выбери цвет блока</span><input type="color" value={colorBlock} onChange={(e) => setColorBlock(e.target.value)} />
        <span style={{marginBottom: "5px"}}>Выбери цвет текста</span><input type="color" value={colorText} onChange={(e) => setColorText(e.target.value)} />
        <button className={styles.addButton} onClick={handleAddNote}>{editingId ? "Save" : "Add"}</button>
      </div>
      <div className={styles.notes}>
      <input type="text" className={styles.searchInput} value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} placeholder='Найти заметку'/>
        {filtered.length ? filtered.map((note) => {
          return (
            <div key={note.id} className={styles.note} style={{backgroundColor: note.colorBlock}}>
              <h2 style={{color: note.colorText}}>{note.title}</h2>
              <p style={{color: note.colorText}}>{note.content}</p>
              <i style={{marginTop: "16px", color: note.colorText}}>{note.date}</i>
              <button className={styles.btnAction} style={{ marginLeft: "65%" }} onClick={() => handleEditNote(note.id)}><img src="./pensil.svg" alt="Изменить" /></button>
              <button className={styles.btnAction} onClick={() => handleRemoveNote(note.id)}><img src="./delete.svg" alt="Удалить" /></button>
            </div>
          );
        }): <h4>Тут пусто. Добавьте заметку</h4>}
      </div>
    </div>
  );
};

export default Dashboard;