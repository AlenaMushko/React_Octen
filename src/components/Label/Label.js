import styles from "../UsersForm/UsersForm.module.css";

export const Label = ({value, type, nameLabel, errors, register, valueInput, onChange}) => {
    return (
        <label>
            {value}
            <input type={type}
                   {...register(nameLabel, {required: true})}
                   className={styles.form_input}
                   value={valueInput}
                   onChange={onChange}
            />
            {errors[nameLabel] && <span>{errors[nameLabel].message}
            </span>}
        </label>
    );
};
