import React from 'react'
import { TEXTS } from '../constants/TEXTS.js'
import styled from 'styled-components';

const Paragraph = styled.p`
  display:flex;
  justify-content: center;
  align-items: center;
`;	

const Instructions = () => {
	return <Paragraph id="instructions">{TEXTS.instructions}</Paragraph>
}

export default Instructions
