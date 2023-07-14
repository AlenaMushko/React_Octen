import {useForm} from "react-hook-form";
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {joiResolver} from "@hookform/resolvers/joi";

import styles from '../UsersForm/UsersForm.module.css';
import myStyles from './CommentsForm.module.css';
import {CommentsValidators} from "../../validators";
import {Label} from "../Label/Label";
import {Btn} from "../Btn/Btn";

export const CommentsForm = ({ setIsLoading}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        mode:'all' ,
        resolver:joiResolver(CommentsValidators)
    })

    const formSubmit = (data) => {
        const requestData = {
            ...data,
            id: 1
        };
        setIsLoading(true);
        fetch('http://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(requestData)
        })
            .then(value => {
                if (!value.ok) {
                    throw  Error(value.status)
                }
                return value.json()
            })
            .then(data => {
                reset();
                console.log(data)
            })
            .catch(err => console.log(err))
            .finally(()=>{
                setIsLoading(false);
            });

        Notify.success(' Added comment');
    };

    return (
        <div className={styles.form_box}>
            <form id='posts-form' className={styles.form} onSubmit={handleSubmit(formSubmit)}>
                <Label value="Name:" type="text" nameLabel="name" errors={errors} register={register} />
                <Label value="Email:" type="email" nameLabel="email" errors={errors} register={register} />

                <label>Message:
                    <textarea rows="5" cols="3" name="message"
                              {...register("body")}
                              className={myStyles.textarea}
                              placeholder={'write some message'}></textarea>
                    {errors.body && <span>{errors.body.message}</span>}
                </label>
                <Btn valid={!isValid} value={'Add comment'}/>
            </form>
        </div>
    );
};




