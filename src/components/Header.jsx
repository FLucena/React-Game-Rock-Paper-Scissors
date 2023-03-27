import React from 'react'
import { TEXTS } from '../constants/TEXTS.js'
import styled from 'styled-components';

const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
`;	

const Header = () => {
	return <Title id="header">{TEXTS.header}</Title>
}

export default Header
