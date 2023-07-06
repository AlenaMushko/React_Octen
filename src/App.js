import {useState} from "react";
import {Posts, SpaceX, Users} from "./Components";
import {posts} from "./mockData/jsonplaceholder";
import styles from "./App.module.css";

function App() {
    const [owenPosts, setOwenPosts] = useState([]);
    const [userName, setUserName] = useState('');
    const [showPostCard, setShowPostCard] = useState(false);

    const handleClick = (user) => {
        setOwenPosts(posts.filter(post => post.userId === user.id));
        setUserName(user.name);
        setShowPostCard(false);
    }

    return (
        <div className={styles.section}>
            <Users handleClick={handleClick}/>
            {userName && <h2 className={styles.userName}>{userName}</h2>}
            <Posts owenPosts={owenPosts} setShowPostCard={setShowPostCard} showPostCard={showPostCard}/>
            <SpaceX/>

        </div>
    );
}

export default App;




