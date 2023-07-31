import {Component} from 'react';

import styles from './Cars.module.css';
import {getFromService} from "../../services";
import {Loader} from "../Loader";

export class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            isLoading: false,
            error: null,
        }
    }

    async componentDidMount() {
        this.setState({
            isLoading: true,
        });
        try {
            const res = await getFromService.getAllCars();
            if (res.status !== 200) {
                throw new Error(res.status);
            }
            const data = res.data;
            this.setState({
                isLoading: false,
                cars: data
            });
        } catch (error) {
            this.setState({
                isLoading: false,
                error: error
            });
        }
    }

    render() {
        const carsArr = this.state.cars;
        const loader = this.state.isLoading;

        return (
            <section>
                <h2 className={styles.title}>Curs</h2>
                {loader && <Loader/>}

                <table className={styles.table}>
                    <thead className={styles.headTable}>
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Year</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {carsArr.map(({id, brand, price, year}) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{brand}</td>
                            <td>{year}</td>
                            <td>{price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        )
    }
}

