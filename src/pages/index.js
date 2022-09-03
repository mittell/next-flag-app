import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
	console.log(countries);
	return (
		<Layout>
			<div className={styles.count}>Found {countries.length} countries</div>
			<SearchInput placeholder='Filter by Name, Region, or Subregion' />
		</Layout>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const countries = await res.json();

	return {
		props: {
			countries,
		},
	};
};
