import {useEffect, useState} from "react";

import {Posts, SpaceX, Users} from "./components";
import styles from "./App.module.css";

function App() {
    const [posts, setPosts] = useState([]);
    const [owenPosts, setOwenPosts] = useState([]);
    const [userName, setUserName] = useState('');
    const [showPostCard, setShowPostCard] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])

    const handleClick = (user) => {
        setOwenPosts(posts.filter(post => post.userId === user.id));
        setUserName(user.name);
        setShowPostCard(false);
    }

    return (<div className={styles.section}>
        <Users handleClick={handleClick}/>
        {userName && <h2 className={styles.userName}>{userName}</h2>}
        <Posts owenPosts={owenPosts} setShowPostCard={setShowPostCard} showPostCard={showPostCard}/>
        <SpaceX/>

    </div>);
}

export default App;




