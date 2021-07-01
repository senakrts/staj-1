import React, { useState, useEffect } from 'react';
import { showLeaves } from '../services/Services';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function ShowLeaves() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    showLeaves(localStorage.getItem('username')).then(res => {
      console.log('res', res);
      setLeaves(res);
      res.map(l => {
        return (
          <div>
            {l.date}
            {l.count}
            {l.type}
            {l.reason}
          </div>
        );
      });
    });
  }, []);

  return (
    /*<div className='ShowLeaves'>
      <div>{leaves} </div>
    </div>*/
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Kullanıcı İsmi</TableCell>
            <TableCell align='right'>Başlangıç Tarihi</TableCell>
            <TableCell align='right'>İzin Türü</TableCell>
            <TableCell align='right'>İzin Açıklama</TableCell>
            <TableCell align='right'>İzin Süresi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaves.map(leave => (
            <TableRow key={leave.username}>
              <TableCell component='th' scope='row'>
                {leave.username}
              </TableCell>
              <TableCell align='right'>{leave.date}</TableCell>
              <TableCell align='right'>{leave.type}</TableCell>
              <TableCell align='right'>{leave.reason}</TableCell>
              <TableCell align='right'>{leave.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShowLeaves;
