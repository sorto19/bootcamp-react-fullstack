
const express =require('express')
const app = express()
app.use(express.json())

let notes =[
    {
        "id":1,
        "content":"tengo que aprender javascript y dedicar mas concentracion",
        "date":"2019-05-30T18:39:34.091Z",
        "important": true
    },
    {
        "id":2,
        "content":"tengo que aprender typesscript",
        "date":"2019-05-30T18:39:34.091Z",
        "important": true
    },
    {
        "id":3,
        "content":"tengo que aprender laravel",
        "date":"2019-05-30T18:39:34.091Z",
        "important": true
    }
]

//const app = http.createServer((request , response) =>{

    //response.writeHead(200,{'Content-Type':'application/json'})
    //response.end(JSON.stringify(notes))
//})
app.get('/',(request, response) =>{
    response.send('<h1>hello world</h1>')
})
app.get('/api/notes', (request, response) => {
    response.json(notes)
})
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    
    if(note){
response.json(note)
    } else {
        response.status(404).end()
    }
})
app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes =notes.filter(note => note.id !== id)
    response.status(204).end()

})
app.post('/api/notes/', (request, response) => {
    const note=request.body
 if(!note || !note.content){
     return response.status(400).json({
         error: 'note.content is missing'
     })
 }
    const ids = notes.map(note => note.id)
    const maxId =Math.max(...ids)

    const newNote = {
        id:maxId +1,
        content: note.content,
        important: typeof note.important === 'undefine' ? note.important: false,
        date:new Date().toISOString() 

    }
    notes = [...notes, newNote]

    response.json(newNote)
    response.status(201).json(newNote)
})

const PORT = 3007
app.listen(PORT, ()=> {
    console.log(`server running on ${PORT}`)
})
