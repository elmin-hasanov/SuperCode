let random = String(Math.floor(Math.random() * 10) + 1);
let result;

switch (random) {
    case 1:
        result = "sehr gut";
        break;
        case 2:
            result = "gut";
            break;
            case 3:
                result = "befriedigend";
                break;
                case 4:
                    result = "ausreichend";
                    break;
                    case 5:
                        result = "mangelhaft";
                        break;
                        case 6:
                            result = "ungenügend";
                            break
    default:
        result = "Das ist keine gültige Schulnote."
        break;
}

console.log(random);
console.log(result);
