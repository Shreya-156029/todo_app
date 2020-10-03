import React,{Component} from 'react';
import Note from './components/Note'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       noteText:'',
       notes:[],
    }
  }
  updateNoteText(noteText){
            this.setState({
              noteText : noteText.target.value
            })
            console.log(this.state.noteext)
  }
  handleKeyPress=(event)=>{
          if(event.key === 'Enter')
          {
 let notesarr=this.state.notes;
    notesarr.push(this.state.noteText);
    this.setState({
      noteText:''
    });
          }
  }
  deleteNote(index)
  {
    let notesarr=this.state.notes;
    notesarr.splice(index,1);
    this.setState({
      notes:notesarr
    })
  }
  AddNote()
  {
    if(this.state.noteText===' ')
    {return}

    let notesarr=this.state.notes;
    notesarr.push(this.state.noteText);
    this.setState({
      noteText:''
    });
    this.textInput.focus();

  }
render(){

  let notes=this.state.notes.map((val,key)=>{
             
             return <Note key={key} text={val}
             deleteMethod={ ()=> this.deleteNote(key)  }
            />
  })
  return (
    <div className="cotainer">
     <div className="header">React Todo App</div>
     {notes}
     <div className="btn" onClick={this.AddNote.bind(this)}>+</div> 
     <input type="text" 
     ref={((input) => {this.textInput = input })} 
     className="textInput" 
     value={this.state.noteText}
     onChange={ noteText => this.updateNoteText(noteText) }
     onKeyPress ={this.handleKeyPress.bind(this)}  
     />
    </div>
    
  );
}
}

export default App;
