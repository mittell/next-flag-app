/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import Link from 'next/link';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import styles from './CountriesTable.module.css';

const orderBy = (countries, value, direction) => {
	if (value === 'population') {
		if (direction === 'asc') {
			return [...countries].sort((a, b) =>
				a.population > b.population ? 1 : -1
			);
		}

		if (direction === 'desc') {
			return [...countries].sort((a, b) =>
				a.population > b.population ? -1 : 1
			);
		}
	}

	if (value === 'name') {
		if (direction === 'asc') {
			return [...countries].sort((a, b) =>
				a.name.common > b.name.common ? 1 : -1
			);
		}

		if (direction === 'desc') {
			return [...countries].sort((a, b) =>
				a.name.common > b.name.common ? -1 : 1
			);
		}
	}

	return countries;
};

const SortArrow = ({ direction }) => {
	if (!direction) {
		return <></>;
	}

	if (direction === 'desc') {
		return (
			<div div className={styles.heading_arrow}>
				<KeyboardArrowDownRoundedIcon color='inherit' />
			</div>
		);
	} else {
		return (
			<div className={styles.heading_arrow}>
				<KeyboardArrowUpRoundedIcon color='inherit' />
			</div>
		);
	}
};

const CountriesTable = ({ countries }) => {
	const [direction, setDirection] = useState();
	const [value, setValue] = useState();

	const orderedCountries = orderBy(countries, value, direction);

	const switchDirection = () => {
		if (!direction) {
			setDirection('desc');
		} else if (direction === 'desc') {
			setDirection('asc');
		} else {
			setDirection(null);
		}
	};

	const setValueAndDirection = (value) => {
		switchDirection();
		setValue(value);
	};

	return (
		<div>
			<div className={styles.heading}>
				<button
					className={styles.heading_name}
					onClick={() => setValueAndDirection('name')}
				>
					<div>Name</div>
					<SortArrow />
				</button>

				<button
					className={styles.heading_population}
					onClick={() => setValueAndDirection('population')}
				>
					<div>Population</div>
					<SortArrow direction={direction} />
				</button>
			</div>

			{orderedCountries.map((country, index) => (
				<Link href={`/country/${country.cca3}`} key={index}>
					<div className={styles.row}>
						<div className={styles.name}>{country.name.common}</div>
						<div className={styles.population}>{country.population}</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default CountriesTable;
