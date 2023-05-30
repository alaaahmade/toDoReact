/* eslint-disable react/prop-types */
import { Box, Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import React, { useContext, useState } from 'react';
import { TasksContext } from '../Context/TaskContext';

export default function Input({ type, TaskE }) {
  const [date, setDate] = useState(TaskE?.date);
  const [name, setName] = useState(TaskE?.name);
  const { dispatch, setMessage, setOpen } = useContext(TasksContext);
  // setDate(`${e['$D']}/${+e['$M'] + 1}/${e['$y']}`)
  const handleClick = () => {
    const newDate = `${date.$D}/${+date.$M + 1}/${date.$y}`;
    if (!date || !name) {
      setMessage('missing name or date');
    } else if (newDate.includes('N')) {
      setMessage('invalid Date');
    } else {
      dispatch({ type, payload: { id: TaskE?.id || Date.now(), name, date } });
      setDate(null);
      setName('');
      setOpen(false);
    }
  };
  return (
    <Box
      pt="30px"
      sx={{
        width: '700px',
        display: 'flex',
        borderBottom: '2px solid #D9D9D9',
        paddingBottom: '20px',
      }}
    >

      <TextField
        label="Task"
        value={name}
        sx={{
          '& .MuiOutlinedInput-root': {
            border: 'none', // Remove the border
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none', // Remove the outline
          },
          backgroundColor: '#D9D9D9',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
          borderTopRightRadius: '3px',
          borderBottomRightRadius: '3px',
          width: '500px',
          outline: 'none',
          border: 'none',
        }}
        inputProps={{
          style: { border: 'none', outline: 'none' }, // Remove the border
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <DatePicker
        label="date"
        sx={{
          backgroundColor: '#D9D9D9',
          width: '200px',
          ml: '3px',
        }}
        onChange={(e) => setDate(e)}
        value={date}
      />
      <Button
        variant="contained"
        sx={{
          height: '55px',
          ml: '3px',
          borderTopLeftRadius: '3px',
          borderBottomLeftRadius: '3px',
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '20px',
          backgroundColor: '#4F4F4F',
        }}
        onClick={() => {
          handleClick();
        }}
      >
        {type}
        {' '}
        Task

      </Button>
    </Box>
  );
}
