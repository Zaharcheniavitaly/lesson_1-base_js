
"use strict";


let temperatureCels = prompt("Введите температуру в градусах по Цельсию");

let temperatureFahr = (9 / 5) * temperatureCels + 32;

alert(temperatureFahr);




let name = "Василий";

let admin = name;

alert(admin);






let result1 = 10 + 10 + "10";
alert(result1);
//result1 равно "2010", не явное приведение, слабая типизация, "10" - это строка, а не число. Объединение строк - конкатенация

let result2 = 10 + "10" + 10;
alert(result2);
//result2 равно "101010", не явное приведение, слабая типизация, "10" - это строка, а не число. Объединение строк - конкатенация

let result3 = 10 + 10 + +"10";
alert(result3);
//result3 равно 30, унарный плюс преобразует "10" в число

let result4 = 10 / -"";
alert(result4);
// результат -   -Infinity (отрицательная бесконечность)

let result5 = 10 / +"2,5";
alert(result5);
// результат -   NaN. Запятая не может использоваться в дробных числах не смотря на унарный плюс, поэтому 2,5 - это не число



