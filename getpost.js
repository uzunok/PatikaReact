import axios from "axios";

async function getUserInfo(user_id){
    const userLink = "https://jsonplaceholder.typicode.com/users/" + user_id;
    const { data: userInfo} = await axios(userLink,{ 
        headers: { "Accept-Encoding": "gzip,dflate,compress"}
    });
    return userInfo;
}

async function getUserPosts(user_id){
    const postLink = "https://jsonplaceholder.typicode.com/posts?userId=" + user_id;
    const { data: userPost } = await axios(postLink,{ 
        headers: { "Accept-Encoding": "gzip,dflate,compress"}
    });
    return userPost;
}

async function getUserData(user_id){
    try {
       const user = await getUserInfo(user_id);
       const posts = await getUserPosts(user_id);
       return { "user": user,"posts": posts};
    } catch (error) {
        console.log(error);
    }
}

export default getUserData;