
import './App.css';
import Note from './notes'
import {useState, useEffect} from 'react'
import axios from 'axios'


export default function App() {
  
  const [notes, setNotes] = useState([]);
  const [newNote,setNewNote] =useState('')
  const [loading, setLoading] = useState(false)

 useEffect(() => {
   console.log("usando useEffect");
   setLoading(true)
 setTimeout( () =>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
    const {data} =response
  setNotes(data)
  console.log(response)
  setLoading(false)
  });
 },3000)
 },[newNote]);


   const handleChange = (event) =>{
     setNewNote(event.target.value);
   
   };
   const handleSubmit =(event) =>{
     event.preventDefault();
     console.log('crear nota')
     const noteToAddToState={
       id: notes.length +1,
       title: newNote,
      body:newNote
     };
    
     setNotes([...notes, noteToAddToState]);
     console.log("steando las notas");
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
    </div>
  );
}


 