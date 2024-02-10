import React, {useState} from "react";
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
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                <input name="text" placeholder="Create a Post" required value={text} onChange={e => setText(e.target.value)}></input>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Post;