import { Avatar } from '@material-ui/core';
import React , { useState} from 'react'
import   "./MessageSender.css";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from "axios";

function MessageSender() {
    const API_URL = "http://localhost:8080/api/auth";
    const [message, setMessage] = useState("");
    const [image, setimage] = useState("");
    const poste= (image,message)=>{
        return axios.post(API_URL+'poste',{
            image,
            message
        })
       
    }

    return (
        <div className="messageSender">
          <div className="messageSender__top">
              <Avatar/>
              <form>
              <input
               onChange ={(e)=> setMessage(e.target.value)}
               value={message} 
               type="text"
               placeholder={`What's on your mind`} 
               className="messageSender__input" />
              <input 
               value={image}
               onChange={(e)=>setimage(e.target.value)}
               placeholder={`image url`} 
               className="messageSender__input" />

              <button onClick={poste} type='submit'>Hidden submit</button>
              </form>
          </div>
          <div className="messageSender__bottom">
              <div className="messageSender__option">
                  <PhotoLibraryIcon style={{color: "green"}}/>
                  <h3>Photo/Video</h3>
              </div>
              <div className="messageSender__option">
                  <InsertEmoticonIcon style={{color: "orange"}}/>
                  <h3>Feeling/Activity</h3>
              </div>
          </div> 
        </div>
    )
}

export default MessageSender;
