import axios from "axios";

export const createComment = async (data, postId) => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = {
            content: data
        }

        const res = await axios.post(`http://localhost:5001/posts/${postId}/comments`, body, config);
        return res.data;

    }catch(error){
        console.error('Error createComment', error);
    }
}

export const getAllComments = async (postId) => {
    try{
        const res = await axios.get(`http://localhost:5001/posts/${postId}/comments`);
        return res.data;
    }catch(error){
        console.error('Error getAllComments', error);
    }
}
