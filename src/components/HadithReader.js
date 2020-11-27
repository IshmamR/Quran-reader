import React, { useState, useEffect } from 'react';
import data from '../data/hadiths.json';

const HadithReader = () => {
	let localData = localStorage.getItem('hpage');
	const hpn = localData? Number(localData) : 0;
	
	const [pageNo, setPageNo] = useState(hpn);
	// console.log(data.AllChapters[0]);
	
	useEffect(() => {
		localStorage.setItem('hpage', pageNo);
	}, [pageNo]);

	const handleNextPage = () => {
		if (pageNo < 1896) {
			setPageNo(pageNo+1);
		}
	}
	const handlePrevPage = () => {
		if (pageNo > 0) {
			setPageNo(pageNo-1);
		}
	}
	const handlePage = (e) => {
		setPageNo(Number(e.target.value));
	}

	return(
		<div className="HadithReader">
			<div className="inputs">
				<button onClick={handlePrevPage}>&lsaquo;</button>
				<input onChange={handlePage} type="number" value={pageNo} />
				<button onClick={handleNextPage}>&rsaquo;</button>
			</div>
			<div className="hadith">
				<h1>{data.AllChapters[pageNo]?.En_Sanad}</h1>
				<p>{data.AllChapters[pageNo]?.En_Text}</p>
			</div>
		</div>
	)
}

export default HadithReader;