import Layout from "../components/Layout/Layout";
import SearchInput from '../components/SearchInput/SearchInput';
import CountriesTable from '../components/CountriesTable/CountriesTable';
import styles from "../../styles/Home.module.css";
//import axios from "axios";

export default function Home({ countries }) {
  console.log(countries);

  return (
    <Layout>
      <div className={styles.counts}>
        Encontrado {countries.length} países
      </div>

      <SearchInput placeholder="Escolha o país"/>
      <CountriesTable countries={countries}/>    
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
