const translations = {
    uz: {
        name: "Hayitboyev Muhammadali",
        job: "Front-end dasturchi",
        navAbout: "Men haqimda",
        navSkills: "Ko‘nikmalar",
        navProjects: "Loyihalar",
        navContact: "Aloqa",
        aboutTitle: "Men haqimda",
        aboutText: "Men HTML, CSS, JavaScript va biroz React.js bo‘yicha bilimga ega front-end dasturchiman. Foydalanuvchilar uchun qulay va zamonaviy veb-ilovalar yaratishni yoqtiraman. Loyihalarim orasida ob-havo ilovasi, valyuta konvertori va 15 Puzzle o‘yini mavjud. Men doimiy ravishda yangi bilimlarni o‘rganib, dasturlash ko‘nikmalarimni rivojlantiraman.",
        skillsTitle: "Ko‘nikmalar",
        projectsTitle: "Loyihalar",
        weather: "Ob-havo",
        currency: "Valyuta konvertori",
        puzzle: "16 Puzzle o‘yini",
        contactTitle: "Aloqa",
        footer: "© 2026 Muhammadali"
    },

    en: {
        name: "Hayitboyev Muhammadali",
        job: "Front-end Developer",
        navAbout: "About Me",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        aboutTitle: "About Me",
        aboutText: "I am a front-end developer with knowledge of HTML, CSS, JavaScript, and some React.js. I enjoy building modern and user-friendly web applications. My projects include a weather app, a currency converter, and a 15 Puzzle game. I continuously learn new things and improve my programming skills.",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        weather: "Weather App",
        currency: "Currency Converter",
        puzzle: "16 Puzzle Game",
        contactTitle: "Contact",
        footer: "© 2026 Muhammadali"
    },

    ru: {
        name: "Хайитбоев Мухаммадали",
        job: "Front-end разработчик",
        navAbout: "Обо мне",
        navSkills: "Навыки",
        navProjects: "Проекты",
        navContact: "Контакты",
        aboutTitle: "Обо мне",
        aboutText: "Я front-end разработчик, владеющий HTML, CSS, JavaScript и основами React.js. Мне нравится создавать современные и удобные веб-приложения. Среди моих проектов — приложение погоды, конвертер валют и игра 15 Puzzle. Я постоянно изучаю новое и совершенствую свои навыки программирования.",
        skillsTitle: "Навыки",
        projectsTitle: "Проекты",
        weather: "Приложение погоды",
        currency: "Конвертер валют",
        puzzle: "Игра 16 Puzzle",
        contactTitle: "Контакты",
        footer: "© 2026 Мухаммадали"
    }
};

const langButtons = document.querySelectorAll(".lang-btn");

function changeLanguage(lang) {
    const selectedTranslations = translations[lang];

    if (!selectedTranslations) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (selectedTranslations[key]) {
            element.textContent = selectedTranslations[key];
        }
    });

    langButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );
    });

    document.documentElement.lang = lang;

    document.title = selectedTranslations.name;
}

langButtons.forEach(button => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.lang);
    });
});

// Boshlang‘ich til
changeLanguage("uz");