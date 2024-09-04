// задание 1
function multiplication(){
    num1 = prompt('Введите первое число');
    num2 = prompt('Введите второе число');
    alert('результат: ' + num1*num2);
}
multiplication();

// задание 2
function user(){
    let name = prompt('введите имя');
    let surname = prompt('введите фамилию');
    let age = prompt('введите возраст');
    alert(name + ' '+ surname+ ' ' + age + ' ' + 'лет')
}
user();

// задание 3
let gender = prompt('Введите ваш пол(М, F)');
function gen(str){
    if(str == 'M' ){
        alert('Ваш пол мужской');
    } else if(str =='F'){
        alert('Ваш пол женский')
    } else{
        alert('Пол неопределен');
    }
}
gen(gender);

// задание 4
numweek = prompt('Введите порядковый номер дня недели');
function day(num) {
    let dayweek;
    switch (+num) {
        case 1:
            dayweek = 'понедельник';
            break;
        case 2:
            dayweek = 'вторник';
            break;
        case 3:
            dayweek = 'среда';
            break;
        case 4:
            dayweek = 'четверг';
            break;
        case 5:
            dayweek = 'пятница';
            break;
        case 6:
            dayweek = 'суббота';
            break;
        case 7:
            dayweek = 'воскресенье';
            break;
    }
    alert(dayweek);
}
day(numweek);


// Задание 5.1
for (let i = 1; i <= 100; i++) {
    let ye;

    if (i >= 1 && i <= 17) {
        ye = "ребенок";
    } else if (i >= 18 && i <= 30) {
        ye = "молодой";
    } else if (i >= 31 && i <= 55) {
        ye = "зрелый";
    } else {
        ye = "старый";
    }

    document.write(i + " – " + ye + "<br>");
}


// Задание 6
let name = prompt('Введите ваше имя'); 
let age = prompt('Введите ваш возраст'); 
function nameAge(str, num) { 
    let group; 
    if (num >= 1 && num <= 17) {  
        group = "ребенок";  
    } else if (num >= 18 && num <= 30) {  
        group = "молодой";  
    } else if (num >= 31 && num <= 55) {  
        group = "зрелый";  
    } else {  
        group = "старый";  
    } 
    alert(str + ' имеет возраст ' + num + ' и он ' + group) 
} 
nameAge(name, age);

// Задание 7
function btn(){
    alert('Привет мир!');
}


// задание 8
function auto() {
    document.getElementById('email').value = 'test@email.ru';
}

// задание 9
const button = document.getElementById('button'); 
const email = document.getElementById('email'); 
button.addEventListener('click', function(){ 
    email.value = 'test@email.ru'; 
}) 
 
// задание 10
function textW(){ 
    let text = document.getElementById('text'); 
    if(text.value != ""){ 
        alert('Вы ввели текст: ' + text.value); 
    }else{ 
        alert('Вы ничего не ввели'); 
    } 
} 

 
// задание 11
function block1(){ 
    input = document.getElementById('able'); 
    input.setAttribute('disabled', ''); 
} 
 
function unblock() { 
    input = document.getElementById('able'); 
    input.removeAttribute('disabled'); 
} 
 
 
// задание 12
const square = document.getElementById('square'); 
const hide = document.getElementById('hide'); 
hide.addEventListener('click', function() { 
    if (square.style.display === 'none') { 
        square.style.display = 'block'; 
        hide.textContent = 'Скрыть квадрат'; 
    }else { 
        square.style.display = 'none'; 
        hide.textContent = 'Показать квадрат'; 
    } 
}); 
 
const square2 = document.getElementById('square2'); 
square2.addEventListener('mouseover', function() { 
    square2.style.backgroundColor = 'red'; 
}); 
square2.addEventListener('mouseout', function() { 
    square2.style.backgroundColor = 'pink'; 
});