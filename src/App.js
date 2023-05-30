import './App.css';
import React, { useEffect, useReducer, useState } from 'react';
import Box from '@mui/material/Box';
import Title from './components/Title';
import Input from './components/Input';
import Tasks from './components/Tasks';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ModalForm } from './components/Modal';
import { TasksContext } from './Context/TaskContext';
import { Alert, Pagination } from '@mui/material';
 


const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "delete":
      return state.filter((t) => t.id !== action.payload.id);
    case "Edit":
      return state.map((t) => {
        if(t?.id === action.payload.id){
          t.name = action.payload.name
          t.date = action.payload.date
        }
        return t
      });
    default:
      return state;
  }
};

function App() {
  const [open, setOpen] = useState(false);
  const [tasks, dispatch] = useReducer(reducer, []);
  const [message, setMessage] = useState('')
  const [TaskE, setTaskToE] = useState({})
  const [page, setPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(tasks.length / itemsPerPage);
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = tasks.slice(indexOfFirstItem, indexOfLastItem).reverse();
  const handlePage = (e, p) => {
    setPage(+p)
  }

  useEffect(() => {
      let timer =  setTimeout(() => {
        setMessage('')
      }, 2000);

    return () => {
      clearTimeout(timer)
    }

  })

      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TasksContext.Provider value={{setOpen, dispatch, setMessage, tasks:currentItems, setTaskToE}} >
            <Box sx={{ 
              bgcolor: '#2C2C2C',
              minHeight: '100vh', 
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
              }}>
              <Title />
              {message && <Alert sx={{
                mt: '10px',
              }} severity="error">{message}</Alert>}
              <Input type={"Add"} />
              <br />

              <Tasks  />
              <Pagination count={totalPages} color="primary" onChange={handlePage} />
            </Box>
            <ModalForm open={open} setOpen={setOpen} TaskE={TaskE} />
            </TasksContext.Provider>
        </LocalizationProvider>
      );
    }
    
export default App;
