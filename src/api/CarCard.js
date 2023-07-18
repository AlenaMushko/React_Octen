import myStyles from "../components/Car/Cars/Cars.module.css";
import styles from "../components/UsersForm/UsersForm.module.css";

const CarCard = ({car, setIsCarUpdate, updateCar, handleDelete}) => {
    return (
        <li key={car.id} className={myStyles.car_item}>
            <p><b>Brand:</b>{car.brand}</p>
            <p><b>Price:</b>{car.price}</p>
            <p><b>Year:</b>{car.year}</p>
            <div className={myStyles.car_btb}>
                <button className={styles.btn}
                        onClick={() => {
                            setIsCarUpdate(true);
                            updateCar(car)
                        }}>Update
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