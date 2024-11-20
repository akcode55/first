document.addEventListener('DOMContentLoaded', () => {
    const coursesList = document.getElementById('coursesList');
    const languageCards = document.querySelectorAll('.language-card');

    const courses = {
        javascript: [
            { title: 'أساسيات JavaScript', url: 'https://www.youtube.com/watch?v=GM6dQBmc-Xg' },
            { title: 'JavaScript للمبتدئين', url: 'https://www.youtube.com/watch?v=Ptbk2af68e8' },
            { title: 'مشاريع JavaScript', url: 'https://www.youtube.com/watch?v=TkP6gf0eKGE' }
        ],
        python: [
            { title: 'دورة Python الشاملة', url: 'https://www.youtube.com/watch?v=mvZHDpCHphk' },
            { title: 'Python للمبتدئين', url: 'https://www.youtube.com/watch?v=YXmTXw6yZtY' },
            { title: 'مشاريع Python', url: 'https://www.youtube.com/watch?v=8ext9G7xspg' }
        ],
        java: [
            { title: 'تعلم Java من الصفر', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
            { title: 'Java للمبتدئين', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
            { title: 'مشاريع Java', url: 'https://www.youtube.com/watch?v=7WiJGTPuVeU' }
        ]
    };

    function showCourses(language) {
        coursesList.innerHTML = '';
        courses[language].forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course-item';
            courseElement.innerHTML = `
                <h3>${course.title}</h3>
                <a href="${course.url}" target="_blank">مشاهدة الدورة</a>
            `;
            coursesList.appendChild(courseElement);
        });
    }

    languageCards.forEach(card => {
        card.addEventListener('click', () => {
            const language = card.dataset.lang;
            showCourses(language);
        });
    });
});