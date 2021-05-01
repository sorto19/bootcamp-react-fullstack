
import './App.css';
import Note from './notes'
import {useState, useEffect} from 'react'

import { getAllNotes } from './services/notes/AllNotes';
import { createNotes } from './services/notes/createNotes';


export default function App() {
  
  const [notes, setNotes] = useState([]);
  const [newNote,setNewNote] =useState('')
  const [loading, setLoading] = useState(false)
  const [error,setError] =useState('')

 useEffect(() => {
   console.log("usando useEffect");
   setLoading(true)
 getAllNotes().then((notes)=>{
   
  setNotes(notes)
  setLoading(false)
  });

 },[]);


   const handleChange = (event) =>{
     setNewNote(event.target.value);
   
   };
   const handleSubmit =(event) =>{
     event.preventDefault();

     console.log('crear nota')
     const noteToAddToState={
       title: newNote,
      body:newNote,
      userId:1
     };
   createNotes(noteToAddToState).then((newNote )=>{
    setNotes((prevNotes) => prevNotes.concat(newNote));
   }).catch(error =>{
     console.error(error);
     setError('la api peto')
   })
    setError('')
     setNewNote("");
     
   }
   console.log("render")
  // if(notes.length===0) return "hola sortoddvbootcamop";


  return (
    <div>
      <h1>Notes</h1>
     {
       loading ?"cargando....": ""
     }
      <ol>
        {notes
        .map(note =><Note key={note.id} {...note} />)}  
       
      </ol>
      <form onSubmit={handleSubmit}>
      <input  type="Text" onChange={handleChange}      /> 
       <button type="submit" value={newNote}>Crear Nota</button>
      </form>
      {error? <span>{error}</span>:''}
    </div>
  );
}


 