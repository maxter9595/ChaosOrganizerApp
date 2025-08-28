CREATE DATABASE IF NOT EXISTS chat_app;
USE chat_app;

CREATE USER IF NOT EXISTS 'chat_user'@'%' IDENTIFIED BY 'chat_password';
GRANT ALL PRIVILEGES ON chat_app.* TO 'chat_user'@'%';
FLUSH PRIVILEGES;
