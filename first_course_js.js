// Math particles animation
function initMathParticles() {
    const container = document.getElementById("math-particles")
    const formulas = [
        "∫ f(x) dx = F(x) + C",
        "∑_{i=1}^n i = n(n+1)/2",
        "e^{iπ} + 1 = 0",
        "∇ × E = -∂B/∂t",
        "x = [-b ± √(b²-4ac)] / 2a",
        "f'(x) = lim_{h→0} [f(x+h)-f(x)]/h",
        "A = πr²",
        "F = ma",
        "E = mc²",
        "a² + b² = c²",
        "P = NP?",
        "φ = (1+√5)/2",
        "sin²θ + cos²θ = 1",
        "det(A - λI) = 0",
        "f: X → Y",
        "∀ε>0 ∃δ>0: |x-a|<δ ⇒ |f(x)-L|<ε",
        "ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ",
        "x ≡ y mod n",
        "f * g = ∫ f(t)g(x-t) dt",
        "∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)",
    ]

    function createParticle() {
        const formula = document.createElement("div")
        formula.className = "math-formula"
        formula.textContent = formulas[Math.floor(Math.random() * formulas.length)]

        const duration = Math.random() * 20 + 15
        const delay = Math.random() * -25
        const startX = Math.random() * 100

        formula.style.left = `${startX}%`
        formula.style.animationDuration = `${duration}s`
        formula.style.animationDelay = `${delay}s`
        formula.style.fontSize = `${Math.random() * 12 + 16}px`
        formula.style.opacity = Math.random() * 0.2 + 0.05

        container.appendChild(formula)

        setTimeout(() => {
            if (formula.parentNode) {
                formula.remove()
            }
        }, duration * 1000)
    }

    for (let i = 0; i < 12; i++) {
        createParticle()
    }

    setInterval(createParticle, 3000)
}

// Popup content templates
const popupTemplates = {
    // Event popups
    dpmm: {
        icon: 'fas fa-user-graduate',
        title: 'ДПММ',
        subtitle: 'Месяц адаптации первокурсников',
        content: `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(37, 99, 235, 0.2); border-radius: 1rem; color: var(--primary-light); font-weight: 600; margin-bottom: 1rem;">
                📅 Сентябрь 2025
            </div>
        </div>

        <h3>Что это?</h3>
        <p>ДПММ — это целый месяц мероприятий для первокурсников. Вас ждут встречи с преподавателями и старшекурсниками, настолки, квесты, лекции, поход и многое другое. Это время, когда вы познакомитесь с университетом, своей группой и студенческой жизнью.</p>

        <h3>Какие мероприятия в этом году?</h3>
        <ul>
            <li>Скоро!</li>
            <li>Скоро!</li>
            <li>Скоро!</li>
            <li>Скоро!</li>
            <li>Скоро!</li>
            <li>Скоро!</li>
            <li>Скоро!</li>
        </ul>

        <h3>Почему важно участвовать</h3>
        <ul>
            <li>Познакомишься со своей группой и кураторами</li>
            <li>Поймёшь, как устроен университет</li>
            <li>Получишь ответы на все вопросы</li>
            <li>Сразу вольёшься в студенческую жизнь</li>
            <li>Найдёшь друзей и поддержку</li>
        </ul>

        <h3>Ничего не пропусти!</h3>
        <p>Следи за расписанием мероприятий в Telegram-канале группы и на информационных стендах на матмехе!</p>
    `,
        actions: []
    },

    dmm: {
        icon: 'fas fa-calendar-alt',
        title: 'ДММ',
        subtitle: 'День математика и механика',
        content: `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(37, 99, 235, 0.2); border-radius: 1rem; color: var(--primary-light); font-weight: 600; margin-bottom: 1rem;">
                📅 Апрель – май 2025
            </div>
        </div>

        <h3>О ДММ</h3>
        <p>День математика и механика — это не один день, а целый цикл студенческих мероприятий, который длится 1.5–2 месяца весной. В программе — спортивные турниры, интеллектуальные игры, настолки, квесты, квизы и многое другое.</p>

        <h3>Формат</h3>
        <ul>
            <li>⚡ Несколько мероприятий в неделю в течение всего периода</li>
            <li>📍 Проводятся на матмехе и вне университета</li>
        </ul>

        <h3>Кульминация</h3>
        <p>Финалом цикла становится большой концерт — творческое выступление студентов.</p>

        <h3>Зачем участвовать</h3>
        <ul>
            <li>Погрузиться в атмосферу факультета</li>
            <li>Прокачать свои soft-skills через командную работу</li>
            <li>Завести друзей за пределами своей группы</li>
            <li>Просто классно провести весну!</li>
        </ul>

        <p style="margin-top: 1.5rem;">Следи за расписанием мероприятий в Telegram и приходи — ты точно найдёшь что-то по душе!</p>
    `,
        actions: []
    },

    zmsh: {
        icon: 'fas fa-snowflake',
        title: 'ЗМШ',
        subtitle: 'Зимняя математическая школа',
        content: `
            <div style="text-align: center; margin-bottom: 2rem;">
                <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(37, 99, 235, 0.2); border-radius: 1rem; color: var(--primary-light); font-weight: 600; margin-bottom: 1rem;">
                    📅 10-17 февраля
                </div>
            </div>
            <h3>О школе</h3>
            <p>Зимняя математическая школа — это уникальное образовательное мероприятие, где студенты погружаются в изучение углубленных разделов математики, участвуют в научных проектах и общаются с ведущими учеными.</p>
            
            <h3>Программа школы</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">📚 Лекции ведущих математиков</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Современные направления математических исследований</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">🔬 Научные семинары</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Работа над исследовательскими проектами</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">💻 Компьютерное моделирование</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Практические занятия с современным ПО</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">🏔️ Культурная программа</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Экскурсии и активный отдых на природе</p>
                </div>
            </div>
            
            <h3>Условия участия</h3>
            <ul>
                <li><strong>Для кого:</strong> Студенты 2-4 курсов</li>
                <li><strong>Отбор:</strong> -</li>
                <li><strong>Место проведения:</strong> База отдыха </li>
                <li><strong>Стоимость:</strong> -</li>
            </ul>
            
            <h3>Что дает участие</h3>
            <ul>
                <li>Углубленные знания в математике</li>
            </ul>
        `,
        actions: []
    },

    // Guide popups (same as before but with enhanced styling)
    faq: {
        icon: 'fas fa-question-circle',
        title: 'Часто задаваемые вопросы',
        subtitle: 'Ответы на популярные вопросы студентов',
        content: `
            <h3>🎓 Учёба</h3>
            <div style="margin-bottom: 2rem;">
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Что такое МЕНы?</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">МЕН - краткая запись (Математика и естественные науки), обозначение групп в УрФУ. На МатМехе же используется более лёгкое и понятное сокращение для обозначения групп. (Например, Компьютерная безопасность 3 курс = КБ-3, Компьютерные науки 4 курс = КН-4)</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Как узнать свою группу?</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Группа отображается в личном кабинете студента. Там запись в формате МЕН.</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Можно ли записывать лекции на видео?</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Достаточное кол-во преподавателей даёт это делать, но это индивидуально. Лучше спросить на первой паре сразу у преподавателя можно ли записывать его(её) лекции на видео.</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Автоматы существуют?</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Да, автоматы существуют, но не по всем предметам. Какие-то преподы говорят это сразу, а у каких-то это сюрприз перед сессией, поэтому лучше уточнять у препода и своих кураторов)</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Когда и в каком формате проходит сессия, + насколько вообще много билетов, вопросов и т.д.?</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Зимняя сессия начинается после новогодних каникул и идёт +- месяц. Летняя сессия начинается в июне и длится также +- месяц. Кол-во вопросов к экзамену каждый раз разное) В среднем 30</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Очень сильно нужен ноутбук или можно подождать?</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Если нет ни ноутбука, ни ПК, то жить можно. На МатМехе есть аудитории с компами, куда можно прийти и сделать дз. Возможно, получится договориться с одногруппником(цей) и брать его (её) ноут или пк.

Но жизнь без ноута не очень(</p>
                </div>
            </div>

            <h3>🪖 Военкомат</h3>
            <div style="margin-bottom: 2rem;">
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 1rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Что с военкомом? Что делать, чтоб меня не забрали?</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">P.S: Приготовьте копии военников/приписных у кого есть(Кроме иностранных студентов)<br>

>Если вы из Екб, то после сказанной даты(Мониторьте информацию в чатах) прийти по адресу Мира, 19, Ауд. И-224. в 13:00-17:00(Время может меняться). С собой иметь паспорт и приписное(Либо военный билет)<br><br>
>Если вы не с Екб, то. Приходим в военкомат по адресу; Вишнёвая 49-А(Адрес может зависеть от вашего общежития) в пн-ср + пт с 8:00-12:00 в каб.№19. С собой нужно иметь: Паспорт + копия, Приписное + копия, Копия аттестата об образовании, Справка студента с деканата( Заказывается из личного кабинета), Копию временной регистрации(Если есть!) или договор найма жилья(копия)
<br></p>
                </div>
            </div>
        `,
        actions: []
    },

    dormitories: {
        icon: 'fas fa-home',
        title: 'Общежития УрФУ',
        subtitle: 'Информация о студенческом жилье',
        content: `
            <h3>🏢 Общежитие №6 (ул. Чапаева, 16а) и №4 (ул. Большакова, 71)</h3>
            <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 2rem;">
                <ul style="margin: 0; padding-left: 1rem;">
                    <li><strong>Расположение:</strong> Между метро "Чкаловская" и "Геологическая", 30-40 минут пешком до главного корпуса</li>
                    <li><strong>Тип комнат:</strong> 2-3 местные комнаты</li>
                    <li><strong>Удобства:</strong> Душ и туалет на этаже, кухня</li>
                    <li><strong>Стоимость:</strong> От 1000 рублей в месяц</li>
                </ul>
            </div>

            <h3>🌲 НВК (Новокольцово)</h3>
            <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 2rem;">
                <ul style="margin: 0; padding-left: 1rem;">
                    <li><strong>Расположение:</strong> За городом, 60 минут на автобусе</li>
                    <li><strong>Тип комнат:</strong> 2-3 местные комнаты</li>
                    <li><strong>Удобства:</strong> Полный комплекс услуг</li>
                    <li><strong>Стоимость:</strong> От 1000 рублей в месяц</li>
                    <li><strong>Особенности:</strong> Большая территория, природа, активная студенческая жизнь</li>
                </ul>
            </div>

            <h3>📋 Заселение</h3>
            <ul>
                <li>Подача заявки — через приёмную кампанию</li>
                <li>Приоритет по баллам ЕГЭ и нуждаемости</li>
                <li>Список нужных документов — <a href="https://urfu.ru/ru/students/social/campus/" target="_blank">тут</a></li>
                <li>Следи за новостями в <a href="https://vk.com/ienim_poselenie" target="_blank">группе ВК "Поселение ИЕНиМ УрФУ"</a></li>
            </ul>
           <h3>📦 Что уже есть в любом общежитии</h3>
            <ul>
                <li>🛏 Кровать, матрас, подушка, одеяло</li>
                <li>📚 Стол, стул, тумбочка, шкаф</li>
                <li>🍳 Электроплита, духовка</li>
                <li>🧊 Холодильник (если остался от предыдущих)</li>
            </ul>
            <h4 style="margin-top: 1rem;">Дополнительно в НВК:</h4>
            <ul>
                <li>🚿 Коврик для душа, шторки, мыльницы</li>
                <li>📌 Стена для заметок</li>
                <li>📦 Маленький холодильник</li>
                <li>☕ Микроволновка, чайник</li>
            </ul>

            <h3>🧳 Что взять с собой</h3>
            <ul>
                <li>🛏 Постельное бельё (если хотите своё)</li>
                <li>🍽 Посуду, кружку, ложки-вилки</li>
                <li>🧴 Средства гигиены</li>
                <li>👕 Одежду (включая тёплую)</li>
                <li>🧹 Метлу, швабру</li>
                <li>🔥 Обогреватель (зимой пригодится)</li>
                <li>🧲 Утюг / отпариватель (по ситуации)</li>
                <li>🍳 Кастрюли, сковородки</li>
                <li>📖 Книгу рецептов (можете попросить у мамы или бабушки). Тырить еду у других не особо желательно, а самому что-то готовить надо)</li>
                <li>💵 Деньги (5к залог + оплата)</li>
                <li>📄 Документы (список ниже)</li>
            </ul>
            
           <h3>⚠️ Важное по быту</h3>
            <ul>
                <li>В общежитиях №4 и №6 тараканов нет, если убирать за собой</li>
                <li>Не храните тухлую еду и не кормите насекомых</li>
                <li>Чистота — залог нормальной жизни и отсутствия проблем</li>
            </ul>
        `,
        actions: []
    },

    studies: {
        icon: 'fas fa-book',
        title: 'Организация учебы',
        subtitle: 'Как устроен учебный процесс',
        content: `
            <h3>📅 Расписание занятий</h3>
            <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; margin-bottom: 2rem;">
                <ul style="margin: 0; padding-left: 1rem;">
                    <li><strong>Учебная неделя:</strong> Понедельник - суббота</li>
                    <li><strong>Количество пар:</strong> 3-4 пары в день</li>
                    <li><strong>Длительность пары:</strong> 1 час 30 минут</li>
                    <li><strong>Перерывы:</strong> 10 минут между парами</li>
                    <li><strong>Большой перерыв:</strong> 40 минут на обед</li>
                </ul>
            </div>

            <h3>🎯 Типы занятий</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">📖 Лекции</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Теоретический материал в больших аудиториях</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">✏️ Семинары</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Решение задач в группах по 20 человек</p>
                </div>
                <div style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem;">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">💻 Лабораторные работы</h4>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Практические занятия по программированию</p>
                </div>
            </div>

            <h3>📝 Чек-лист того, что нужно для учёбы</h3>
            <ul>
                <li>Понимание того, что на пары ходить надо, иначе вы потом ничего не поймёте. Будьте готовы к тому, что вам надо будет посидеть разобраться, позадавать вопросы, спросить что-то у кураторов или одногруппников. Объединяйтесь и помогайте друг другу!</li>
                <li>Ноутбук или ПК (С ноутбуком гораздо удобнее, но если нет такой возможности, то ПК тоже подойдёт) [Если нет возможности купить и ноут, и пк, то на МатМехе есть аудитории с компами, где тоже можно что-то поделать]</li>
                <li>Место, где вы будете вести конспекты (Тетради, граф. планшет)</li>
                <li>То, чем вы будете писать конспекты (ручки, карандаши, фломастеры)</li>
                <li>Рюкзак/Сумку</li>
                <li>На некоторую физ-ру надо будет покупать какие-то атрибуты (шапочка на плавание и т.п)</li>
            </ul>

            <h3>💡 Полезные советы для учебы</h3>
            <ul>
                <li>Не пропускайте лекции - материал не самый простой</li>
                <li>Решайте задачи регулярно, не накапливайте долги</li>
                <li>Общайтесь с преподавателями, задавайте вопросы</li>
                <li>Объединятесь на сессию с одногрппниками</li>
            </ul>
        `,
        actions: []
    },

    city: {
        icon: 'fas fa-map-marked-alt',
        title: 'Гид по Екатеринбургу',
        subtitle: 'Полезная информация о городе',
        content: `
        <h3>🍽 Где поесть</h3>
        <h4>📍 Рядом с университетом</h4>
        <ul>
            <li><strong>Столовая на Тургенева, 4:</strong> Бюджетно, можно взять с собой, но бывают очереди</li>
            <li><strong>Subway (Тургенева 1):</strong> не самый бюджетный вариант, но максимально близкий к ВУЗу.</li>
            <li><strong>Скороед (пр. Ленина 53):</strong> вкусные блины, по цене 200р = 200гр.</li>
            <li><strong>Жара (пр. Ленина 44):</strong> Шаурма, быстро и вкусно</li>
        </ul>

        <h4>🏠 Рядом с общагами</h4>
        <ul>
            <li><strong>Магнит (Фурманова 37):</strong> Вкусные салаты</li>
            <li><strong>Rostic’s (бывший KFC, 8 Марта 75А):</strong> Перекусить</li>
            <li>Первый заказ в Яндекс Лавке со скидкой 50% - имба)</li>
        </ul>

        <h4>❤️ Если хочешь сводить кого-то на свидание</h4>
        <ul>
            <li><strong>Скворечник (Толмачёва 21):</strong> Уютная кофейня</li>
            <li><strong>Тануки (Карла Либкнехта23):</strong> Средний чек: 800-1300</li>
            <li><strong>Поль Бейкери / Пышки (Карла Либкнехта 23 / Толмачёва 16):</strong> Классика</li>
            <li><strong>Хочу пури / Дюжина (Гринвич):</strong> Грузинская/современная кухня</li>
            <li><strong>IL Патио (Московская 27):</strong> Средний чек 1000–1500 ₽</li>
            <li><strong>Большой грузинский (Олимпийская наб., 7):</strong> Для тех, кто ценит хинкали и хачапури</li>
        </ul>
        
       <h3>🌳 Где погулять</h3>
        <ul>
            <li><strong>Зелёная роща:</strong> Красиво, спортплощадки, спокойно</li>
            <li><strong>ЦПКиО:</strong> Парк с аттракционами, летом — открытый кинотеатр</li>
            <li><strong>Каменные палатки:</strong> Набережная, вид на воду, чисто и уютно</li>
            <li><strong>Парк XXII партсъезда:</strong> Велодорожки, теннис, не скучно</li>
            <li><strong>Парк 50-летия ВЛКСМ ("Собачий парк"):</strong> Тихо, зелено, есть место для шашлыков</li>
            <li><strong>Харитоновский сад:</strong> Отличное место для фоточек</li>
        </ul>

         <h3>🎭 Музеи и культура</h3>
            <ul>
                <li><strong>Ельцин Центр:</strong> Вид на Макаровский ЖК, лекции, выставки</li>
                <li><strong>Музей Б.Н. Ельцина:</strong> Народной Воли, 49 — билет 300 ₽</li>
                <li><strong>Эрмитаж-Урал (Вайнера 11):</strong> Билет — 300 ₽</li>
                <li><strong>Музей камнерезного искусства (Ленина 37):</strong> Билет — 150 ₽</li>
                <li><strong>Музей изобразительных искусств (Воеводина 5):</strong> 100–250 ₽</li>
                <li><strong>Музей Царской семьи (Толмачёва 34А):</strong> Часто бесплатно</li>
                <li><strong>Дом Метенкова (Тургенева 15):</strong> Фотомузей, 50–200 ₽</li>
                <li><strong>Россия — моя история:</strong> Интерактивный музей, билет — 200 ₽</li>
            </ul>
         <h3>🎉 Куда потусить</h3>
        <ul>
            <li><strong>EverJazz (Тургенева 22):</strong> Живая музыка, бар, атмосфера</li>
            <li><strong>Парковка у ГУКа:</strong> Автозвук, ночные посиделки (пт-вс)</li>
            <li><strong>Вайнера:</strong> Пешеходная улица, тусовки, музыка</li>
            <li><strong>Плотинка:</strong> Поющие фонтаны, красивый вид и отдых у воды</li>
        </ul>

        `,
        actions: []
    },

    links: {
        icon: 'fas fa-link',
        title: 'Полезные ссылки',
        subtitle: 'Важные ресурсы и сервисы',
        content: `
            <h3>🏛️ Официальные ресурсы УрФУ</h3>
            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <a href="https://urfu.ru" target="_blank" style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; color: var(--primary-light); text-decoration: none; display: flex; align-items: center; gap: 1rem; transition: all 0.3s ease;">
                    <i class="fas fa-university" style="font-size: 1.25rem;"></i>
                    <div>
                        <div style="font-weight: 600;">Официальный сайт УрФУ</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">urfu.ru</div>
                    </div>
                </a>
                <a href="https://istudent.urfu.ru" target="_blank" style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; color: var(--primary-light); text-decoration: none; display: flex; align-items: center; gap: 1rem; transition: all 0.3s ease;">
                    <i class="fas fa-user-graduate" style="font-size: 1.25rem;"></i>
                    <div>
                        <div style="font-weight: 600;">Личный кабинет студента</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">study.urfu.ru</div>
                    </div>
                </a>
            </div>

            <h3>💬 Социальные сети и чаты</h3>
            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <a href="https://vk.com/mmabiturient" target="_blank" style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; color: var(--primary-light); text-decoration: none; display: flex; align-items: center; gap: 1rem;">
                    <i class="fab fa-vk" style="font-size: 1.25rem;"></i>
                    <div>
                        <div style="font-weight: 600;">ВК группа абитуриентов мат-меха</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">vk.com/mmabiturient</div>
                    </div>
                </a>
                <a href="https://t.me/mmpriemchat" target="_blank" style="padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 0.75rem; color: var(--primary-light); text-decoration: none; display: flex; align-items: center; gap: 1rem;">
                    <i class="fab fa-telegram" style="font-size: 1.25rem;"></i>
                    <div>
                        <div style="font-weight: 600;">Telegram чат абитуриентов</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">t.me/mmpriemchat</div>
                    </div>
                </a>
            </div>

        `,
        actions: []
    }
}

// Curators data
const curatorsData = [
    { name: "Саша Петренёв", group: "МТ-101 (МЕН-ххх)", telegram: "https://t.me/cryokinesis", avatar: "images/students/polugus.jpeg", online: true },
    { name: "Иван Горбунов", group: "MT-102 (МЕН-ххх)", telegram: "https://t.me/Ivan_228777", avatar: "images/students/vanyamt.jpg", online: false },
    { name: "Инна Артёменко", group: "ПМ-101 (МЕН-ХХХ)", telegram: "https://t.me/keepcalmoh", avatar: "images/students/inna.jpg", online: true },
    { name: "Иван Барвин", group: "МХ-101 (МЕН-ХХХ)", telegram: "https://t.me/istdo356pqawr", avatar: "ДК", online: true },
    { name: "Таня Южакова", group: "КН-101 (МЕН-ХХХ)", telegram: "https://t.me/kaknebitmolokom", avatar: "images/students/tanyaezh.jpg", online: false },
    { name: "Антон Новиков", group: "КН-102 (МЕН-ХХХ)", telegram: "https://t.me/Anton_N0v", avatar: "images/students/anton_nov.jpg", online: true },
    { name: "Инесса Назарова", group: "КН-103 (МЕН-ХХХ)", telegram: "https://t.me/In_Assa", avatar: "images/students/inessa.jpg", online: true },
    { name: "Анна Хайрулина", group: "МО-101 (МЕН-ХХХ)", telegram: "https://t.me/annabale04", avatar: "images/students/annamo.jpg", online: true },
    { name: "Артём Островеров", group: "МО-102 (МЕН-ХХХ)", telegram: "https://t.me/poliwerrr", avatar: "images/students/poliwer.jpg", online: true },
    { name: "Богдан Щедров", group: "ФТ-101 (МЕН-ХХХ)", telegram: "https://t.me/ronodar", avatar: "images/students/ronodar.jpg", online: true },
    { name: "Ангелина Шманцарь", group: "ФТ-102 (МЕН-ХХХ)", telegram: "https://t.me/BigSquid", avatar: "images/students/lina.jpg", online: true },
    { name: "Дима Сенников", group: "ФТ-103 (МЕН-ХХХ)", telegram: "https://t.me/demitry23", avatar: "images/students/sennikov.jpg", online: true },
    { name: "Костя Стахеев", group: "ФТ-104 (МЕН-ХХХ)", telegram: "https://t.me/ryuk1245", avatar: "images/students/kostyafiit.jpg", online: true },
    { name: "Дима Свечников", group: "КБ-101 (МЕН-ХХХ)", telegram: "https://t.me/Zakateeek", avatar: "images/students/zakateeek.jpg", online: true },
    { name: "Карина Пахолкова", group: "КБ-102 (МЕН-ХХХ)", telegram: "https://t.me/karinapakholkova", avatar: "images/students/karina.jpeg", online: true }
];

// Function to open curators popup
function openCuratorsPopup() {
    const modal = document.getElementById('universal-modal');
    const modalContent = document.getElementById('modal-content');

    const curatorsGrid = curatorsData.map(curator => `
        <div class="curator-card">
            <div class="curator-photo">
                <img src="${curator.avatar}?height=80&width=80" alt="${curator.name}">
            </div>
            <div class="curator-info">
                <h3 class="curator-name">${curator.name}</h3>
                <div class="curator-group">${curator.group}</div>
                <button class="telegram-btn" onclick="window.open('${curator.telegram}', '_blank')">
                    <i class="fab fa-telegram"></i>
                    <span>Написать в Telegram</span>
                </button>
            </div>
        </div>
    `).join('');

    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-header-content">
                <div class="modal-icon">
                    <i class="fas fa-users"></i>
                </div>
                <div>
                    <h2 class="modal-title">Кураторы групп</h2>
                    <p class="modal-subtitle">Выберите куратора своей группы</p>
                </div>
            </div>
            <button class="modal-close" onclick="closePopup()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="modal-body">
            <div class="curators-grid">
                ${curatorsGrid}
            </div>
        </div>
    `;

    modal.classList.add('active', 'curators-modal');
    document.body.style.overflow = 'hidden';
}
// Function to open popup with content from templates
function openPopup(templateKey) {
    const modal = document.getElementById('universal-modal');
    const modalContent = document.getElementById('modal-content');

    if (!popupTemplates[templateKey]) {
        showToast('Контент не найден', 'fas fa-exclamation-circle');
        return;
    }

    const template = popupTemplates[templateKey];

    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-header-content">
                <div class="modal-icon">
                    <i class="${template.icon}"></i>
                </div>
                <div>
                    <h2 class="modal-title">${template.title}</h2>
                    <p class="modal-subtitle">${template.subtitle}</p>
                </div>
            </div>
            <button class="modal-close" onclick="closePopup()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="modal-body">
            ${template.content}
        </div>
        <div class="modal-actions">
            ${template.actions.map(action => `
                <button class="modal-btn modal-btn-${action.type}" onclick="handleModalAction('${action.action}', '${action.text}')">
                    ${action.text}
                </button>
            `).join('')}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closePopup() {
    const modal = document.getElementById('universal-modal')
    modal.classList.remove('active', 'curators-modal')
    document.body.style.overflow = 'auto'
}

function handleModalAction(action, text) {
    if (action === 'close') {
        closePopup();
    } else if (action === 'toast') {
        closePopup();
    }
}

// Toast notification
function showToast(message, icon = 'fas fa-info-circle') {
    const toast = document.getElementById('toast')
    const toastIcon = toast.querySelector('.toast-icon')
    const toastMessage = toast.querySelector('.toast-message')

    toastIcon.className = `toast-icon ${icon}`
    toastMessage.textContent = message

    toast.classList.add('active')

    setTimeout(() => {
        toast.classList.remove('active')
    }, 4000)
}

function closeToast() {
    const toast = document.getElementById('toast')
    toast.classList.remove('active')
}

// Initialize AOS (Animate On Scroll)
function initAOS() {
    const elements = document.querySelectorAll("[data-aos]")

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aos-animate")
                }
            })
        },
        {
            threshold: 0.1,
        }
    )

    elements.forEach((el) => observer.observe(el))
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('universal-modal')
    const modalContent = document.querySelector('.modal-content')

    if (modal.classList.contains('active') && !contains(event.target)) {
        closePopup()
    }
})

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup()
        closeToast()
    }
})

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMathParticles()
    initAOS()

    // Add scroll animations to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1'
                entry.target.style.transform = 'translateY(0)'
            }
        })
    }, observerOptions)

    document.querySelectorAll('.curator-card, .event-card, .guide-card').forEach(card => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(card)
    })
})
