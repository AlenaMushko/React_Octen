import {useEffect, useState} from "react";

import {UsersComponent} from "./components";
import styles from "./App.module.css";
import {PostCard} from "./components/PostCard/PostCard";

function App() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [owenPosts, setOwenPosts] = useState([]);
    const [userName, setUserName] = useState('');
    const [showPostCard, setShowPostCard] = useState(false);

    const fetchUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchPosts = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUsers();
        fetchPosts();
    }, []);

    const handleShowPosts = (user) => {
        let owenPosts = [];

        posts.map(post => {
            if (user.id === post.userId) {
                setShowPostCard(true);
                setUserName(user.name)
                owenPosts.push(post);
            }
            return null;
        });
        setOwenPosts(owenPosts);
    }

    return (<section className={styles.section}>
        <UsersComponent users={users} showPosts={handleShowPosts}/>
        {showPostCard &&
            <div className={styles.posts}>
                <h3 className={styles.posts_title}>{userName}</h3>
                <PostCard posts={owenPosts}/>
            </div>
        }
    </section>);
}

export default App;




