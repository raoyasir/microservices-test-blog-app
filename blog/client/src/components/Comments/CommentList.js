import { useState, useEffect } from "react";
import { getAllComments } from "../../actions/comment";

const CommentList = ({postId}) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const responseData = await getAllComments(postId);
        console.log('responseData', responseData);
        setComments(responseData);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return (
        <ul>
            {renderedComments}
        </ul>
    );
}

export default CommentList;