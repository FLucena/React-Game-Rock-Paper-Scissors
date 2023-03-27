import { useState } from 'react'
import { TEXTS } from './constants/TEXTS.js'
import { getRndElement } from './utils/getRndElement.js'
import Header from './components/Header.jsx'
import SubHeader from './components/SubHeader.jsx'
import Options from './components/Options.jsx'
import Instructions from './components/Instructions.jsx'
import Footer from './components/Footer.jsx'

const options = [TEXTS.form.options.rock.value, TEXTS.form.options.paper.value, TEXTS.form.options.scissors.value]

function App() {
	const [playerOpt, setPlayerOpt] = useState('null')
	const machineOpt = playerOpt !== 'null' ? getRndElement(options) : null
	return (
		<>
			<Header />
			<SubHeader
				playerOpt={playerOpt}
				machineOpt={machineOpt}
			></SubHeader>
			<Options
				playerOpt={playerOpt}
				machineOpt={machineOpt}
				setPlayerOpt={setPlayerOpt}
			/>
			<Instructions />
			<Footer />
		</>
	)
}

export default App
