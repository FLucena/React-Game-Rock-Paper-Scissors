import React, { useRef } from 'react'
import robot from '../static/robot.png'
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const TypewriterText = styled.div`
  overflow: hidden;
  border-right: .15em solid black;
  white-space: nowrap;
  letter-spacing: .15em;
  animation: ${typing} 1.5s steps(30, end);
`;

const Title = styled.h3`
	display:flex;
	justify-content: center;
	align-items: center;	
`

const Img = styled.img`
	padding: 0 20px;
	border-radius: 50%;
	cursor: pointer;
	height: 200px;
	width: 200px;
	transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
	margin: 10px 20px;
	z-index: -1;
`;

const RobotImg = styled.img`
  border-radius: 50%;
  cursor: pointer;
  height: 150px;
  width: 150px;
  position: absolute;
  z-index: 1;
  top: 230px;
  animation: jump 0.5s infinite alternate ease-in-out;
  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

const Option = ({ children, playerOpt, machineOpt, setPlayerOpt, value, image, imageAlt }) => {
	const shouldChecked = playerOpt === value
	const shouldDisabled = playerOpt !== 'null'
	const shouldShowRobot = playerOpt !== 'null' && machineOpt === children.toLowerCase()
	const handleOnChange = ({ target }) => {
		setPlayerOpt(target.value);
	}
	const imgRef = useRef(null);

	return (
		<label className={'option' + (shouldDisabled ? ' disabled' : '')}>
			<TypewriterText><Title className="header">{children}</Title></TypewriterText>
			<Img
				className="image"
				src={image}
				alt={imageAlt}
				ref={imgRef}
			/>
			<input
				type="radio"
				name="option"
				value={value}
				className="input"
				onChange={handleOnChange}
				disabled={shouldDisabled}
				checked={shouldChecked}
				hidden
				
			/>

			{shouldShowRobot ? (
			(() => {
				const x = imgRef.current.offsetLeft + 40;
				const y = imgRef.current.offsetTop + 20;
				let xPos = `${x}px`;
				let yPos = `${y}px`;
				return (
				<RobotImg
					className="robot"
					src={robot}
					alt="Computer icon"
					style={{
						left: xPos,
						top: yPos
					}}
				/>
				);
			})()
			) : (
			""
			)}


		</label>
	)
}

export default Option