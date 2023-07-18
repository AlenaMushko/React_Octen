import axios from 'axios';

export const postUser = async (user)=>{
   try {
       const res = await axios.post('http://jsonplaceholder.typicode.com/users', user);
       console.log(res)
   } catch (err) {
       console.log(err.message)
   }
};

export const postComment = async (comment)=>{

        console.log(comment)
        const res = await axios({
                method: 'POST',
            url: "http://jsonplaceholder.typicode.com/comments",
            data: comment,
            headers: { 'Content-Type': 'application/json'},
        })

    console.log(res)

}


