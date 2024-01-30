// Team object
const team = {
    _players: [{
        firstName: 'Piet',
        lastName: 'Pieters',
        age: 23,
    },
    {
        firstName: 'Mark',
        lastName: 'Marksma',
        age: 22,
    },
    {
        firstName: 'Jet',
        lastName: 'Jetten',
        age: 24,
    }],
    _games: [{
        opponent: 'Heteren',
        teamPoints: 10,
        opponentPoints: 8,
    },
    {
        opponent: 'Elst',
        teamPoints: 4,
        opponentPoints: 7,
    },
    {
        opponent: 'Schuytgraaf',
        teamPoints: 9,
        opponentPoints: 8,
    }],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
};

// Adds a player and logs players array to the console
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

// Adds a game and logs games array to the console
team.addGame('Titans', 100, 98);
console.log(team.games);
