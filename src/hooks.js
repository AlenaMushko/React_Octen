import {useEffect, useState} from "react";

// Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
//     Сигнатура хука function useToggle(defaultValue)
export function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const toggleValue = () => setValue(prevValue => !prevValue);
    return [value, toggleValue];
}

// створити хук useFetch, котрий спроможний робити запит на jsonplaceholder на /users, /posts,
// /comments в залежності від аргументу.
//     Сигнатура хука function(endpoint)
export function useFetch(endpoint) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, [endpoint]);

    return {data};
}


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

