FROM node:18-alpine

WORKDIR /app

# Установка зависимостей backend
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Установка зависимостей frontend
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Копирование исходного кода
COPY backend/ ./backend/
COPY frontend/ ./frontend/

# Сборка frontend
RUN cd frontend && npm run build

# Открытие портов
EXPOSE 10000
EXPOSE 8081

# Запуск приложения
CMD ["node", "backend/index.js"]
