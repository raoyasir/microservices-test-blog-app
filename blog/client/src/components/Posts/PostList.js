import {useState, useEffect} from "react";
import { getAllPosts } from "../../actions/post";
import Comment from '../Comments/Comment';
import CommentList from "../Comments/CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const responseData = await getAllPosts();
        console.log('responseData', responseData);

        setPosts(responseData);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
        <section key={post.id}>
            <h3>{post.title}</h3>
            <section>
                <CommentList postId={post.id}/>
                <Comment postId={post.id} />
            </section>
        </section>)
    });

    console.log('renderedPosts', renderedPosts)

    return <article>{renderedPosts}</article>;
}

export default PostList;