export function getWinner({ firstOpt, secondOpt }) {
	firstOpt = firstOpt.toLowerCase()
	secondOpt = secondOpt.toLowerCase()
	const playerWins = {
		rock: 'scissors',
		paper: 'rock',
		scissors: 'paper',
	}
	return firstOpt === secondOpt ? 'draw' : playerWins[firstOpt] === secondOpt ? 'playerWins' : 'machineWins';
}
