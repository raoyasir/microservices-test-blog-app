import {useState} from "react";
import { createPost } from "../../actions/post";

const Post = () => {
    const [text, setText] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        const responseData = await createPost(text); 
        console.log('responseData', responseData);
        setText('');
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input name='text' placeholder="Create a post" required value={text} onChange={e => setText(e.target.value)} />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Post;