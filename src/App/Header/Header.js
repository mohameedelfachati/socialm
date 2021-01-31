import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive';
import FlagIcon from '@material-ui/icons/Flag';
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
           <div className="header__left" >
              <img src="https://mostaql.hsoubcdn.com/uploads/530270-8I7aa-1556371888-5cc459b0510a5.jpg" alt="" />
              <div className="header__input">
                  <SearchIcon />
                  <input type="text" />
              </div>
           </div>
           <div className="header__middle">
               <div className="header__option header__option--active">
                  <HomeIcon fontSize="large"/> 
               </div>
               <div className="header__option">
                  <SupervisorAccountIcon fontSize="large"/> 
               </div>
               <div className="header__option">
                  <FlagIcon fontSize="large"/> 
               </div>

           </div>
           <div className="header__right">
               <div className="header__info">
                   <Avatar />
                   <h4>mohamed</h4>
               </div>
               <IconButton>
                   <ForumIcon />
               </IconButton>
               <IconButton>
                   <NotificationActiveIcon />
               </IconButton>
           </div>
        </div>
    )
}

export default Header
