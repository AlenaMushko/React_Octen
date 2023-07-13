import {useRef} from "react";
import {Notify} from 'notiflix/build/notiflix-notify-aio';

import styles from './UsersForm.module.css';

export const UsersForm = () => {
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const phoneRef = useRef(null);
    const websiteRef = useRef(null);
    const companyRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameValue = nameRef.current.value;
        const usernameValue = usernameRef.current.value;
        const emailValue = emailRef.current.value;
        const addressValue = addressRef.current.value;
        const phoneValue = phoneRef.current.value;
        const websiteValue = websiteRef.current.value;
        const companyValue = companyRef.current.value;

        if (!nameValue || !usernameValue || !emailValue || !addressValue || !phoneValue || !companyValue) {
            Notify.failure('Please fill in all fields');
            return;
        }

        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameValue,
                username: usernameValue,
                email: emailValue,
                address: addressValue,
                phone: phoneValue,
                website: websiteValue,
                company: companyValue,
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        document.getElementById("users-form").reset();
    };

    return (
        <div className={styles.form_box}>
            <form id='users-form' className={styles.form} onSubmit={handleSubmit}>
                <label> Full name:
                    <input type='text' ref={nameRef} className={styles.form_input}/>
                </label>
                <label>Nick name:
                    <input type='text' ref={usernameRef} className={styles.form_input}/>
                </label>
                <label>Email:
                    <input type='email' ref={emailRef} className={styles.form_input}/>
                </label>
                <label>Address:
                    <input type='text' ref={addressRef} className={styles.form_input}/>
                </label>
                <label>Phone:
                    <input type='text' ref={phoneRef} className={styles.form_input}/>
                </label>
                <label>Website:
                    <input type='text' ref={websiteRef} className={styles.form_input}/>
                </label>
                <label>Company:
                    <input type='text' ref={companyRef} className={styles.form_input}/>
                </label>
                <input type='submit' value='Add user' className={styles.btn}/>
            </form>
        </div>
    );
};

