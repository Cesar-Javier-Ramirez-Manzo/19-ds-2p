class Carta{
    constructor(){

    }
    printCard(n) {
        let position = [];
        if (n <= 13) {
            position[0] = 0;
        } else if (n <= 26) {
            position[0] = 1;
        } else if (n <= 39) {
            position[0] = 2;
        } else {
            position[0] = 3;
        }

        switch (n % 13) {
            case 0:
                position[1] = 13;
                break;
            case 1:
                position[1] = 1;
                break;
            case 2:
                position[1] = 2;
                break;
            case 3:
                position[1] = 3;
                break;
            case 4:
                position[1] = 4;
                break;
            case 5:
                position[1] = 5;
                break;
            case 6:
                position[1] = 6;
                break;
            case 7:
                position[1] = 7;
                break;
            case 8:
                position[1] = 8;
                break;
            case 9:
                position[1] = 9;
                break;
            case 10:
                position[1] = 10;
                break;
            case 11:
                position[1] = 11;
                break;
            case 12:
                position[1] = 12;
                break;
        }
        return position;
    }
    printNumber(k, n) {
        if (n > 0 && n < 14) {
            let card = 0;
            switch (k) {
                case 0:
                    card = n;
                    break;
                case 1:
                    card = n + 13;
                    break;
                case 2:
                    card = n + 26;
                    break;
                case 3:
                    card = n + 39;
                    break;
                default:
                    card = "Error"
                    break;
            }
            return card;
        } else {
            return "Error";
        }
    }
}

