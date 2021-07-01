import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/Services';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';

function Users() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    getUsers().then(res => {
      setUserData(
        '<div>Kullanıcı İsmi: ' +
          res.username +
          '</br>Doğum Tarihi: ' +
          res.dateBirth +
          '</br>TC No: ' +
          res.identificationNo +
          '</div>'
      );
    });
  }, []);

  const onClickLeave = username => {
    localStorage.setItem('username', username);
  };

  return (
    <div className='users'>
      {Parser(userData)}
      <Link
        className='forms'
        to={`/forms`}
        onClick={() => onClickLeave(localStorage.getItem('username'))}
      >
        <span> İzin Formu</span>
      </Link>
    </div>
  );
}

export default Users;
