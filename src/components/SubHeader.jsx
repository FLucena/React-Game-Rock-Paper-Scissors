import React from 'react'	
import { getWinner } from '../utils/getWinner.js'
import { TEXTS } from '../constants/TEXTS.js'
import styled from 'styled-components';

const Subtitle = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
`;	

const SubHeader = ({ playerOpt, machineOpt }) => {
	const result = playerOpt !== 'null' ? getWinner({ firstOpt: playerOpt, secondOpt: machineOpt }) : 'default'
	return <Subtitle id="subHeader">{TEXTS.subHeader[result]}</Subtitle>
}

export default SubHeader
