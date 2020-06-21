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
				{label: "Going to learn React", important: false, like: false, id: uniqueID()},
				{label: "That is so good", important: false, like: false, id: uniqueID()},
				{label: "I need a break from reality...", important: false, like: false, id: uniqueID()},
			]
		};

		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
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

	onToggleImportant(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const old = data[index];
			const newItem = {...old, important: !old.important};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			};
		});
	}

	onToggleLiked(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const old = data[index];
			const newItem = {...old, like: !old.like};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			};
		});
	}

	render() {

		const {data} = this.state;
		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;

		return (
			<div className="app">

				<AppHeader
					liked={liked}
					allPosts={allPosts}
				/>

				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>

				<PostList posts={this.state.data}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>

				<PostAddForm onAdd={this.addItem} />

			</div>
		);
	}
}
