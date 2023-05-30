import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography } from '@mui/material';
import { TasksContext } from '../Context/TaskContext';

export const Task = ({task}) => {
  const { setOpen, setTaskToE, dispatch } = useContext(TasksContext);
  const newDate = `${task.date['$D']}/${+task.date['$M'] + 1}/${task.date['$y']}`
  const handleDelete = () => {
    dispatch({type: 'delete', payload: task})
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '55px',
      backgroundColor: '#D9D9D9',
      padding: '5px 15px',
      color: '#2C2C2C',
      borderRadius: '20px'
    }}>
      <Typography variant='h6'sx={{
        fontWeight: 'bold',
      }} >{task.name}</Typography>
      <Typography variant='h6'>{newDate}</Typography>
      <Box mr={'15px'}>
      <EditIcon sx={{
        cursor: 'pointer',
        backgroundColor: '#2C2C2C',
        color: '#D9D9D9',
        padding: '8px',
        borderRadius: '3px',
        ml: '3px',
        ":hover":{
          backgroundColor: '#1565C0',
        }
      }} onClick={() => {
        setOpen(true)
        setTaskToE(task)
      }} />
      <DeleteIcon sx={{
        cursor: 'pointer',
        backgroundColor: '#2C2C2C',
        color: '#D9D9D9',
        padding: '8px',
        borderRadius: '3px',
        ml: '3px',
        ":hover":{
          backgroundColor: '#CF2129',
        }
      }} onClick={handleDelete} />
      </Box>
    </Box>
  )
}
