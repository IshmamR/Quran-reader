import React, { useState, useEffect } from 'react';
// import CallAPI from '../APIs/CallAPI';

const Reader = () => {
	let localData = localStorage.getItem('page');
	const pn = localData? Number(localData) : 1;
	
	const [pageNo, setPageNo] = useState(pn);
	// const { data } = CallAPI();
	// console.log(data);
	
	// console.log(localData);
	
	useEffect(() => {
		localStorage.setItem('page', pageNo);
	}, [pageNo]);

	const handleNextPage = () => {
		if (pageNo < 604) {
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
		<div>
			<div className="inputs">
				<button onClick={handlePrevPage}>&lt;</button>
				<input onChange={handlePage} type="number" value={pageNo} />
				<button onClick={handleNextPage}>&gt;</button>
			</div>
			<div className="Reader">
				{(pageNo > 0 && pageNo <= 604)? (
					<img
						className="page"
						src={`https://api-al-quran.herokuapp.com/page?p=${pageNo}`} 
						alt="..." 
						key={pageNo} 
					/>
					) : (
					<h1>Not found...</h1>
					)
				}
				
			</div>
		</div>
	)
}

export default Reader;