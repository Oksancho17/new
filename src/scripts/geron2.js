"use strict";
/*type TStudent = `colledge` | `school`;
let student: TStudent = `colledge`;
let resultExam: number = 200;
let status1: string = `Отличник`;
if (resultExam >= 200) {
  if (student == `colledge`) {
    console.log(`Вы поступите на второй курс`);
    if (status1 == `Отличник`) {
      console.log(`Вы будете обучаться бесплатно`);
    }
  } else {
    console.log(`Вы поступите на первый курс`);
  }
} else {
  console.log(`Вы не набрали проходной балл`);
}

function getName(humanName: string) {
  console.log(humanName);
}
getName(`OksanaK`);
getName(`AntonK`);

function getNumber(number1: number, number2: number) {
  return number1 * number2;
}
console.log(getNumber(10, 5) * 2);
console.log(getNumber(20, 5) * 2);

function getNum(number1: number, number2: number) {
  if (number2 == 0) {
    return `Ошибка.На ноль делить нельзя`;
  } else {
    return number1 / number2;
  }
}
console.log(getNum(10, 5));
console.log(getNum(20, 5));

function getBonus(sallary: number) {
  if (sallary > 400000) {
    return sallary + (sallary * 0.1);
  }
  if (sallary > 300000) {
    return sallary + (sallary * 0.15);
  } else {
    return sallary + (sallary * 0.2);
  }
}
console.log(getBonus(200000));*/
/*enum EColors{
  black,
  red,
  green
}
const color: EColors = EColors.black;
function getColorText(color:EColors){
  switch (color) {
  case EColors.black:
    return "черный"
    case EColors.red:
      return "красный"
      case EColors.green:
        return "зеленый"
        default:
          return "такого цвета нет"
  }
}
console.log(getColorText(EColors.black));
console.log(getColorText(EColors.red));
console.log(getColorText(EColors.green)); */
/*function getName(callback:(name:string) => void) {
  let name:string="OksanaK";
  callback(name)
}

function sayHi(name:string) {
  console.log("Привет " + name);
}

function sayBye(name:string) {
  console.log("Пока " + name)
}
getName(sayHi);
getName(sayBye);






enum EOperators{
  beeline = "beeline",
  tele2 = "tele2",
  kcell = "kcell",
  activ = "activ"
}
function getPrice(operatorName:EOperators){
switch (operatorName) {
  case EOperators.beeline:
    return 4200
    case EOperators.tele2:
    return 2400
    case EOperators.kcell:
    return 1800
    case EOperators.activ:
    return 1000
}
}
let operatorName:EOperators=EOperators.beeline
console.log(`Цена подключения тарифа для оператора ${operatorName} - составляет ${getPrice(operatorName)} тенге`)



enum Ecompany{
  com1,
  com2,
  com3,
  com4,
  com5
}
function getCompany (companyName:Ecompany){
  switch (companyName) {
    case Ecompany.com1:
      return 180000
      case Ecompany.com2:
        return 200000
        case Ecompany.com3:
          return 220000
          case Ecompany.com4:
            return 120000
            case Ecompany.com5:
              return 140000
  }
}

function summarySallary (sallaryCom1:number,sallaryCom2:number,sallaryCom3:number,sallaryCom4:number,sallaryCom5:number) {
  let sallaryCom1:number = getCompany(Ecompany.com1)*0.3
  let sallaryCom2:number = getCompany(Ecompany.com2)*0.3
  let sallaryCom3:number = getCompany(Ecompany.com3)*0.3
  let sallaryCom4:number = getCompany(Ecompany.com4)*0.3
  let sallaryCom5:number = getCompany(Ecompany.com5)*0.3
}
console.log(`Зарплата со всех компаний - составляет ${summarySallary()} тенге`);*/
/*type TCompany = {
  income:string,
  allworkers: number,
  fired:number,
  new:number
}
let company:TCompany = {
  income:"3.2 миллиона",
  allworkers: 416,
  fired:60,
  new:45
}
company.allworkers = 400
company.fired = 44
company.new = 64
company.income = "4 миллиона"
console.log(company.income)*/
//let numbers = [100,50,25,78,78,55,60]
//console.log(numbers[4])
/*let yers = [2019,2020,2021,2022,2023,2024]
let seasons = ["зима","весна","лето","осень"]
console.log(yers[3])
console.log(seasons[2])
console.log(seasons[3])
console.log(yers[0])*/
/*type TPerson = {name: string, age: number}
let person:TPerson[] = [
  {
  name:"oksana",
  age:29
  },
  {
    name:"anton",
    age:37
    },
    {
      name:"leysan",
      age:12
      }
]
console.log(person[1].age)
console.log(person[0].name)
console.log(person[2])*/
/*let num = 0
while (num <20) {
  console.log("сообщение № " + num)
  num++
} */
/*for(let i = 1; i <= 10; i++) {
  console.log("сообщение № " + i)
}*/
/*let grades = [2,6,8,4,2,1,1,]
console.log(grades.length) //length - это длина, push - это добавить в элемент массива
for(let i = 1; i <grades.length; i++) {
  console.log(grades[i])
} */
/*let grades = [2,6,8,4,2,1,1,]
let goodGrades = []
for(let i = 0; i <grades.length; i++) {
 if(grades[i] > 5) {
    goodGrades.push(grades[i]);
 }
}
console.log(goodGrades)*/
let mounthes = [
    {
        title: "январь",
        days: 26
    },
    {
        title: "февраль",
        days: 23
    },
    {
        title: "март",
        days: 20
    },
    {
        title: "апрель",
        days: 31
    },
    {
        title: "май",
        days: 30
    }
];
mounthes.push({
    title: "август",
    days: 31
});
let summOfDays = 0;
let minDays = mounthes[0].days;
let maxDays = mounthes[0].days; //нужно взять первое значение в массиве - чтоб не гадать с числом
for (let i = 0; i < mounthes.length; i++) {
    if (mounthes[i].days < minDays) {
        minDays = mounthes[i].days;
    }
    if (mounthes[i].days > minDays) {
        maxDays = mounthes[i].days;
        summOfDays += mounthes[i].days;
    }
}
console.log(minDays);
console.log(maxDays);
console.log(summOfDays);
