import React, { useState } from 'react'
import { TEXTS } from '../constants/TEXTS.js'
import styled from 'styled-components';

const ButtonContainer = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;	
`

const Button = styled.button`
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	background-color: #007bff;
	color: #fff;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background-color: #0056b3;
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
	}
	&:focus {	
		outline: none;
		box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4);
  	}
`;
  
const RestartBtn = ({ setPlayerOpt }) => {
	const handleRestart = () => {
		setPlayerOpt('null')
	}

	return (
		<ButtonContainer>
			<Button
			onClick={handleRestart}
			id="restartBtn"
			>
				{TEXTS.form.restart}
			</Button>
		</ButtonContainer>
	)
}

export default RestartBtn
