import axios from 'axios';

export const createPost = async (data) => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = {
            title: data
        }
        const res = await axios.post('http://localhost:5000/posts', body, config);
        return res.data;
    }catch(error){
        console.error('Error', error);
    }
}