import myStyles from "./Cars.module.css";
import styles from "../../UsersForm/UsersForm.module.css";

const CarCard = ({car,setUpdateCar, handleDelete}) => {
    return (
        <li key={car.id} className={myStyles.car_item}>
            <p><b>Brand:</b>{car.brand}</p>
            <p><b>Price:</b>{car.price}</p>
            <p><b>Year:</b>{car.year}</p>
            <div className={myStyles.car_btb}>
                <button className={styles.btn}
                        onClick={() => setUpdateCar(car)}>Update
                </button>
                <button className={styles.btn}
                        onClick={() => handleDelete(car.id)}
                >Delete
                </button>
            </div>
        </li>
    );
};

export default CarCard;