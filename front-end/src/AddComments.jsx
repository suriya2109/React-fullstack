import React, { useState } from 'react'

export default function AddComments({onAddComment}) {
   const [nameText, setNameText] = useState("");
   const [commentText, setCommentText] = useState("");

    return (
        <>
            <h3>Add a Comment</h3>
            <label>Name:</label>
            <input type="text" value={nameText} onChange={(e) => setNameText(e.target.value)} />
            <label>Comment:</label>
            <textarea rows="4" value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
            <button onClick={() => {
                onAddComment({ postedBy: nameText, text: commentText });
                setNameText("");
                setCommentText("");
            }}>
                Add Comment
            </button>
        </>
    )   
}