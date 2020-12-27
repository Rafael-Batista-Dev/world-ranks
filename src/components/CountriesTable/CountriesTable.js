import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";
import styles from "./CountriesTable.module.css";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

function CountriesTable({ countries }) {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  
  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setValueDirection("name")}
        >
          <div>Nome</div>
          <SortArrow direction={direction} />
        </button>

        <button
          className={styles.heading_population}
          onClick={() => setValueDirection("population")}
        >
          <div>População</div>
          <SortArrow direction={direction} />
        </button>
      </div>

      {orderedCountries.map((country) => (
        <div className={styles.row}>
          <div className={styles.heading_name}>{country.name}</div>
          <div className={styles.heading_population}>{country.population}</div>
        </div>
      ))}
    </>
  );
}

export default CountriesTable;
