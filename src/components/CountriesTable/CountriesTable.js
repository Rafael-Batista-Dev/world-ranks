import styles from './CountriesTable.module.css';

function CountriesTable( {countries}) {
  return (
    <>
      <div className={styles.heading}>
          <button className={styles.heading_name}> 
            <div>Nome</div>
          </button>

          <button className={styles.heading_population}>
              <div>População</div>
          </button>
      </div>

      {countries.map((country) => <div className={styles.heading_row}>
        <div className={styles.heading_name}>{country.name}</div>
        <div className={styles.heading_population}>{country.population}</div>
      </div>)}
    </>
  );
}

export default CountriesTable;