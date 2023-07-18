import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import styles from './UsersForm.module.css';
import { UsersValidators} from "../../validators";
import {Label} from "../Label/Label";
import {Btn} from "../Btn/Btn";
import {postUser} from "../../services/apiServices";

export const UsersForm = ({ setIsLoading}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        mode: 'all',
        resolver: joiResolver(UsersValidators)
    })
    const formSubmit = async (data) => {
        setIsLoading(true);

            // const user = await  postUser(data)
            // console.log(user)



        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(value => {
                if (!value.ok) {
                    throw  Error(value.status)
                }
                return value.json()
            })
            .then(data => {
                reset();
                Notify.success(' Added user');
                console.log(data)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className={styles.form_box}>
            <form id='users-form' className={styles.form} onSubmit={handleSubmit(formSubmit)}>
                <Label value="Full name:" type="text" nameLabel="name" errors={errors} register={register}/>
                <Label value="Nick name:" type="text" nameLabel="username" errors={errors} register={register}/>
                <Label value="Email:" type="email" nameLabel="email" errors={errors} register={register}/>
                <Label value="Address:" type="text" nameLabel="address" errors={errors} register={register}/>
                <Label value="Phone:" type="number" nameLabel="phone" errors={errors} register={register}/>
                <Label value="Website:" type="text" nameLabel="website" errors={errors} register={register}/>
                <Label value="Company:" type="text" nameLabel="company" errors={errors} register={register}/>

                <Btn
                    valid={!isValid}
                     value={'Add user'}/>
            </form>
        </div>
    );
};

