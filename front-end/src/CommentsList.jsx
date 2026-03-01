export default function CommentsList({ comments }) {
    return (
        <>
            comments:
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    <h3>{comment.postedBy}</h3>     
                    <p>{comment.text}</p>
                </div>
            ))}
        </>
    )
    
}