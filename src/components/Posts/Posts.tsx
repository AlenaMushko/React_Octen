import React, {Component} from 'react';

import styles from '../Comments/Comments.module.css';
import {getFromService} from "../../services";
import {Loader} from "../Loader";

type TPosts = {
    id:number,
    title:string,
    body:string
}

interface IState{
    posts: TPosts[],
    isLoading: boolean,
    error: any,
}

export class Posts extends Component<{}, IState>{
    constructor(props:{}) {
        super(props);
        this.state = {
            posts: [],
            isLoading: false,
            error: null,
        }
    }

    async componentDidMount() {
        this.setState({
            isLoading: true,
        });
        try {
            const res = await getFromService.getAllPosts();
            if (res.status !== 200) {
                throw new Error(res.status.toString());
            }
            const data = res.data;
            this.setState({
                isLoading: false,
                posts: data
            });
        } catch (error) {
            this.setState({
                isLoading: false,
                error: error
            });
        }
    }

    render() {
        const postsArr = this.state.posts;
        const loader = this.state.isLoading;

        return (
            <section>
                <h2 className={styles.title}>Posts</h2>
                {loader && <Loader />}
                <ul>
                    {
                        postsArr && postsArr.map(({id, title, body}) => (
                            <li key={id} className={styles.item}>
                                <h3>{id}) {title}</h3>
                                <p>{body}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        )
    }
}

