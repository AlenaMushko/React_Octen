import {useState} from "react";

// створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти
// В середині хука реалізувати методи add(item), remove(id)
export function useArray(defaultValue) {
    const [arr, setArr] = useState(defaultValue || []);

    const add = (item) => {
        setArr([...arr, item]);
    };

    const remove = (id) => {
        setArr(arr.filter((item, itemId) => itemId !== id));
    };

    return {arr, add, remove};
}
