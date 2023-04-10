let input = prompt ("Введите значение");
input = +input;

if (Number.isNaN(input) || input === null) {
   console.log("Упс, кажется, вы ошиблись")
} else if (input % 2 === 0) {
    console.log(input + ' четное число')
} else {
      console.log(input + ' нечетное число')
}
