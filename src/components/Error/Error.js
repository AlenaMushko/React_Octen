import {Link} from "react-router-dom";

import styles from "./Error.module.css";
import {AppRoutes} from "../../routing";


export const Error = () => {
    return (<section>
            <h2 className={styles.title}>Error, something went wrong</h2>
            <Link to={AppRoutes.HOME} style={{color: "tomato"}}>Go to home page</Link>
        </section>

    )
}

