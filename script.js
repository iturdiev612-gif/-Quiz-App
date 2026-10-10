// 1. БАЗА ВОПРОСОВ //
const questions = [
    // ПРОГРАММИРОВАНИЕ
    {
        category: "web",
        difficulty: "easy",
        question: "Какой язык используется для создания структуры веб-страницы?",
        answers: ["HTML", "CSS", "Python", "SQL"],
        correct: 0,
        explanation: "HTML определяет структуру и содержимое веб-страницы."
    },
    {
        category: "web",
        difficulty: "easy",
        question: "Для чего используется CSS?",
        answers: [
            "Для оформления страницы",
            "Для хранения данных",
            "Для отправки писем",
            "Для создания базы данных"
        ],
        correct: 0,
        explanation: "CSS отвечает за цвета, размеры, расположение элементов и анимации."
    },
    {
        category: "web",
        difficulty: "medium",
        question: "Как объявить переменную, значение которой нельзя переназначить в JavaScript?",
        answers: ["let", "var", "const", "static"],
        correct: 2,
        explanation: "const запрещает повторное присваивание переменной."
    },
    {
        category: "web",
        difficulty: "medium",
        question: "Какой метод добавляет элемент в конец массива?",
        answers: ["shift()", "push()", "pop()", "slice()"],
        correct: 1,
        explanation: "Метод push() добавляет один или несколько элементов в конец массива."
    },
    {
        category: "web",
        difficulty: "hard",
        question: "Что возвращает метод filter() массива JavaScript?",
        answers: [
            "Первый подходящий элемент",
            "Новый массив подходящих элементов",
            "Количество элементов",
            "Всегда исходный массив"
        ],
        correct: 1,
        explanation: "filter() создаёт новый массив из элементов, прошедших проверку."
    },
    {
        category: "web",
        difficulty: "hard",
        question: "Как получить элемент с id=\"title\" в JavaScript?",
        answers: [
            "document.getElementById('title')",
            "document.getClass('title')",
            "window.getId('title')",
            "document.queryId('title')"
        ],
        correct: 0,
        explanation: "getElementById() находит HTML-элемент по его уникальному id."
    },

    // НАУКА
    {
        category: "science",
        difficulty: "easy",
        question: "Какая планета известна как Красная планета?",
        answers: ["Венера", "Марс", "Юпитер", "Меркурий"],
        correct: 1,
        explanation: "Марс выглядит красноватым из-за оксидов железа на его поверхности."
    },
    {
        category: "science",
        difficulty: "easy",
        question: "Какой газ необходим человеку для дыхания?",
        answers: ["Гелий", "Азот", "Кислород", "Водород"],
        correct: 2,
        explanation: "Кислород необходим клеткам человека для эффективного получения энергии."
    },
    {
        category: "science",
        difficulty: "medium",
        question: "Какова химическая формула воды?",
        answers: ["CO₂", "O₂", "NaCl", "H₂O"],
        correct: 3,
        explanation: "Молекула воды состоит из двух атомов водорода и одного атома кислорода."
    },
    {
        category: "science",
        difficulty: "medium",
        question: "Какой орган перекачивает кровь по телу человека?",
        answers: ["Лёгкие", "Печень", "Сердце", "Почки"],
        correct: 2,
        explanation: "Сердце работает как мышечный насос кровеносной системы."
    },
    {
        category: "science",
        difficulty: "hard",
        question: "Как называется единица электрического сопротивления?",
        answers: ["Ватт", "Ом", "Ампер", "Вольт"],
        correct: 1,
        explanation: "Ом — единица электрического сопротивления в Международной системе единиц."
    },
    {
        category: "science",
        difficulty: "hard",
        question: "Какой процесс позволяет растениям использовать энергию света для синтеза органических веществ?",
        answers: [
            "Фотосинтез",
            "Испарение",
            "Ферментация",
            "Конденсация"
        ],
        correct: 0,
        explanation: "При фотосинтезе растения используют световую энергию для образования органических веществ."
    },

    // ОБЩИЕ ЗНАНИЯ
    {
        category: "general",
        difficulty: "easy",
        question: "Сколько дней в обычном году?",
        answers: ["360", "365", "366", "364"],
        correct: 1,
        explanation: "В обычном году 365 дней, а в високосном — 366."
    },
    {
        category: "general",
        difficulty: "easy",
        question: "Как называется столица Японии?",
        answers: ["Киото", "Осака", "Токио", "Нагоя"],
        correct: 2,
        explanation: "Токио — столица Японии."
    },
    {
        category: "general",
        difficulty: "medium",
        question: "Какой океан является самым большим на Земле?",
        answers: [
            "Атлантический",
            "Индийский",
            "Северный Ледовитый",
            "Тихий"
        ],
        correct: 3,
        explanation: "Тихий океан — крупнейший океан Земли по площади."
    },
    {
        category: "general",
        difficulty: "medium",
        question: "Сколько сторон у шестиугольника?",
        answers: ["Пять", "Шесть", "Семь", "Восемь"],
        correct: 1,
        explanation: "Шестиугольник — геометрическая фигура с шестью сторонами."
    },
    {
        category: "general",
        difficulty: "hard",
        question: "Какой язык является официальным государственным языком Бразилии?",
        answers: ["Испанский", "Французский", "Португальский", "Итальянский"],
        correct: 2,
        explanation: "Официальный государственный язык Бразилии — португальский."
    },
    {
        category: "general",
        difficulty: "hard",
        question: "Как называется наука, изучающая землетрясения?",
        answers: [
            "Сейсмология",
            "Метеорология",
            "Астрономия",
            "Ботаника"
        ],
        correct: 0,
        explanation: "Сейсмология изучает землетрясения и распространение сейсмических волн."
    }
];

// ======================================
// 2. ЭЛЕМЕНТЫ СТРАНИЦЫ
// ======================================

const $ = (selector) => document.querySelector(selector);

const screens = {
    home: $("#homeScreen"),
    quiz: $("#quizScreen"),
    result: $("#resultScreen"),
    review: $("#reviewScreen")
};

const categoryNames = {
    all: "Все категории",
    web: "Программирование",
    science: "Наука",
    general: "Общие знания"
};

const difficultyNames = {
    easy: "Лёгкая",
    medium: "Средняя",
    hard: "Сложная",
    all: "Любая"
};

// ======================================
// 3. СОСТОЯНИЕ ИГРЫ
// ======================================

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAnswer = null;
let questionLocked = false;

let timerId = null;
let timeLeft = 0;
let questionStartedAt = 0;
let totalTime = 0;
let gameStartedAt = 0;

let configuredTime = 15;
let soundEnabled = true;
let gameSettings = {};

let reviewData = [];

// ======================================
// 4. СОХРАНЕНИЕ РЕКОРДА
// ======================================

function getBestScore() {
    try {
        return Number(localStorage.getItem("quizMasterBest")) || 0;
    } catch {
        return 0;
    }
}

function updateBestScore(value) {
    try {
        localStorage.setItem("quizMasterBest", String(value));
    } catch {
        // Игра продолжит работать, даже если хранилище недоступно.
    }
}

function updateHeaderBest() {
    $("#headerBest").textContent = getBestScore();
}

// ======================================
// 5. ПЕРЕКЛЮЧЕНИЕ ЭКРАНОВ
// ======================================

function showScreen(screenName) {
    Object.values(screens).forEach((screen) => {
        screen.classList.remove("active");
    });

    screens[screenName].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ======================================
// 6. ЗВУКОВЫЕ ЭФФЕКТЫ
// ======================================

let audioContext = null;

function playSound(type) {
    if (!soundEnabled) return;

    try {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) return;

        if (!audioContext) {
            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        const settings = {
            correct: { frequency: 740, duration: 0.13 },
            wrong: { frequency: 230, duration: 0.18 },
            click: { frequency: 440, duration: 0.07 },
            finish: { frequency: 880, duration: 0.25 }
        };

        const sound = settings[type] || settings.click;
        const now = audioContext.currentTime;

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(sound.frequency, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.07, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + sound.duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(now);
        oscillator.stop(now + sound.duration);
    } catch (error) {
        console.warn("Звук недоступен:", error);
    }
}

$("#soundBtn").addEventListener("click", () => {
    soundEnabled = !soundEnabled;

    $("#soundBtn").textContent = soundEnabled ? "🔊" : "🔇";
    playSound("click");
});

// ======================================
// 7. СВЕТЛАЯ И ТЁМНАЯ ТЕМА
// ======================================

try {
    if (localStorage.getItem("quizMasterTheme") === "light") {
        document.body.classList.add("light-theme");
    }
} catch {
    // По умолчанию используется тёмная тема.
}

function updateThemeButton() {
    const isLight = document.body.classList.contains("light-theme");
    $("#themeBtn").textContent = isLight ? "🌙" : "☀️";
}

updateThemeButton();

$("#themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";

    try {
        localStorage.setItem("quizMasterTheme", theme);
    } catch {
        // Смена темы работает и без localStorage.
    }

    updateThemeButton();
    playSound("click");
});

// ======================================
// 8. ПОДГОТОВКА ВИКТОРИНЫ
// ======================================

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function startQuiz(event) {
    if (event) event.preventDefault();

    stopTimer();

    const category = $("#category").value;
    const difficulty = $("#difficulty").value;
    const count = Number($("#questionCount").value);
    configuredTime = Number($("#timeLimit").value);

    let availableQuestions = questions.filter((question) => {
        const categoryMatches =
            category === "all" || question.category === category;

        const difficultyMatches =
            difficulty === "all" || question.difficulty === difficulty;

        return categoryMatches && difficultyMatches;
    });

    if (availableQuestions.length === 0) {
        alert("Для выбранных настроек пока нет вопросов.");
        return;
    }

    availableQuestions = shuffleArray(availableQuestions);

    quizQuestions = availableQuestions.slice(
        0,
        Math.min(count, availableQuestions.length)
    );

    // Перемешиваем варианты, сохраняя правильный ответ.
    quizQuestions = quizQuestions.map((question) => {
        const shuffledAnswers = shuffleArray(
            question.answers.map((answer, index) => ({
                text: answer,
                isCorrect: index === question.correct
            }))
        );

        return {
            ...question,
            answers: shuffledAnswers.map((answer) => answer.text),
            correct: shuffledAnswers.findIndex(
                (answer) => answer.isCorrect
            )
        };
    });

    gameSettings = {
        category,
        difficulty,
        count: quizQuestions.length,
        time: configuredTime
    };

    currentIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    totalTime = 0;
    selectedAnswer = null;
    questionLocked = false;
    reviewData = [];

    gameStartedAt = Date.now();

    showScreen("quiz");
    renderQuestion();
}

// ======================================
// 9. ПОКАЗ ВОПРОСА
// ======================================

function renderQuestion() {
    stopTimer();

    const question = quizQuestions[currentIndex];

    selectedAnswer = null;
    questionLocked = false;

    $("#questionCounter").textContent =
        `Вопрос ${currentIndex + 1} из ${quizQuestions.length}`;

    $("#questionNumber").textContent =
        String(currentIndex + 1).padStart(2, "0");

    $("#questionText").textContent = question.question;

    $("#quizCategory").textContent =
        categoryNames[question.category];

    $("#difficultyLabel").textContent =
        difficultyNames[question.difficulty];

    $("#progressFill").style.width =
        `${(currentIndex / quizQuestions.length) * 100}%`;

    $("#answers").replaceChildren();

    $("#feedback").className = "feedback";
    $("#feedback").textContent = "";

    $("#nextBtn").disabled = true;

    $("#nextBtn").innerHTML =
        currentIndex === quizQuestions.length - 1
            ? 'Посмотреть результат <span>→</span>'
            : 'Следующий вопрос <span>→</span>';

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.dataset.index = String(index);

        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.textContent = answer;

        button.append(letter, text);

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        $("#answers").appendChild(button);
    });

    questionStartedAt = Date.now();

    if (configuredTime > 0) {
        timeLeft = configuredTime;
        updateTimerUI();
        timerId = setInterval(tickTimer, 1000);
    } else {
        $("#timerText").textContent = "Без ограничений";
        $("#timerFill").style.width = "100%";
        $("#timerFill").className = "timer-fill";
    }
}

// ======================================
// 10. ТАЙМЕР
// ======================================

function stopTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function updateTimerUI() {
    $("#timerText").textContent = `${timeLeft} сек`;

    const percentage = configuredTime > 0
        ? (timeLeft / configuredTime) * 100
        : 100;

    $("#timerFill").style.width = `${percentage}%`;
    $("#timerFill").className = "timer-fill";

    if (configuredTime > 0 && timeLeft <= configuredTime / 3) {
        $("#timerFill").classList.add("danger");
        $("#timerText").style.color = "var(--danger)";
    } else if (configuredTime > 0 && timeLeft <= configuredTime / 2) {
        $("#timerFill").classList.add("warning");
        $("#timerText").style.color = "#fbbf24";
    } else {
        $("#timerText").style.color = "var(--success)";
    }
}

function tickTimer() {
    if (questionLocked) return;

    timeLeft = Math.max(0, timeLeft - 1);
    updateTimerUI();

    if (timeLeft <= 0) {
        stopTimer();
        selectAnswer(null, true);
    }
}

// ======================================
// 11. ПРОВЕРКА ОТВЕТА
// ======================================

function selectAnswer(index, timedOut = false) {
    if (questionLocked) return;

    questionLocked = true;
    selectedAnswer = index;

    stopTimer();

    const question = quizQuestions[currentIndex];
    const isCorrect = index === question.correct;

    const elapsed = Math.max(
        0,
        Math.round((Date.now() - questionStartedAt) / 1000)
    );

    totalTime += elapsed;

    let pointsEarned = 0;

    if (isCorrect) {
        correctCount++;

        // За правильный ответ начисляется 100 базовых баллов.
        // Чем быстрее ответ, тем больше бонус за время.
        const timeBonus = configuredTime > 0
            ? Math.round((timeLeft / configuredTime) * 50)
            : 0;

        pointsEarned = 100 + timeBonus;
        score += pointsEarned;

        playSound("correct");
    } else {
        wrongCount++;
        playSound("wrong");
    }

    const answerButtons = [
        ...$("#answers").querySelectorAll(".answer-btn")
    ];

    answerButtons.forEach((button, buttonIndex) => {
        button.disabled = true;

        if (buttonIndex === question.correct) {
            button.classList.add("correct");
        }

        if (index !== null && buttonIndex === index && !isCorrect) {
            button.classList.add("wrong");
        }
    });

    const feedback = $("#feedback");

    feedback.classList.add("show", isCorrect ? "good" : "bad");

    if (timedOut) {
        feedback.textContent =
            `⏰ Время вышло! Правильный ответ: ${question.answers[question.correct]}. ${question.explanation}`;
    } else if (isCorrect) {
        feedback.textContent =
            `✓ Правильно! +${pointsEarned} баллов. ${question.explanation}`;
    } else {
        feedback.textContent =
            `✗ Неверно. Правильный ответ: ${question.answers[question.correct]}. ${question.explanation}`;
    }

    reviewData.push({
        question: question.question,
        answers: [...question.answers],
        correct: question.correct,
        selected: index,
        isCorrect,
        timedOut,
        explanation: question.explanation,
        points: pointsEarned
    });

    $("#progressFill").style.width =
        `${((currentIndex + 1) / quizQuestions.length) * 100}%`;

    $("#nextBtn").disabled = false;
}

// ======================================
// 12. СЛЕДУЮЩИЙ ВОПРОС
// ======================================

function nextQuestion() {
    if (!questionLocked) return;

    playSound("click");

    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

// ======================================
// 13. ЗАВЕРШЕНИЕ ИГРЫ
// ======================================

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;
}

function finishQuiz() {
    stopTimer();

    const elapsed = Math.max(
        0,
        Math.round((Date.now() - gameStartedAt) / 1000)
    );

    const percentage = Math.round(
        (correctCount / quizQuestions.length) * 100
    );

    const previousBest = getBestScore();
    const isNewRecord = score > previousBest && score > 0;

    if (isNewRecord) {
        updateBestScore(score);
    }

    updateHeaderBest();

    $("#scorePercent").textContent = `${percentage}%`;

    $("#scoreCircle").style.background =
        `conic-gradient(var(--primary-light) ${percentage}%, var(--surface-2) ${percentage}%)`;

    $("#correctCount").textContent = correctCount;
    $("#wrongCount").textContent = wrongCount;
    $("#totalPoints").textContent = score;
    $("#resultTime").textContent = formatTime(elapsed);

    if (percentage === 100) {
        $("#resultEmoji").textContent = "🏆";
        $("#resultTitle").textContent = "Идеальный результат!";
        $("#resultDescription").textContent =
            "Невероятно! Ты ответил правильно на все вопросы.";
    } else if (percentage >= 70) {
        $("#resultEmoji").textContent = "🎉";
        $("#resultTitle").textContent = "Отличная работа!";
        $("#resultDescription").textContent =
            "Ты отлично справился. Продолжай развиваться!";
    } else if (percentage >= 40) {
        $("#resultEmoji").textContent = "💪";
        $("#resultTitle").textContent = "Хорошая попытка!";
        $("#resultDescription").textContent =
            "Ты уже многое знаешь. Разбор ошибок поможет стать лучше.";
    } else {
        $("#resultEmoji").textContent = "📚";
        $("#resultTitle").textContent = "Время учиться!";
        $("#resultDescription").textContent =
            "Не сдавайся! Попробуй ещё раз и побей свой результат.";
    }

    $("#recordMessage").textContent = isNewRecord
        ? "🏆 Новый рекорд! Ты превзошёл свой лучший результат!"
        : score === previousBest && score > 0
            ? "⭐ Ты повторил свой рекорд!"
            : `Твой лучший результат: ${Math.max(score, previousBest)} баллов`;

    playSound("finish");
    showScreen("result");
}

// ======================================
// 14. ПРОСМОТР ОТВЕТОВ
// ======================================

function renderReview() {
    $("#reviewList").replaceChildren();

    reviewData.forEach((item, index) => {
        const article = document.createElement("article");

        article.className = item.isCorrect
            ? "review-item correct-review"
            : "review-item wrong-review";

        const title = document.createElement("h3");
        title.textContent = `${index + 1}. ${item.question}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.className = "review-answer";

        const yourLabel = document.createElement("strong");
        yourLabel.textContent = "Твой ответ: ";

        const yourText = item.selected === null
            ? "Время вышло — ответа нет"
            : item.answers[item.selected];

        yourAnswer.append(yourLabel, document.createTextNode(yourText));

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "review-answer";

        const correctLabel = document.createElement("strong");
        correctLabel.textContent = "Правильный ответ: ";

        correctAnswer.append(
            correctLabel,
            document.createTextNode(item.answers[item.correct])
        );

        const explanation = document.createElement("p");
        explanation.className = "review-answer";
        explanation.textContent = `💡 ${item.explanation}`;

        const status = document.createElement("span");
        status.className = `review-status ${item.isCorrect ? "good" : "bad"}`;
        status.textContent = item.isCorrect
            ? `✓ Верно · +${item.points} баллов`
            : "✗ Ошибка";

        article.append(
            title,
            yourAnswer,
            correctAnswer,
            explanation,
            status
        );

        $("#reviewList").appendChild(article);
    });

    showScreen("review");
}

// ======================================
// 15. СОБЫТИЯ И КНОПКИ
// ======================================

$("#quizForm").addEventListener("submit", startQuiz);

$("#nextBtn").addEventListener("click", nextQuestion);

$("#reviewBtn").addEventListener("click", renderReview);

$("#backToResult").addEventListener("click", () => {
    showScreen("result");
});

$("#retryBtn").addEventListener("click", () => {
    startQuiz();
});

$("#reviewRetryBtn").addEventListener("click", () => {
    startQuiz();
});

$("#homeBtn").addEventListener("click", () => {
    stopTimer();
    showScreen("home");
});

$("#homeLogo").addEventListener("click", (event) => {
    event.preventDefault();
    stopTimer();
    showScreen("home");
});

$("#quitBtn").addEventListener("click", () => {
    const confirmed = window.confirm(
        "Выйти из викторины? Текущий прогресс будет потерян."
    );

    if (confirmed) {
        stopTimer();
        showScreen("home");
    }
});

// ======================================
// 16. ЗАПУСК ПРИЛОЖЕНИЯ
// ======================================

updateHeaderBest();
showScreen("home");