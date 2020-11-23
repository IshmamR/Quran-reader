import { useState, useEffect } from 'react';

const CallAPI = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async() => {
			fetch("https://api-al-quran.herokuapp.com/api/imgs")
			.then(res => {
				// console.log(res);
				return res.json();
			})
			.then(data => {
				console.log(data);
				setData(data);
				// return data;
			})
		}
		fetchData();
	}, []);
	return { data };
}

export default CallAPI;