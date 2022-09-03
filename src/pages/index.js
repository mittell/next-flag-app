import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Flag App</title>
				<meta name='description' content='A Flag App built with Next.js' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>Main</main>

			<footer className={styles.footer}>Footer</footer>
		</div>
	);
}
