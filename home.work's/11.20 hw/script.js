let distance = prompt("arakasjyktyg engyz");
let unit = prompt("olshem byrlyg engyz");

const unitConvert = ( a, b, c) => {

    if ( a == "metr" || a == "dm" || a == km) {
        return a || a / 10 || a * 1000;
    } else if ( b == 'metr' || b == "dm" || b == "km") {
        return b || b /110 || b * 1000;
    } else if ( c == "metr" || c == "dm" || c == "km") {
        return c || c / 10 || c * 1000;
    }
    alert(unitConvert + unit + distance)
}