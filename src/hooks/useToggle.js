import {useState} from "react";

// Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
//     Сигнатура хука function useToggle(defaultValue)
export function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const toggleValue = () => setValue(prevValue => !prevValue);
    return [value, toggleValue];
}
