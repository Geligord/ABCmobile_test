const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")
const firstQuestion = document.getElementById("firstQuestion")
const secondQuestion = document.getElementById("secondQuestion")
const third = document.getElementById("third")
const fourthQuestion = document.getElementById("fourthQuestion")
const fiveQuestion = document.getElementById("fiveQuestion")
const ageQuote = document.getElementById("ageQuote")
const firstEvent = document.getElementById("firstEvent")
let birthDays = false
let birthMonths = false
let birthYears = false
let birthDate, age, ages, months, days, u, questionNum = 1, sectionNum, buttonsNum, buttonsCreated, checkOne = true, checkTwo = true
// Объявление некоторых переменных

let questionNumList = document.querySelectorAll('.questionNum');
for (let el of questionNumList) {
     el.innerHTML = 'Вопрос ' + questionNum  + '-' + questionNumList.length
     questionNum++
}

let questionsArray = [[['Боитесь ли вы умереть?'], ['Да', 'Нет']], [['Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.', 'Когда вы чувствуете себя <br> наиболее комфортно?'], ['Утро', 'День', 'Вечер', 'Ночь']], 
                    [['Уже совсем скоро Вы узнаете много интересного о своем будущем!', 'Укажите свою дату рождения:'], ['Далее']], 
                    [['Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!', 'Снятся ли Вам умершие люди?'], ['Да', 'Нет', 'Наверное']], 
                    [['По вам скучает очень близкий человек, которого больше нет в мире живых.', 'Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?'], ['Да', 'Затрудняюсь ответить']]]
                    // Массив с вопросами и ответами
let text = '<p id="fearOfDeath">' + questionsArray[0][0] + '</p><button onclick="questions()">' + questionsArray[0][1][0] + 
'<span class="flare"></span></button><button onclick="questions()">' + questionsArray[0][1][0] + '<span class="flare"></span></button>'
document.getElementById('footer').innerHTML = text + document.getElementById('footer').innerHTML
questionsArray.shift()
// Добавление первого вопроса вынесено из цикла

let sectionList = document.querySelectorAll('.addQuestionJS') // [addjs, addjs, addjs, addjs]
for (sectionNum = 0; sectionNum <= sectionList.length - 1; sectionNum++) {
    checkOne = true
    buttonsCreated = 0
    if (sectionNum === 3) {
        sectionList[sectionNum].innerHTML += '<p class="ageQuote" id="ageQuote pensioner">' + questionsArray[3][0][0] + '<img id="quoteBack" src="./img/messageIcon.svg" alt=""> </p><div id="line"><img id="eye" src="./img/eye.png" alt=""><img id="moon" src="./img/moon.png" alt=""></div></div><p id="question">' + questionsArray[sectionNum][0][1] + '</p>'
    }
    else {
        sectionList[sectionNum].innerHTML += '<p id="quote">' + questionsArray[sectionNum][0][0] + '</p><div id="line"><img id="eye" src="./img/eye.png" alt=""><img id="moon" src="./img/moon.png" alt=""></div><p id="question">' + questionsArray[sectionNum][0][1] + '</p>'
    }
    if (sectionNum === 1) {
        sectionList[sectionNum].innerHTML += '<select class="select" id="birthDay"><option>День</option> </select><select class="select" id="birthMonth"> <option>Месяц</option> </select><select class="select" id="birthYear"> <option>Год</option> </select><button onclick="question' + (sectionNum+1) + '()">' + questionsArray[sectionNum][1][buttonsCreated] + '<span class="flare"></span></button>'
        checkOne = false
    }
    if (checkOne) {
        for (buttonsNum = questionsArray[sectionNum][1].length; buttonsCreated < buttonsNum; buttonsCreated++) {
            sectionList[sectionNum].innerHTML += '<button onclick="question' + (sectionNum+1) + '()">' + questionsArray[sectionNum][1][buttonsCreated] + '<span class="flare"></span></button>'
        }
    }
}
function questions() {
    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    firstQuestion.style.display = 'flex';
}
// Скрытие главной страницы и переход к вопросам

function question1() {
    firstQuestion.style.display = 'none';
    secondQuestion.style.display = 'flex';
}
// Следующий вопрос

for (ages = 0; ages <= 80; ages++)
    {
        document.getElementById('birthYear').innerHTML +=
        "<option>" + (2022 - 18 - ages) + "</option>"
    }
for (months = 1; months <= 12; months++)
    {
        document.getElementById('birthMonth').innerHTML +=
        "<option>" + months + "</option>"
    }
for (days = 1; days <= 31; days++)
    {
        document.getElementById('birthDay').innerHTML +=
        "<option>" + days + "</option>"
    }
//Заполнение дней, месяцев, лет на странице с считыванием даты рождения пользователя

document.getElementById('birthDay').addEventListener('change', function() {
    birthDays = this.value;
  })
document.getElementById('birthMonth').addEventListener('change', function() {
    birthMonths = this.value;
  })
document.getElementById('birthYear').addEventListener('change', function() {
    birthYears = this.value;
  })
// Считывание даты рождения пользователя

function question2() {
    if (birthDays === false || birthDays === 'День') {
        document.getElementById("birthDay").style.border='2px red solid'
    }
    else if (birthMonths === false || birthMonths === 'Месяц') {
        document.getElementById("birthMonth").style.border='2px red solid'
    }
    else if (birthYears === false || birthYears === 'Год') {
        document.getElementById("birthYear").style.border='2px red solid'
    }
    // Обработка неверных данных при выборе даты рождения, подсветка места с ошибкой
    
    else {
        secondQuestion.style.display = 'none';
        third.style.display = 'flex';
        birthDate = Date.parse(birthYears + '-' + birthMonths + '-' + birthDays)
        age = (Date.now() - birthDate) / 31557600000
        // Расчет возраста пользователя
        let pensioner = document.getElementsByClassName('ageQuote')[0]
        if (age > 46) {
            pensioner.textContent += 'Возможно это дедушка или бабушка.'
        }
        else if (age > 35 && age <= 46) {
            pensioner.textContent += 'Возможно это кто-то из Ваших родителей.'
        }
        // Показ необходимой информации в зависимости от возраста пользователя
        setTimeout(function() {
            third.style.display = 'none';
            fourthQuestion.style.display = 'flex';
            let today = new Date()
            let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
            if (tomorrow.getDate() < 10 && tomorrow.getMonth() < 10) {
                firstEvent.innerHTML += 
                '<p><strong>ПЕРВОЕ ЗНАЧИМОЕ СОБЫТИЕ МОЖЕТ ПРОИЗОЙТИ УЖЕ 0' + tomorrow.getDate()+'.0'+tomorrow.getMonth()+'.'+tomorrow.getFullYear() +'</strong>, Вам надо быть готовым, что бы последствия не оказались необратимыми.</p>'
            }
            else if (tomorrow.getMonth() < 10) {
                firstEvent.textContent += 
                '<p><strong>ПЕРВОЕ ЗНАЧИМОЕ СОБЫТИЕ МОЖЕТ ПРОИЗОЙТИ УЖЕ 0 ' + tomorrow.getDate()+'.0'+tomorrow.getMonth()+'.'+tomorrow.getFullYear() +'</strong>, Вам надо быть готовым, что бы последствия не оказались необратимыми.</p>'
            }
            else if (tomorrow.getDate() < 10) {
                firstEvent.textContent += 
                '<p><strong>ПЕРВОЕ ЗНАЧИМОЕ СОБЫТИЕ МОЖЕТ ПРОИЗОЙТИ УЖЕ 0' + tomorrow.getDate()+'.'+tomorrow.getMonth()+'.'+tomorrow.getFullYear() +'</strong>, Вам надо быть готовым, что бы последствия не оказались необратимыми.</p>'
            }
            else {
                firstEvent.textContent += 
                '<p><strong>ПЕРВОЕ ЗНАЧИМОЕ СОБЫТИЕ МОЖЕТ ПРОИЗОЙТИ УЖЕ 0 ' + tomorrow.getDate()+'.'+tomorrow.getMonth()+'.'+tomorrow.getFullYear() +'</strong>, Вам надо быть готовым, что бы последствия не оказались необратимыми.</p>'
            }
            },
        2000);
        // "Загрузка" - 2 секугды, переход к следующему вопросу,
        // затем расчет завтрашней даты и показ её пользователю
    }
}

function question3() {
    fourthQuestion.style.display = 'none';
    fiveQuestion.style.display = 'flex';
}
// Следующий вопрос

let i = 259
let audioTime = 13000
function question4() {
    fiveQuestion.style.display = 'none';
    document.getElementById('mic').style.display = 'flex';
    document.getElementById('audioPlayer').play();
    // Переход к странице с сообщением, из-за малых возможностей
    // по кастомной стилизации тега audio в html реализовал внешний вид по другому
    setInterval(function() {
        if (i >= 0) {
            document.getElementById('progressBarFill').style.width = i + 'px'
            document.getElementById('percents').textContent = Math.floor((259-i)/2.59) + ' %'
            i -= 1
        }
        // Прогресс проигрывания аудио, при замене аудио необходимо заменить
        // только переменную audioTime
        else {
            document.getElementById('mic').style.display='none';
            document.getElementById('submit').style.display='flex';
            // Переход на последнюю страницу
        }
    }, audioTime / i);
}

let url, response, data, results, results2;
   (async () => {
    url = 'https://swapi.dev/api/people/1/';
    response = await fetch(url);
    data = await response.json();
    results = JSON.stringify(data, undefined, 2);
})()
// Запрос данных с API

function json() {
    if (response.ok) {}
    else {alert('Ошибка запроса данных с сервера!')}
    results2 = JSON.parse(results)
    let keys = Object.keys(results2)
    let values = Object.values(results2)
    for (let jsonValues = 0; jsonValues <= keys.length; jsonValues++) {
        document.getElementById('apiData').innerHTML +=
        keys[jsonValues] + ': ' + values[jsonValues] + ';<br>'
    }
    // Корректное, оформленное отображение данных в виде, понятном для пользователя
    // а не в "сыром" JSON
    document.getElementById('call').style.display = 'none'
    document.getElementById('latinTextHidden').innerHTML += 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores sapiente at debitis cumque ad voluptatem.'
    window.scrollTo(0, document.body.clientHeight - window.innerHeight - 100)
    //
}

if (document.getElementById('main').getBoundingClientRect().y < 400) {
    document.getElementById('sunImg').classList.add('scrolled')
    document.getElementById('letUsHelp').classList.add('scrolled')
}
if (document.getElementById('trustUs').getBoundingClientRect().y < 500) {
    document.getElementById('trustUs').classList.add('scrolled')
}


let timerIdOne, timerIdTwo, idOne = true, idTwo = true
if (idOne && document.body.clientWidth >= 850) {
    timerIdOne = setInterval(() => {
        window.scrollBy(0, 30)
        if (document.getElementById('main').getBoundingClientRect().y < 400) {
            document.getElementById('sunImg').classList.add('scrolled')
            document.getElementById('letUsHelp').classList.add('scrolled')
        }
        if (document.getElementById('trustUs').getBoundingClientRect().y < 500) {
            document.getElementById('trustUs').classList.add('scrolled')
        }
    }, 100);
    setTimeout(() => {
    }, 2000);
    setTimeout(() => {
        clearInterval(timerIdOne);
        idOne = false
        if (idOne != true) {
            setTimeout(() => {
                timerIdTwo = setInterval(() => {
                    window.scrollBy(0, 30)
                    if (document.getElementById('main').getBoundingClientRect().y < 400) {
                        document.getElementById('sunImg').classList.add('scrolled')
                        document.getElementById('letUsHelp').classList.add('scrolled')
                    }
                    if (document.getElementById('trustUs').getBoundingClientRect().y < 500) {
                        document.getElementById('trustUs').classList.add('scrolled')
                    }
                }, 100);
            }, 3000);
            setTimeout(() => {
                clearInterval(timerIdTwo);
                idTwo = false
            }, 6000);
        }
    }, 4250)}
// Скролл на главной странице на десктопе

if (idOne && document.body.clientWidth < 850) {
    timerIdOne = setInterval(() => {
        window.scrollBy(0, 30)
    }, 100);
    setTimeout(() => {
    }, 2000);
    setTimeout(() => {
        clearInterval(timerIdOne);
        idOne = false
        if (idOne != true) {
            setTimeout(() => {
                timerIdTwo = setInterval(() => {
                    window.scrollBy(0, 30)
                }, 100);
            }, 3000);
            setTimeout(() => {
                clearInterval(timerIdTwo);
                idTwo = false
            }, 5500);
        }
    }, 3000)
}
// Скролл на главной странице на мобильных устройствах