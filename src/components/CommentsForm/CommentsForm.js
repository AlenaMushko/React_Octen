import {useRef} from "react";
import {Notify} from 'notiflix/build/notiflix-notify-aio';

import styles from '../UsersForm/UsersForm.module.css';
import myStyles from './CommentsForm.module.css';

export const CommentsForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const bodyRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameValue = nameRef.current.value;
        const bodyValue = bodyRef.current.value;
        const emailValue = emailRef.current.value;

        if (!nameValue || !bodyValue || !emailValue) {
            Notify.failure('Please fill in all fields');
            return;
        }

        fetch('http://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId: '1',
                name: nameValue,
                email: bodyValue,
                body: emailValue,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        document.getElementById("posts-form").reset();
    };

    return (
        <div className={styles.form_box}>
            <form id='posts-form' className={styles.form} onSubmit={handleSubmit}>
                <label>Name:
                    <input type='text' ref={nameRef} className={styles.form_input}/>
                </label>
                <label>Email:
                    <input type='email' ref={emailRef} className={styles.form_input}/>
                </label>
                <label>Message:
                    <textarea rows="5" cols="50" name="message" ref={bodyRef} className={myStyles.textarea}
                              placeholder={'write some message'}></textarea>
                </label>
                <input type='submit' value='Add comment' className={styles.btn}/>
            </form>
        </div>
    );
};




