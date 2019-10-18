class Calendar {
    isLeapYear(year) {
        return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
    }
    todayPlus(dia, numero) {
        let mod=0;
        switch (dia) {
            case "lunes":
                numero += 1;
                break;
            case "martes":
                numero += 2;
                break;
            case "miercoles":
                numero += 3;
                break;
            case "jueves":
                numero += 4;
                break;
            case "viernes":
                numero += 5;
                break;
            case "sabado":
                numero += 6;
                break;
            case "domingo":
                numero = numero;
                break;
            default:
                "Error";
                break;
        }
        switch (numero % 7) {
            case 0:
                numero = 7;
                console.log("Domingo");
                break;
            case 1:
                numero = 1;
                console.log("Lunes");
                break
            case 2:
                numero = 2;
                console.log("Martes");
                break
            case 3:
                numero = 3;
                console.log("Miércoles");
                break;
            case 4:
                numero = 4;
                console.log("Jueves");
                break;
            case 5:
                numero = 5;
                console.log("Viernes");
                break;
            case 6:
                numero = 6;
                console.log("Sábado");
                break;
        }
        return numero;
    }
    firstDayYear(year) {
        let x;
        let dia;
        x = (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;
        switch (x) {
            case 0:
                dia = "Domingo";
                break;
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miércoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
            case 6:
                dia = "Sábado";
                break;
        }
        return x;
    }
}

(function useCalendar(){
    let m = new Calendar();
    m.isLeapYear(1900); 
    m.isLeapYear(1650); 
    m.firstDayYear(2018);
    m.todayPlus("Jueves",5);
})();
