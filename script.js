// Задание 1.
// Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления лучше использовать: if, switch или тернарный.

// •	Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
// •	Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.


// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
let a = prompt('How old are You?')

if (a > 0 && a <= 11) {
    console.log('You are kid.')
} else if (a >= 12 && a <= 18) {
    console.log('You are teenager.')
} else {
    console.log('You are adult.')
}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let b = prompt('Select the comand from 0 to 9')

switch (b) {
    case "0":
        alert('Sign on keyboard - )');
        break;
    case "1":
        alert('Sign on keyboard - !');
        break;
    case "2":
        alert('Sign on keyboard - @');
        break;
    case "3":
        alert('Sign on keyboard - #');
        break;
    case "4":
        alert('Sign on keyboard - ;');
        break;
    case "5":
        alert('Sign on keyboard - %');
        break;
    case "6":
        alert('Sign on keyboard - :');
        break;
    case "7":
        alert('Sign on keyboard - ?');
        break;
    case "8":
        alert('Sign on keyboard - *');
        break;
    case "9":
        alert('Sign on keyboard - (');
        break;
    default:
        alert('Comand not selected.')
}