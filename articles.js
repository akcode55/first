document.addEventListener('DOMContentLoaded', () => {
    const articlesList = document.getElementById('articlesList');
    const languageCards = document.querySelectorAll('.language-card');

    const articles = {
        javascript: [
            {
                title: 'مقدمة في JavaScript',
                content: `
                    <h2>مقدمة في JavaScript</h2>
                    <p>JavaScript هي لغة برمجة عالية المستوى، تستخدم بشكل أساسي في تطوير تطبيقات الويب.</p>
                    
                    <h3>المواضيع الأساسية:</h3>
                    <ul>
                        <li>المتغيرات والثوابت</li>
                        <li>أنواع البيانات</li>
                        <li>العمليات الحسابية والمنطقية</li>
                        <li>جمل التحكم الشرطية</li>
                        <li>الحلقات التكرارية</li>
                    </ul>
                `
            },
            {
                title: 'الدوال في JavaScript',
                content: `
                    <h2>الدوال في JavaScript</h2>
                    <p>الدوال هي كتل برمجية يمكن إعادة استخدامها لتنفيذ مهام محددة.</p>
                    
                    <h3>أنواع الدوال:</h3>
                    <ul>
                        <li>الدوال العادية</li>
                        <li>دوال السهم</li>
                        <li>الدوال المجهولة</li>
                        <li>الدوال كمتغيرات</li>
                    </ul>
                `
            }
        ],
        python: [
            {
                title: 'أساسيات Python',
                content: `
                    <h2>أساسيات Python</h2>
                    <p>Python هي لغة برمجة سهلة التعلم وقوية، تستخدم في مجالات متعددة.</p>
                    
                    <h3>المفاهيم الأساسية:</h3>
                    <ul>
                        <li>المتغيرات والأنواع</li>
                        <li>القوائم والقواميس</li>
                        <li>الدوال والوحدات</li>
                        <li>التعامل مع الملفات</li>
                    </ul>
                `
            },
            {
                title: 'البرمجة كائنية التوجه في Python',
                content: `
                    <h2>البرمجة كائنية التوجه في Python</h2>
                    <p>تعلم كيفية إنشاء واستخدام الكائنات والفئات في Python.</p>
                    
                    <h3>المواضيع الرئيسية:</h3>
                    <ul>
                        <li>تعريف الفئات</li>
                        <li>الوراثة والتعدد الشكلي</li>
                        <li>التغليف والتجريد</li>
                    </ul>
                `
            }
        ],
        java: [
            {
                title: 'مدخل إلى Java',
                content: `
                    <h2>مدخل إلى Java</h2>
                    <p>Java هي لغة برمجة قوية تستخدم في تطوير التطبيقات المختلفة.</p>
                    
                    <h3>المفاهيم الأساسية:</h3>
                    <ul>
                        <li>بيئة التطوير Java</li>
                        <li>الأنواع والمتغيرات</li>
                        <li>المصفوفات والمجموعات</li>
                        <li>التحكم في التدفق</li>
                    </ul>
                `
            },
            {
                title: 'البرمجة كائنية التوجه في Java',
                content: `
                    <h2>البرمجة كائنية التوجه في Java</h2>
                    <p>تعلم أساسيات البرمجة كائنية التوجه في Java.</p>
                    
                    <h3>المواضيع الرئيسية:</h3>
                    <ul>
                        <li>الفئات والكائنات</li>
                        <li>الوراثة والواجهات</li>
                        <li>التغليف والتجريد</li>
                        <li>معالجة الاستثناءات</li>
                    </ul>
                `
            }
        ]
    };

    function showArticles(language) {
        articlesList.innerHTML = '';
        articles[language].forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'article-item';
            articleElement.innerHTML = article.content;
            articlesList.appendChild(articleElement);
        });
    }

    languageCards.forEach(card => {
        card.addEventListener('click', () => {
            const language = card.dataset.lang;
            showArticles(language);
        });
    });
});