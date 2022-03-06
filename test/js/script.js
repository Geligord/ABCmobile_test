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
let birthDate, age
// Объявление некоторых переменных

let timeToWait = 3000;
function animationFirst() {
    document.getElementById('online').scrollIntoView({behavior: 'smooth'});
    document.getElementById('sunImg').classList.add("animation");
    document.getElementById('letUsHelp').classList.add("animation");
}
function animationSecond() {
    document.getElementById('trustUs').scrollIntoView({behavior: 'smooth'});
    document.getElementById('trustUs').classList.add("animation");
}
function animationSecond() {
    document.getElementById('trustUs').scrollIntoView({behavior: 'smooth'});
    document.getElementById('trustUs').classList.add("animation");
}
function animationThird() {
    document.getElementById('trustUs').scrollIntoView({behavior: 'smooth'});
    document.getElementById('trustUs').classList.add("animation");
}
setTimeout(function(){ 
    animationFirst();
    document.getElementById('sunImg').style.opacity = '1';
    document.getElementById('letUsHelp').style.opacity = '1';
    setTimeout(function(){ 
        animationSecond();
        document.getElementById('trustUs').style.opacity = '1';
        }, timeToWait);
    }, timeToWait);


function questions() {
    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    firstQuestion.style.display = 'flex';
}
// Скрытие главной страницы и переход к вопросам

function questionTwo() {
    firstQuestion.style.display = 'none';
    secondQuestion.style.display = 'flex';
}
// Следующий вопрос

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

function questionThree() {
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
        if (age > 46) {
            ageQuote.textContent += 'Возможно это кто-то из Ваших родителей.'
        }
        else if (age > 35 && age <= 46) {
            ageQuote.textContent += 'Возможно это дедушка или бабушка.'
        }
        // Показ необходимой информации в зависимости от возраста пользователя
        setTimeout(function() {
            third.style.display = 'none';
            fourthQuestion.style.display = 'flex';
            let today = new Date()
            let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
            firstEvent.textContent += 
            'ПЕРВОЕ ЗНАЧИМОЕ СОБЫТИЕ МОЖЕТ ПРОИЗОЙТИ УЖЕ ' + tomorrow.getDate()+'.'+tomorrow.getMonth()+'.'+tomorrow.getFullYear() +', Вам надо быть готовым, что бы последствия не оказались необратимыми.'
            },
        2000);
        // "Загрузка" - 2 секугды, переход к следующему вопросу,
        // затем расчет завтрашней даты и показ её пользователю
    }
}

function questionFour() {
    fourthQuestion.style.display = 'none';
    fiveQuestion.style.display = 'flex';
}
// Следующий вопрос

let i = 259
let audioTime = 13000
function questionFive() {
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
            window.addEventListener('scroll', function() {
                if (window.pageYOffset + document.documentElement.clientHeight + 5 > 
                    document.documentElement.offsetHeight && 
                    window.pageYOffset+document.documentElement.clientHeight - 5 <
                     document.documentElement.offsetHeight) {
                        document.getElementById('latinTextHidden').style.opacity = '1'
                     }
                });
            // Проявление второй части "футера" при скролле, когда одна его часть уже видна
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
    results2 = JSON.parse(results)
    let keys = Object.keys(results2)
    let values = Object.values(results2)
    document.getElementById('apiData').innerHTML =
     keys[0] + ': ' + values[0] + ';' + '<br>' + 
     keys[1] + ': ' + values[1] + ';' + '<br>'+ 
     keys[2] + ': ' + values[2] + ';' + '<br>' + 
     keys[3] + ': ' + values[3] + ';' + '<br>' + 
     keys[4] + ': ' + values[4] + ';' + '<br>' + 
     keys[5] + ': ' + values[5] + ';' + '<br>' +  
     keys[6] + ': ' + values[6] + ';' + '<br>' + 
     keys[7] + ': ' + values[7] + ';' + '<br>' + 
     keys[8] + ': ' + values[8] + ';' + '<br>' + 
     keys[9] + ': ' + values[9] + ';' + '<br>' + 
     keys[10] + ': ' + values[10] + ';' + '<br>' + 
     keys[11] + ': ' + values[11] + ';' + '<br>' + 
     keys[12] + ': ' + values[12] + ';' + '<br>' + 
     keys[13] + ': ' + values[13] + ';' + '<br>' + 
     keys[14] + ': ' + values[14] + ';';
    document.getElementById('call').style.display = 'none'
    // Корректное, оформленное отображение данных в виде, понятном для пользователя
    // а не в "сыром" JSON
}