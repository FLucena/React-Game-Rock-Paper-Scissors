import React from 'react'
import { LINKS } from '../constants/LINKS.js'
import { TEXTS } from '../constants/TEXTS.js'
import styled from 'styled-components';

const FooterText = styled.footer`
  display:flex;
  justify-content: space-between;
  padding: 30px;
`;	

const Link = ({ children, ...props }) => {
	return (
		<a
			className="link"
			target="_blank"
			{...props}
		>
			{children}
		</a>
	)
}
const Footer = () => {
	return (
		<FooterText id="footer">
			<p>{TEXTS.footer.copyright}</p>
			<Link href={LINKS.repository}>{TEXTS.footer.sourceCode}</Link>
		</FooterText>
	)
}

export default Footer
