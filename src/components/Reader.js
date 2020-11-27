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

	const handleDownload = () => {
		const a = document.createElement('a');
		a.href = `https://api-al-quran.herokuapp.com/page?p=${pageNo}`;
		a.target = '_blank';
		a.referrer = 'noreferer';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	return(
		<div className="Reader">
			<div className="inputs">
				<button onClick={handleNextPage}>&lsaquo;</button>
				<input onChange={handlePage} type="number" value={pageNo} />
				<button onClick={handlePrevPage}>&rsaquo;</button>
			</div>
			<div className="QuranReader">
				{(pageNo > 0 && pageNo <= 604)? (
					<>
					<img
						className="page"
						src={`https://api-al-quran.herokuapp.com/page?p=${pageNo}`} 
						alt="..." 
						key={pageNo} 
					/>
					<button onClick={handleDownload}>Download page</button>
					</>
					) : (
					<h1>Not found...</h1>
					)
				}
				
			</div>
		</div>
	)
}

export default Reader;