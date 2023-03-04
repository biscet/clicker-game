# Clicker Game

Первый опыт создания js игры на базе Effector и Electron без использования Canvas.

## Стек разработки

- Фреймфорки: React, Electron
- Бизнес логика: Effector, Patronum, Effector Easy Router
- Стилизация: SCSS
- Сборщики: Craco, Electron Builder
- Линтеры: Встроенные в VSCode (ESLint, Prettier)

## Запуск приложения

Для запуска приложения вам понадобиться менеджер пакетов YARN.

```sh
yarn - установит зависимости
yarn dev:react - для запуска только React приложения
yarn dev - для запуска React и Electron приложения в режиме разработчика
```

## Билд приложения

```sh
yarn build - сбилдит React приложение
yarn package - после билда React можно билдить Electron приложение в оболочках Mac и Windows
or
yarn publish - для билда Electron и последующей публикацией в оболочках Mac и Windows
```

# License: MIT
