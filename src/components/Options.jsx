import React from 'react'
import { TEXTS } from '../constants/TEXTS.js'
import RestartBtn from './RestartBtn.jsx'
import rock from '../static/rock.jpg'
import paper from '../static/paper.jpg'
import scissors from '../static/scissors.jpg'
import Option from './Option.jsx'
import styled from 'styled-components';

const Opts = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Options = ({ ...props }) => {
	return (
		<>
			<form id="form">
				<Opts id="options">
					<Option
						value={TEXTS.form.options.rock.value}
						image={rock}
						imageAlt={TEXTS.form.options.rock.altImg}
						{...props}
					>
						{TEXTS.form.options.rock.text}
					</Option>
					<Option
						value={TEXTS.form.options.paper.value}
						image={paper}
						imageAlt={TEXTS.form.options.paper.altImg}
						{...props}
					>
						{TEXTS.form.options.paper.text}
					</Option>
					<Option
						value={TEXTS.form.options.scissors.value}
						image={scissors}
						imageAlt={TEXTS.form.options.scissors.altImg}
						{...props}
					>
						{TEXTS.form.options.scissors.text}
					</Option>
				</Opts>
				{props.playerOpt !== 'null' ? <RestartBtn setPlayerOpt={props.setPlayerOpt} />  : null}
			</form>
		</>
	)
}

export default Options
