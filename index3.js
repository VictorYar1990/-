
function greeting(){
let userName = localStorage.getItem("userName");

if(userName){
    alert(`Ваше имя: ${userName}`);
    }
else{ 
    userName = prompt("Представьтесь");
    }

    if (userName !==null && userName !==""){
localStorage.setItem("userName",userName);
} else{
greeting();
}
}
greeting();

function executeDemo1(){
        let arr1=[];
        let arr2= new Array();
        let arr3 = Array.from("Hello");
    
    alert(
        `${JSON.stringify(arr1)},${JSON.stringify(arr2)},${JSON.stringify(arr3)}`
    );
}

const quiestions = [
    {
        title: "Выбирите существующий тип данных",
        items: ["int", "integer", "ArrayList", "number"],
        answer: 3, 
    },
    {
        title: "Выбирите существующий тип данных",
        items: ["int", "integer", "ArrayList", "number"],
        answer: 3, 
    },
    {
        title: "Выбирите существующий тип данных",
        items: ["int", "integer", "ArrayList", "number"],
        answer: 3, 
    },
    {
        title: "Выбирите существующий тип данных",
        items: ["int", "integer", "ArrayList", "number"],
        answer: 3, 
    }
];

function test(){
    const testsContainer = document.getElementById("tests");

    const resultString = "";

    for (const [quiestionsIndex, value] of quiestions.entries()) {
        const itemContainer = document.createElement("div");
        let radioButtons= "";
        for(const [itemIndex,item] of value.items.entries()) {
            radioButtons += `
            <div>
                <input type = "radio" name = "quiestions-${quiestionsIndex}" value  = "${itemIndex}" id = ${quiestionsIndex}-${itemIndex}  />
                <label for = "$ ${quiestionsIndex}-${itemIndex}">${item} </label> 
            </div>
            `;

        }

        itemContainer.append(`${value.title}`);
        itemContainer.innerHTML += radioButtons;
        testsContainer.append(itemContainer);
        }
    }
    function checkTest(){
        const checkedItems = document.querySelectorAll("input[type = radio]:checked");
    
        const answers = [];

        for (const node of checkedItems){
            answers.push(Number(node.value));
        }

        let rightAnswers = 0;
        for (let i= 0; i<answers.length; i++){
            if (answers[i]===quiestions[i].answer){
                rightAnswers++;
            }
        }
const result  = document.getElementById("result");
result.innerText = `Ваш результат: ${rightAnswers} из ${quiestions.length}`;
console.log(checkedItems)

}

function toggleTheme(node){
    const theme  = node.value;
    console.log(theme);
    if (theme === "light"){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
    }

test();