/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	background-color: #1b8f78;
	padding: 0 0 0 14px;
	height: 60px;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LeftContainer = styled.div`
	width: 30%;
	font-size: 1.2em;
`;

export const LinkContainer = styled(Link)`
	color: white;
`;

export const RightContainer = styled.div`
	padding: 0 12px 0 10px;
	width: 50%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SpanTag = styled.span`
	color: white;
	text-decoration: underline;
	cursor: pointer;
`;
