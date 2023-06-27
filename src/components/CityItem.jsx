import { useCities } from "../context/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const CityItem = (props) => {
  const { currentCity } = useCities();
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          props.city.id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${props.city.id}?lat=${props.city.position.lat}&lng=${props.city.position.lng}`}
      >
        <span className={styles.emoji}>{props.city.emoji}</span>
        <h3 className={styles.name}>{props.city.cityName}</h3>
        <time className={styles.dates}>{formatDate(props.city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
