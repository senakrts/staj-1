import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export const UserSidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <IoIcons.IoMdPeople />,
    className: 'nav-text'
  },
  {
    title: 'Edit',
    path: '/edit',
    icon: <AiIcons.AiFillEdit />,
    className: 'nav-text'
  } /*,
  {
    title: 'Form',
    path: '/form',
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: 'nav-text'
  }*/
];
