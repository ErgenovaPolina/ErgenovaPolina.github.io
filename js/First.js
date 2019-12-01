var numder = 5.5;
alert(typeof numder);
alert(numder + 20);//25.5
var str = "25"
var strl = "25";
alert(str);
alert(typeof str);
var strr = 23;
alert(str + 10);
number = "Hello";
var nameNumber = 15;
var b = nameNumber;
alert(b);
alert(nameNumber);
nameNumber = 30;
alert(nameNumber);
var hello2 = "Hello";
alert(hello2);

var $ = 1.5;
//переменная с именем "$"
var _ = $;
// переименовали на "_"
alert($ + _);

const COLOR_RED = "#f4ff7b";
COLOR_RED = 30;
alert(COLOR_RED);


var finishNum = 12,secondNum = 3;
alert(firstNum + secondNum);
alert(firstNum - secondNum);
alert(firstNum * secondNum);
alert(firstNum / secondNum);
alert(firstNum % secondNum);


var num = 10;
alert(num++);
alert(num);
alert(num--);
alert(num);


var num1 = 10 ,num = 5;
document.write(num1 > num2) + "<br>");
document.write(num1 < num2) + "<br>");
document.write(num1 >= num2) + "<br>");
document.write(num1 <= num2) + "<br>");
document.write(num1 == num2) + "<br>");
document.write(num1 != num2) + "<br>");

var num1 = 10, num2 = 5;
var bool = true;
if(num1 > num2){
    alert("Boolean is true");
}else {
    alert("Boolean is faulse");
}
bool ? alert("true") : alert("felse");



var year = prompt("Скольеко вам лет?");
alert(typeof years);
alert("Вам" + years + "лет");




var firstNumber =
    +prompt("введите первое число");
var secondNumber =
    +prompt("введите второе число");
alert(firstNumber + secondNumber);

var passwordDb = "Cat";
var password = prompt ("введите пароль");
if(password === passwordDb){
    alert("Доступ разрешен");
}else {
    alert("Доступ не разрешен");
}



var i = 0;
while (i < 10){
    document.write(i,"br");
    i++;
}
alert("End of loop");
alert(i);


i = 0;
sum = 0;
while(true) {
    i = +prompt("Enter the number:");
    if(i === 0)break;
    sum += i;
}
alert(sum);

i = 5;
while(i){
    alert(i);
    i--;
}

var i = 1;
var size = 10;
while(i <= size) {
    if (i % 2 === 0)alert(i);
    i++;
}


for(var i = 5; i > 0; --i){
    alert(i);
}


var num = +prompt("Введите число:");
var pow = +prompt("Введите степень:");
var sum = 1;
for (var i = 0; i < pow; i++) {
    sum *= num;
}
alert(num + " В степени " + pow + " = " + sum);




