import React from 'react';
import styles from "../Cars/Cars.module.css";

interface IProps {
    value: string | number | null,
    type: string,
    nameLabel: string,
    errors: any,
    register: any,
    valueInput:  string | number | null,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Label:React.FC<IProps> = ({value, type, nameLabel, errors, register, valueInput, onChange}) => {

    return (
        <label>
            {value}
            <input type={type}
                   {...register(nameLabel, {required: true})}
                   className={styles.form_input}
                   value={valueInput !== null ? valueInput : ""}
                   onChange={onChange}
            />
            {errors[nameLabel] && <span>{errors[nameLabel].message}
            </span>}
        </label>
    );
};
