import styles from "./SpaceXCard.module.css";

export const SpaceXCard = ({mission}) => {
    const {mission_name, launch_year, links} = mission;

    return (
        <li className={styles.item}>
            <h4 className={styles.title}>{mission_name} took place at {launch_year}</h4>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </li>
    )
}
