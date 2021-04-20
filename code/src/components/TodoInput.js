import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
//import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'

import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'


const Todoinput = () => {
  const [newTodo, setNewTodo] = useState('')
  const [label, setLabel] = useState('New task')
  const [visible, setvisible] = useState(true)
  const dispatch = useDispatch()

  const handleChange = (event) => {  
    setNewTodo(event.target.value)
  }

  const handleStartButton =() => {
    if (visible) {
      setvisible()
    } else {
      return setvisible(false)
    }
  }

  const handleClick = () => {
    if (newTodo.length < 3) {
      setLabel('Please enter a text')
    } else if(newTodo.length > 2) {
        dispatch(todos.actions.addTodo({
          description: newTodo,
          isComplete: false, 
          id: Date.now()
        }))
        setLabel('New task')
      }
      setNewTodo('')
      
      /* dispatch(todos.actions.addTodo(newTodo))
      const data = JSON.parse(localStorage.getItem('todos'))
      localStorage.setItem('todos', JSON.stringify([data, newTodo])); */
  }

  return (
    <div className="input-container">
      { visible ?
      <div className= "add-btn"> 
        <Button 
          variant="contained" 
          color="secondary"
          onClick={handleStartButton} 
        >
          Add task
        </Button> 
      </div> : 
     <>
      <TextField 
       id="standard-basic" 
       label={label}
       value={newTodo} 
       onChange={handleChange}
      /> 
      <div className= "add-btn">
        <Fab  
          onClick={handleClick} 
          size="medium" 
          color="secondary" 
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div> 
      </>
    }
    </div>
  )
}

export default Todoinput