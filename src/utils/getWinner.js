export function getWinner({ firstOpt, secondOpt }) {
	firstOpt = firstOpt.toLowerCase()
	secondOpt = secondOpt.toLowerCase()
	const playerWins = {
		rock: 'scissors',
		paper: 'rock',
		scissors: 'paper',
	}
	if (firstOpt === secondOpt) {
		return 'draw'
	}
	return playerWins[firstOpt] === secondOpt ? 'playerWins' : 'machineWins'
}
