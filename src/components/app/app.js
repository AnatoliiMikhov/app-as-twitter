import React, {Component} from "react";
import {uniqueID} from "../../generator/id-generator";

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

export default class App extends Component {
	// eslint-disable-next-line no-unused-vars
	constructor(props) {
		super();
		this.state = {
			data: [
				{label: "Going to learn React", important: true, id: uniqueID()},
				{label: "That is so good", important: false, id: uniqueID()},
				{label: "I need a break from reality...", important: false, id: uniqueID()},
			]
		};

		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	deleteItem(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const newData = [...data.slice(0, index), ...data.slice(index + 1)];

			return {
				data: newData
			};
		});
		console.log(id);
	}

	/* idGenerator() {
		return "_" + Math.random().toString(36).substr(2, 9);
	} */

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: uniqueID()
		};
		this.setState(({data}) => {
			const newData = [...data, newItem];

			return {
				data: newData
			};
		});
		console.log(newItem.id);

	}

	render() {
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList posts={this.state.data}
					onDelete={this.deleteItem} />
				<PostAddForm onAdd={this.addItem} />
			</div>
		);

	}
}
