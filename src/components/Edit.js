import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import './Edit.css';
//import { useHistory } from 'react-router-dom';
import { UserEdit } from '../services/Services';

export default function Edit() {
  const [birthdate, getBirthdate] = useState('');
  const [idNo, getIdNo] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }
  const edit = (dateBirth, identificationNo) => {
    UserEdit(dateBirth, identificationNo);
  };

  const handleEditButton = () => {
    edit(birthdate, idNo);
  };
  return (
    <div className='Edit'>
      <Form onSubmit={handleSubmit}>
        <Form.Group size='lg' controlId='birthdate'>
          <Form.Label>Doğum Tarihi</Form.Label>
          <Form.Control
            autoFocus
            type='birthdate'
            value={birthdate}
            placeholder='dd-mm-yyyy'
            onChange={e => getBirthdate(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='idNo'>
          <Form.Label>TC No</Form.Label>
          <Form.Control
            type='idNo'
            value={idNo}
            placeholder='*********'
            onChange={e => getIdNo(e.target.value)}
          />
        </Form.Group>
        <Button block size='lg' type='submit' onClick={handleEditButton}>
          Kaydet
        </Button>
      </Form>
    </div>
  );
}
