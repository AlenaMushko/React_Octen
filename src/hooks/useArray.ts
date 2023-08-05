import {useState} from "react";


// створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти
// В середині хука реалізувати методи add(item), remove(id)
export function useArray<T>(defaultValue: T[]) {
    const [arr, setArr] = useState<T[]>(defaultValue || []);

    const add = (item: T) => {
        setArr([...arr, item]);
    };

    const remove = (id: number) => {
        setArr(arr.filter((_, itemId) => itemId !== id));
    };

    return {arr, add, remove};
}
