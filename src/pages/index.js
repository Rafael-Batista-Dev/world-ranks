import Layout from "../components/Layout/Layout";
import axios from "axios";

export default function Home({ countries }) {
  console.log(countries);

  return <Layout>main</Layout>;
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
