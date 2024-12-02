const Gamecontainer = {
    games: [
        {
            tittle: "PUBGM",
            author: "Tencent",
            year: "2018"
        },

    ],
    addGames: function (game) {
        this.games.push(game);
    },
};

function ADDGAME () {
    while(true) {
        let newGameTittle = prompt("enter game name");
        if (newGameTittle == "stop") break;
        let newGameAuthor = prompt("enter game author");
        let newGameYear = prompt("enter game year");
        let newGame = {
            tittle: newGameTittle,
            author: newGameAuthor,
            year: newGameYear,
        };
        Gamecontainer.addGames(newGame);
    }
    console.log(Gamecontainer.games);
}
