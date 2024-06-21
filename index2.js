// let variable1 = 123; //number
// let variable2 = "Hello"; //string
// let variable3 = false; //boolean
// let variable4 = 234234234324n; //bigint
// let variable5 = undefined;
// let variable6 = null;
// let variable7 = Symbol("asdads");

let myVar = 5;

if (typeof myVar === "number") {
    console.log("This is a number");
} else {
    console.log("This is not number");

}


function task1() {
    let result  = prompt("Укажите знак зодиака");
    switch(result){
       case "Овен":
            alert("Вы Овен");
            break;
        case "Телец":
            alert("Вы Телец");
            break;
        case "Близнецы":
            alert("Вы Близнецы");
            break; 
        case "Рак":
            alert("Вы Рак");
            break;
        case "Лев":
            alert("Вы Лев");
            break;
        case "Дева":
            alert("Вы Дева");
            break;
        case "Весы":
            alert("Вы Весы");
            break;
        case "Скорпион":
            alert("Вы Скорпион");
            break;
        case "Стрелец":
            alert("Вы Стрелец");
            break;
        case "Козерог":
            alert("Вы Козерог");
            break;
        case "Водолей":
            alert("Вы Водолей");
            break;
        case "Рыбы":
            alert("Вы Рыбы");
            break;   
            default:
                alert("Неизвестный знак зодиака");                   
    }
}

//task1();

function  task2(){
    let arr1=[];
    let arr2=[];
    let arr3=[];


     for(let i= 0; i<= 40; i++){
        arr1.push(i);
     }

     let i = 1;
     while(i<=40){
        arr2.push(i);
        i++;   
     }
    
     let j = 1;
   
     do {
         arr3.push(j);
         j++;
      } while (j<=40);
    alert("Первый цикл: "+arr1+"Второй цикл: "+arr2+ "Третий цикл:" +arr3);
}

//task2();

function task3 (){
    while(true){
        alert("Бесконечное сообщение");
    }

}
//  task3();

function task4(){
    let result = prompt("Введите число больше 5");
    alert(result);

    if (result===null || isNaN(Number(result)) || Number(result)<=5) {
        task4();
    } else {
        alert("Поздравляю!!!");
    }
}
  //task4();


 function task5() {
     for (let i=8; i<=20; i++){
         if (i%2 ===0){
            alert(i);
        }
     }
 }
   //task5();


  function task6() {
     for(let i=1; i<=7; i++){
         if (i %2 !==0){
            alert(i);
         }
     }
 }
  //ask6();
  function task21 (){
    let arr1= [];
    let arr2= new Array();
    let arr3 = Array.from("hello");
    
    alert(arr1, arr2, arr3);
} 
//task21();

function task22() {
    let arr  = [1,2,3,4,5,6,7]
    arr[4] = 10;
    alert(arr[4]);

}
 //task22();


 function task23(){
     let arr = [1,2,3,4,5,6,7];
     const button = document.getElementById("button");

     button.addEventListener("mouseenter", function() {
        alert(arr.length);
     });

 }
 //task23();

 function task24(){
    let arr = [1,2,3,4,5,6,7];

    for (let i=0; i<arr.length; i++){
        alert(arr[i]);
    }
 }

 //task24();

 function task25(){
   let arr1 = [1,2,3,4];
   let arr2 = [5,6,7,8];

   //let arr3= arr1.concat(arr2);
   //let arr3 = [...arr1,...arr2];

   arr1.push(...arr2);

   alert(arr1);
 }

//task25();


function task26(){
    let arr1 = [1,2,3,4];
    let firstElem = arr1.shift();
    alert(firstElem, arr1);

}
//task26();

function task27(){
    let arr1 = [1,2,3,4];
    let lastElem = arr1.pop();
    alert(lastElem, arr1);
}
//task27();

function task28(){
    let arr1 = [1,2,3,4];

    arr1.unshift("lkjlkkl");

    alert(arr1);
}

// task28();

 function task29(){
     let date = new Date();
     alert(date);

 }
 //task29();

 function task210(){
     let date = new Date();

     const moths = [
     "января", 
     "февраля", 
     "марта", 
     "апреля",
     "мая",
     "июня" ,
     "июля" ,
     "августа",
     "сентября",
     "ноября",
     "декабря"];

    const stringDate = `${date.getDate()} ${
        moths[date.getMonth()]
    } ${date.getFullYear()} года`;

    alert(stringDate);
 }
 //task210();

 function task211(num1, num2){
    if ((num1 < 0 || num1 >50) || (num2< 0 || num2>50)) {
        return;
    }
    return num1 *num2;

 }

 //console.log(task11(10, 20));
    


  function greeting(){
    let userName = localStorage.getItem("userName");

    if (userName ){
        alert (`Ваше имя ${userName}`);
    } else {
        userName = promt ("Представьтесь!");

        if (userName!== null && userName!=="") {
            localStorage.setItem("userName", userName);
    } esle 
        greeting();
        
    }
    }
    greeting();

function executedDemo1(){
    let arr1= [];
    let arr2= new Array();
    let arr3 = Array.from("hello");

    alert (
        `${JSON.stringify(arr1)}, ${JSON.stringify(arr2)},${JSON.stringify(arr3)}`)
    
}
