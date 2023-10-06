import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'>
            <FaPencil className='icon' onClick={updateMode}/>
            <FaTrash className='icon' onClick={deleteToDo}/>
        </div>
    </div>

  )
}

export default ToDo

