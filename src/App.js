import { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './components/Posts';

import './App.css';
import Paginator from './components/Paginator';


const App = () => {
	const POSTS_PER_PAGE = 10;
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currPage, setCurrPage] = useState(1);
	
	const currPageData = posts.slice(POSTS_PER_PAGE * (currPage - 1), POSTS_PER_PAGE * currPage);

	//fetch data from api
	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			const resData = await res.json();
			setPosts(resData);
			setLoading(false);
		};
  
	  	fetchPosts();
	}, []);
	
	// 'Next' or 'Prev' Buttons
	const handlePageChangeBtn = (pageNo) => {
		if(pageNo > 0 && pageNo <= Math.ceil(posts.length/POSTS_PER_PAGE)){
			setCurrPage(pageNo);		
		}
	}

	// Directly go to a page no
	const handleGoToPageBtn = (pageNo) => {		
		setCurrPage(pageNo);	
	}
	
	return <>
		<div>
			<Posts currPageData={currPageData} loading={loading} />
		</div>
		{posts.length !== 0 && <div>
			<Paginator
				currPage={currPage}
				postsPerPage={POSTS_PER_PAGE}
				totalPosts={posts.length}
				handlePageChangeBtn={handlePageChangeBtn}
				handleGoToPageBtn={handleGoToPageBtn}
			/>
		</div>}
	</>;
  };


export default App;
