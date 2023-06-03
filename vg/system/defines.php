<?php

//Почта администратора, кому будут приходить письма
define("_ADMIN_EMAIL_", "pyrogallery.lt@yahoo.com");
// pyrogallery.lt@yahoo.com

/*
 * Настройки почты по умолчанию
 */
define('_MAIL_TYPE_', 'SMTP');
define('_SMTP_HOST_', 'smtp.gmail.com');
define('_SMTP_LOGIN_', 'pyrogalleryart@gmail.com');
define('_SMTP_PASSWORD_', 'fsDXS3sfS342ssda');
define('_SMTP_SECURE_', 'ssl'); // tls
define('_SMTP_PORT_', 465);

/*
 * Настрйоки ReCaptha
 */
define('_RECAPTCHA_', true); // Если включить CAPTCHA то true, если отключить то false
define('_PRIVATE_KEY_', '6LcL4YUbAAAAAIygO2E6I9KL1PKCFH5osjMzz7ss'); //секретный ключ
define('_RESPONCE_NAME_', 'g-recaptcha-response');