<?php
// Bu dosyayı web kökünün DIŞINA, fulab-private/config.php olarak kopyalayın.
// PHP 8.2+; SMTP bilgileri Natro panelinizdeki gerçek değerler olmalıdır.
return [
    'origin' => 'https://fulabtr.net', // www kullanıyorsanız tam adresi değiştirin.
    'privacy_ready' => false, // Kurumsal aydınlatma metinleri tamamlandıktan sonra true.
    'smtp_host' => '',
    'smtp_port' => 587,
    'smtp_encryption' => 'tls', // 587/tls veya sağlayıcınızın verdiği 465/ssl.
    'smtp_user' => 'fatih@fulabtr.net',
    'smtp_password' => '',
    'smtp_from' => 'fatih@fulabtr.net',
    'openai_key' => '',
    'openai_model' => '', // Hesabınızda erişilebilir Responses API model kimliği.
    'ai_enabled' => false,
    'ai_daily_limit' => 100, // Site genelinde günlük istek üst sınırı.
];
