import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LeaveForm.css';
import { leaveform } from '../services/Services';
import { useHistory } from 'react-router-dom';

export default function From() {
  const [count, setCount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [reason, setReason] = useState('');
  const state = {
    date: ''
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  const form = (id, count, date, type, reason) => {
    console.log('Form:', id, count, date, type, reason);
    leaveform(id, count, date, type, reason).then(res => {
      state.date = res;
      history.push('/home');
    });
  };
  let history = useHistory();
  const handleFormButton = () => {
    console.log(
      'handleFormButton username',
      localStorage.getItem('username'),
      'count: ',
      count,
      'date: ',
      date,
      'type: ',
      type,
      'reason: ',
      reason
    );
    form(localStorage.getItem('username'), date, count, type, reason);
  };

  return (
    <div className='Form'>
      <Form onSubmit={handleSubmit}>
        <Form.Group size='lg' controlId='Start Date'>
          <Form.Label>Başlangıç Tarihi</Form.Label>
          <Form.Control
            autoFocus
            type='date'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='type'>
          <Form.Label>İzin Türü</Form.Label>
          <Form.Control
            type='type'
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='reason'>
          <Form.Label>İzin Açıklama</Form.Label>
          <Form.Control
            type='reason'
            value={reason}
            onChange={e => setReason(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='count'>
          <Form.Label>İzin Süresi</Form.Label>
          <Form.Control
            type='count'
            value={count}
            onChange={e => setCount(e.target.value)}
          />
        </Form.Group>
        <Button block size='lg' type='submit' onClick={handleFormButton}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
