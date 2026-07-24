# Портфолио Technical Educator

Персональное портфолио Валерия Сафронова — технического преподавателя и автора образовательных программ по frontend-разработке. Сайт показывает учебные материалы, видеокурсы, презентации и подход к проектированию обучения.

Сайт опубликован на [safronman.github.io](https://safronman.github.io/).

## Технологии

- Next.js 16 и React 19
- TypeScript
- CSS Modules
- Lucide для иконок
- Biome для форматирования и проверок
- GitHub Pages и GitHub Actions для публикации

## Локальный запуск

Требуются Node.js 22+ и pnpm 11.

```bash
pnpm install
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Команды

```bash
pnpm dev      # запустить режим разработки
pnpm build    # собрать статическую production-версию в out/
pnpm start    # запустить production-сервер Next.js
pnpm lint     # проверить код с помощью Biome
pnpm format   # отформатировать файлы
```

## Публикация

Сайт использует статический экспорт Next.js. Workflow [deploy-pages.yml](.github/workflows/deploy-pages.yml) запускается после каждого пуша в `master`:

1. Устанавливает зависимости через pnpm.
2. Собирает сайт в папку `out/`.
3. Публикует результат в GitHub Pages.

Перед первым деплоем в настройках репозитория выберите **Settings → Pages → Source: GitHub Actions**. После этого достаточно отправить изменения в `master`:

```bash
git push origin master
```

## Структура проекта

```text
app/                    страницы, компоненты и metadata Next.js
app/icon.svg            иконка сайта и устанавливаемого приложения
public/                 статические изображения и обложки материалов
.github/workflows/      автоматическая сборка и деплой
```

## Лицензия

Код и материалы предназначены для личного портфолио Валерия Сафронова.
