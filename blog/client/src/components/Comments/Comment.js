import {useState} from "react";
import { createComment } from "../../actions/comment";

// We will receive props and its destructured
const Comment = ({postId}) => {
    const [comment, setComment] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        const responseData = await createComment(comment, postId);
        console.log('responseData Comment', responseData);
        setComment('');
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <h6>New Comment</h6>
            <input value={comment} onChange={e => setComment(e.target.value)} placeholder="Create a comment"/>
            <button>Submit</button>
        </form>
    );
};

export default Comment;