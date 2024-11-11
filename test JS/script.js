let monthNumber = parseInt(prompt("1-ден 12-ге дейін сан енгізіңіз:"));

if (monthNumber >= 1 && monthNumber <= 12) {
    let month;
    let season;

    switch (monthNumber) {
        case 1:
            month = "kantar";
            season = "khys";
            break;
        case 2:
            month = "akpan";
            season = "khys";
            break;
        case 3:
            month = "Nauryz";
            season = "koktem";
            break;
        case 4:
            month = "sauyr";
            season = "koktem";
            break;
        case 5:
            month = "mamyr";
            season = "koktem";
            break;
        case 6:
            month = "mausym";
            season = "jaz";
            break;
        case 7:
            month = "SHylde";
            season = "jaz";
            break;
        case 8:
            month = "tamyz";
            season = "jaz";
            break;
        case 9:
            month = "khyrkuyek";
            season = "kuz";
            break;
        case 10:
            month = "kazan";
            season = "kuz";
            break;
        case 11:
            month = "kharasha";
            season = "kuz";
            break;
        case 12:
            month = "jeltoksan";
            season = "khys";
            break;
    }

    alert("Ai: " + month + "\nmausym: " + season);
} else {
    alert("khate! 1-den 12-ge deyin san jazynyz.");
}
