//создадим объект Мар для хранения сессии
let session = new Map();
//Сохраним UserAgent
session.set("userAgent", window.navigator.userAgent)

// Запросим возраст пользователя и сохраним в переменную
session.set("age", prompt("Пожалуйста, введите ваш возраст"))

// Проверка на возраст и сохранение сессии
if (session.get("get") >= 18) {
    let startDate = new Date().toLocaleString();
    // Те, кто старше 18, увидят приветствие и будут направлены на сайт
    alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время:" + startDate);
    session.set("startDate", startDate)
}
else {
    // Если введенное число < 18, либо если введено не число -
    // пользователь будет перенаправлен
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
    a = true + 20 + "name"
}

// Вывод в консоль
for (let result of session) {console.log(result) }

let userName = prompt("Пожалуйста, введите имя");
alert(`Приветсвуем, ${userName}. В имени ${userName.length} символов`)

function filterContent() {
    /*Код ниже отрабатывает каждый раз при вводе символа в input*/
    // Сохраняем текст пользовательского запроса.
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробежимся в цикле по контейнерам
    for (let i = 0; i <= elements.length; i++) {

        //// Получим всё что внутри контейнера
        //let childElements = elements[i];
        //// Получим элемент, содержащий описание видео
        //// Он у нас единственный с тегом h3, снова воспользуемся поиском по тегу,
        //let videoDescription = childElements.getElementsByTagName('h3')[0];
        //// Выведем его текст на консоль
        //console.log(videoDescription.innerText);


        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {//Описание
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'inline-blok';
        }
    }
}
