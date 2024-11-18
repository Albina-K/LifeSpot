/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */ 
let session = new Map();

/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    //Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}

/*
* Проверка возраста пользователя
* 
* */

function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст"))

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        // Те, кто старше 18, увидят приветствие и будут направлены на сайт
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время:" + new Date().toLocaleString());
        }
    else {
        // Если введенное число < 18, либо если введено не число -
        // пользователь будет перенаправлен
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
        // a = true + 20 + "name"
    }
}

    // Вывод в консоль
let sessionLog = function () {
    for (let result of session) { console.log(result) }
}

//let userName = prompt("Пожалуйста, введите имя");
//alert(`Приветсвуем, ${userName}. В имени ${userName.length} символов`)

function filterContent() {
    /*Код ниже отрабатывает каждый раз при вводе символа в input*/
    // Сохраняем текст пользовательского запроса.
  
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробежимся в цикле по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {//скрываем неподходящие
            elements[i].style.display = 'none';
        }
        else {
            //показываем подходящие
            elements[i].style.display = 'inline-bloсk';
        }
    }
}


