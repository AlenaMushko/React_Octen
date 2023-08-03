import {useEffect, useState} from "react";

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
