import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { callRecordings } from '../dATAS/Call';
import { useSubtitle } from '../ContextFilter/Subtitlecontext';

const SearchBar = () => {
  const navigate = useNavigate();
  const { updateRowData } = useSubtitle(); 
  const handleRowClick = (rowData) => {
    // Navigate to the /callrecording route and pass the clicked row's data as state
    navigate(`/callrecording`, { state: rowData });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <TableContainer elevation={0} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontFamily: 'sans-serif', fontWeight: '600', color: '#1e2737' }}>Call Recordings</TableCell>
              <TableCell sx={{ fontFamily: 'sans-serif', fontWeight: '600', color: '#1e2737' }}>Agent Name</TableCell>
              <TableCell sx={{ fontFamily: 'sans-serif', fontWeight: '600', color: '#1e2737' }}>Customer Name</TableCell>
              <TableCell sx={{ fontFamily: 'sans-serif', fontWeight: '600', color: '#1e2737' }}>Bank Name</TableCell>
              <TableCell sx={{ fontFamily: 'sans-serif', fontWeight: '600', color: '#1e2737' }}>Call Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {callRecordings.map((row, index) => (
              <TableRow key={index} onClick={() => handleRowClick(row)} style={{ cursor: 'pointer' }}>
                <TableCell sx={{ color: '#667085', fontWeight: '400', fontFamily: 'sans-serif' }}>{row.file_name}</TableCell>
                <TableCell sx={{ color: '#667085', fontWeight: '400', fontFamily: 'sans-serif' }}>{row.agent_name}</TableCell>
                <TableCell sx={{ color: '#667085', fontWeight: '400', fontFamily: 'sans-serif' }}>{row.customer_name}</TableCell>
                <TableCell sx={{ color: '#667085', fontWeight: '400', fontFamily: 'sans-serif' }}>{row.bank_name}</TableCell>
                <TableCell sx={{ color: '#667085', fontWeight: '400', fontFamily: 'sans-serif' }}>{row.callDuration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SearchBar;
