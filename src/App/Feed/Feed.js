import React from 'react'
import './Feed.css';
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";

function Feed() {
    return (
        <div className='feed'>
            <MessageSender/>
            <Post
            profilePic="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
            image="https://cdn-images.welcometothejungle.com/5DDbrp9_kdlw05Z0hzc7kYEpaaruHhUUWJqs-nW1o8k/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9jYXRlZ29yeS9jb3Zlci8yNjYwLzE1NDg4My9jb2xsZWN0aW9uX2NhdGVnb3J5X2JlaGluZF90aGVfY29kZS5qcGc"
            username='mohamed'
            timestamp=''
            message='hahaahahahahaahaahahahahah'/>
        </div>
    )
}

export default Feed
