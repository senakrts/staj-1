import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export const UserSidebarData = [
  {
    title: 'Ana Sayfa',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Kullanıcı Bilgisi',
    path: '/users',
    icon: <IoIcons.IoMdPeople />,
    className: 'nav-text'
  },
  {
    title: 'Kullanıcı Bilgisi Düzenleme',
    path: '/edit',
    icon: <AiIcons.AiFillEdit />,
    className: 'nav-text'
  },
  {
    title: 'İzin Girişi',
    path: '/leaveform',
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: 'nav-text'
  },
  {
    title: 'Çıkış',
    path: '/logout',
    icon: <AiIcons.AiOutlineLogout />,
    className: 'nav-text'
  }
];
