import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Task } from './Task'
import { TasksContext } from '../Context/TaskContext';




export default function Tasks() {

    const { tasks } = useContext(TasksContext);
  return (
    <Box width={'700px'} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px'
    }}>
      {tasks.length ? tasks.map((task) => <Task key={task?.id} task={task} />) : <Typography color={'#D9D9D9'} >you dont hav a Tasks!</Typography>}
    </Box>
  )
}
