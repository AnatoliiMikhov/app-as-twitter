/* eslint-disable react/prop-types */
import React from "react";
import "./app-header.css";

// stylization with styled-components START
// import styled from "styled-components";
/*
const Header = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	h1 {
		font-size: 26px;
		color: ${(props) => (props.colored ? "red" : "black")};
		:hover {
			color: Aqua;
		}
	}
	h2 {
		font-size: 1.2rem;
		color: grey;
	}
`;
 */
// stylization with styled-components END

const AppHeader = ({liked, allPosts}) => {
	return (
		<div className="app-header d-flex">
			<h1>Anatolii Mikhov</h1>
			<h2>{allPosts} записей, из них понравилось {liked}</h2>
		</div>
	);
};

export default AppHeader;
