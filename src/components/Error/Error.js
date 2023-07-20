import {Link} from "react-router-dom";

import styles from "./Error.module.css";
import {Container} from "../Container/Container";
import {AppRoutes} from "../../routing/appRoutes";

const Error = () => {
    return (<Container>
            <h2 className={styles.title}>Error, something went wrong</h2>
            <Link to={AppRoutes.HOME} style={{color: "tomato"}}>Go to home page</Link>
        </Container>

    )
}

export default Error;