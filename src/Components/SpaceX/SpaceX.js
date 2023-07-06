import {useEffect, useState} from "react";
import {SpaceXCard} from "../SpaceXCard/SpaceXCard";
import styles from "./SpaceX.module.css";


export const SpaceX = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res => res.json())
            .then(data => setMissions(data.filter(mission => mission.launch_year !== '2020')))
            .catch(error => console.log(error))
    }, [])

    return (
        <ul className={styles.missionWrap}>
            {missions?.map(mission => (
                    <SpaceXCard key={mission.flight_number + mission.mission_name} mission={mission}/>
                )
            )}
        </ul>

    )
}

