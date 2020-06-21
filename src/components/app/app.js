import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

// import styled from "styled-components";
/* const AppBlock = styled.div`
	border-left: 1px solid #ccc;
	border-right: 1px solid #ccc;
	margin: 0 auto;
	max-width: 1024px;
	min-height: 100vh;
	padding: 50px 20px 0;
`;

const SearchPanelWrapper = styled.div`
	display: flex;
	margin: 1rem 0;
`; */


const App = () => {
	const data = [
		{ label: "Going to learn React", important: true, id: "kkl" },
		{ label: "That is so good", important: false, id: "kdhj" },
		{ label: "I need a break from reality...", important: false, id: "jhfvj" },
	];

	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter />
			</div>
			<PostList posts={data} />
			<PostAddForm />
		</div>
	);
};

export default App;
