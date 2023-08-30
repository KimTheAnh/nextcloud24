OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Не вдалося очистити відображення.",
    "Failed to delete the server configuration" : "Не вдалося вилучити конфігурацію сервера",
    "Invalid configuration: Anonymous binding is not allowed." : "Неправильна конфігурація. Анонімне приєднання не дозволено.",
    "Valid configuration, connection established!" : "Правильна конфігурація, з'єднання встановлено!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Правильна конфігурація, але приєднання не вдалося. Будь ласка, перевірте налаштування сервера та дані авторизації.",
    "Invalid configuration. Please have a look at the logs for further details." : "Неправильна конфігурація. Перевірте журнал для докладної інформації.",
    "No action specified" : "Ніяких дій не вказано",
    "No configuration specified" : "Немає конфігурації",
    "No data specified" : "Немає даних",
    " Could not set configuration %s" : "Не вдалося встановити конфігурацію %s",
    "Action does not exist" : "Дія не існує",
    "Renewing …" : "Оновлення...",
    "Very weak password" : "Дуже слабкий пароль",
    "Weak password" : "Слабкий пароль",
    "So-so password" : "Такий собі пароль",
    "Good password" : "Добрий пароль",
    "Strong password" : "Надійний пароль",
    "The Base DN appears to be wrong" : "Основний DN неправильний",
    "Testing configuration…" : "Тестування конфігурації...",
    "Configuration incorrect" : "Невірна конфігурація",
    "Configuration incomplete" : "Конфігурація неповна",
    "Configuration OK" : "Конфігурація OK",
    "Select groups" : "Оберіть групи",
    "Select object classes" : "Виберіть класи об'єктів",
    "Please check the credentials, they seem to be wrong." : "Перевірте дані авторизації, можливо, що вони неправильні.",
    "Please specify the port, it could not be auto-detected." : "Будь ласка, вкажіть порт, він не може бути визначений автоматично.",
    "{nthServer}. Server" : "{nthServer}. Сервер",
    "Do you really want to delete the current Server Configuration?" : "Дійсно вилучити поточну конфігурацію сервера ?",
    "Confirm Deletion" : "Підтвердіть вилучення",
    "Mappings cleared successfully!" : "Відображення успішно очищенні!",
    "Error while clearing the mappings." : "Помилка при очищенні відображень.",
    "Select attributes" : "Виберіть атрибути",
    "User found and settings verified." : "Користувача знайдено і налаштування перевірені.",
    "LDAP User backend" : "Інтерфейс керування користувачами LDAP",
    "Your password will expire tomorrow." : "Дія вашого пароля завершується завтра.",
    "Your password will expire today." : "Дія вашого пароля завершується сьогодні.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Дія вашого пароля завершується через %n день.","Дія вашого пароля завершується через %n дні.","Дія вашого пароля завершується через %n днів.","Дія вашого пароля завершується через %n днів."],
    "_%s group found_::_%s groups found_" : [" %s група знайдена "," %s груп знайдено ","%s груп знайдено ","%s груп знайдено "],
    "_%s user found_::_%s users found_" : ["%s користувача знайдено","%s користувачів знайдено","%s користувачів знайдено","%s користувачів знайдено"],
    "Could not find the desired feature" : "Не вдалося знайти потрібну функцію",
    "Invalid Host" : "Невірний Host",
    "LDAP user and group backend" : "Інтерфейс керування користувачами та групами LDAP",
    "Test Configuration" : "Тестове налаштування",
    "Help" : "Допомога",
    "Groups meeting these criteria are available in %s:" : "Групи, що відповідають цим критеріям доступні в %s:",
    "Only from these groups:" : "Лише з цих груп:",
    "Search groups" : "Пошук груп",
    "Available groups" : "Доступні групи",
    "Selected groups" : "Обрані групи",
    "LDAP Filter:" : "LDAP фільтр:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Фільтр визначає, які LDAP групи повинні мати доступ до %s примірника.",
    "Verify settings and count the groups" : "Перевірити налаштування та порахувати групи",
    "Other Attributes:" : "Інші Атрибути:",
    "Test Loginname" : "Тестове ім'я при вході",
    "Verify settings" : "Перевірити налаштування",
    "%s. Server:" : "%s. Сервер:",
    "Add a new configuration" : "Додати нову конфігурацію",
    "Host" : "Хост",
    "Port" : "Порт",
    "Detect Port" : "Визначити Порт",
    "User DN" : "DN Користувача",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN клієнтського користувача для прив'язки, наприклад: uid=agent,dc=example,dc=com. Для анонімного доступу, залиште DN і Пароль порожніми.",
    "Password" : "Пароль",
    "For anonymous access, leave DN and Password empty." : "Для анонімного доступу, залиште DN і Пароль порожніми.",
    "Save Credentials" : "Зберегти дані авторизації",
    "One Base DN per line" : "Один Base DN на рядок",
    "You can specify Base DN for users and groups in the Advanced tab" : "Ви можете задати Базовий DN для користувачів і груп на вкладинці Додатково",
    "Detect Base DN" : "Визначити основний DN",
    "Test Base DN" : "Тест основного DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Уникати автоматичні запити LDAP. Краще для великих установок, але вимагає деякого LDAP знання.",
    "Manually enter LDAP filters (recommended for large directories)" : "Вручну введіть фільтри LDAP (рекомендується для великих каталогів)",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Фільтр визначає, які користувачі LDAP повинні мати доступ до примірника %s.",
    "Verify settings and count users" : "Перевірити налаштування та порахувати користувачів",
    "Saving" : "Збереження",
    "Back" : "Назад",
    "Continue" : "Продовжити",
    "Please renew your password." : "Будь ласка, оновіть ваш пароль.",
    "An internal error occurred." : "Виникла внутрішня помилка.",
    "Please try again or contact your administrator." : "Будь ласка, спробуйте ще раз або зверніться до адміністратора.",
    "Current password" : "Поточний пароль",
    "New password" : "Новий пароль",
    "Renew password" : "Оновити пароль",
    "Wrong password." : "Невірний пароль.",
    "Cancel" : "Скасувати",
    "Server" : "Сервер",
    "Users" : "Користувачі",
    "Login Attributes" : "Атрибуту входу",
    "Groups" : "Групи",
    "Expert" : "Експерт",
    "Advanced" : "Додатково",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Увага:</ b> Потрібний модуль PHP LDAP не встановлено, базова програма працювати не буде. Будь ласка, зверніться до системного адміністратора, щоб встановити його.",
    "Connection Settings" : "Налаштування З'єднання",
    "Configuration Active" : "Налаштування Активне",
    "When unchecked, this configuration will be skipped." : "Якщо \"галочка\" знята, ця конфігурація буде пропущена.",
    "Backup (Replica) Host" : "Сервер для резервних копій",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Вкажіть додатковий резервний сервер. Він повинен бути копією головного LDAP/AD сервера.",
    "Backup (Replica) Port" : "Порт сервера для резервних копій",
    "Disable Main Server" : "Вимкнути Головний Сервер",
    "Only connect to the replica server." : "Підключити тільки до сервера реплік.",
    "Turn off SSL certificate validation." : "Вимкнути перевірку SSL сертифіката.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Не рекомендується, використовувати його тільки для тестування!\nЯкщо з'єднання працює лише з цією опцією, імпортуйте SSL сертифікат LDAP сервера у ваший %s сервер.",
    "Cache Time-To-Live" : "Час актуальності Кеша",
    "in seconds. A change empties the cache." : "в секундах. Зміна очищує кеш.",
    "Directory Settings" : "Налаштування каталогу",
    "User Display Name Field" : "Поле, яке відображає Ім'я Користувача",
    "The LDAP attribute to use to generate the user's display name." : "Атрибут LDAP, який використовується для генерації імен користувачів.",
    "Base User Tree" : "Основне Дерево Користувачів",
    "One User Base DN per line" : "Один Користувач Base DN на рядок",
    "User Search Attributes" : "Пошукові Атрибути Користувача",
    "Optional; one attribute per line" : "Додатково; один атрибут на рядок",
    "Group Display Name Field" : "Поле, яке відображає Ім'я Групи",
    "The LDAP attribute to use to generate the groups's display name." : "Атрибут LDAP, який використовується для генерації імен груп.",
    "Base Group Tree" : "Основне Дерево Груп",
    "One Group Base DN per line" : "Одна Група Base DN на рядок",
    "Group Search Attributes" : "Пошукові Атрибути Групи",
    "Group-Member association" : "Асоціація Група-Член",
    "Nested Groups" : "Вкладені Групи",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "При включенні, групи, які містять групи підтримуються. (Працює тільки якщо атрибут члена групи містить DNS.)",
    "Paging chunksize" : "Розмір підкачки",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Підкачка використовується для сторінкових пошуків LDAP, які можуть повертати громіздкі результати кількісті користувачів або груп. (Установка його 0 відключає вивантаженя пошуку LDAP в таких ситуаціях.)",
    "Special Attributes" : "Спеціальні Атрибути",
    "Quota Field" : "Поле Квоти",
    "Quota Default" : "Квота за замовчанням",
    "Email Field" : "Поле E-mail",
    "User Home Folder Naming Rule" : "Правило іменування домашньої теки користувача",
    "Internal Username" : "Внутрішня Ім'я користувача",
    "Internal Username Attribute:" : "Внутрішня Ім'я користувача, Атрибут:",
    "Override UUID detection" : "Перекрити вивід UUID ",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "За замовчуванням ownCloud визначає атрибут UUID автоматично. Цей атрибут використовується для того, щоб достовірно ідентифікувати користувачів і групи LDAP. Також на підставі атрибута UUID створюється внутрішнє ім'я користувача, якщо вище не вказано інакше. Ви можете перевизначити це налаштування та вказати свій атрибут за вибором. Ви повинні упевнитися, що обраний вами атрибут може бути вибраний для користувачів і груп, а також те, що він унікальний. Залиште поле порожнім для поведінки за замовчуванням. Зміни вступлять в силу тільки для нових підключених (доданих) користувачів і груп LDAP.",
    "UUID Attribute for Users:" : "UUID Атрибут для користувачів:",
    "UUID Attribute for Groups:" : "UUID Атрибут для груп:",
    "Username-LDAP User Mapping" : "Картографія Імен користувачів-LDAP ",
    "Clear Username-LDAP User Mapping" : "Очистити картографію Імен користувачів-LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Очистити картографію Імен груп-LDAP"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
