## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
|   |   ├── Button.tsx
|   |   ├── DarkMode.tsx
|   |   ├── ErrorComponent.tsx
|   |   ├── ErrorParagraph.tsx
|   |   ├── NotFound.tsx
│   │   └── PageHeader.tsx
│   ├── constants/
│   |   └── constants.ts
|   ├── features/
|   |   ├── expenses/
|   |   |   ├── Expense.tsx
|   |   |   ├── ExpenseForm.tsx
│   |   |   └── ExpenseList.tsx
|   |   ├── tasks/
|   |   |   ├── Task.tsx
|   |   |   ├── TaskForm.tsx
│   |   |   └── TaskTable.tsx
|   ├── layouts/
|   |   ├── Layout.tsx
│   |   └── Navbar.tsx
|   ├── pages/
|   |   ├── expenses/
|   |   |   ├── ExpenseListPage.tsx
│   |   |   └── NewExpensePage.tsx
|   |   ├── tasks/
|   |   |   ├── NewTaskPage.tsx
│   |   |   └── TaskListPage.tsx
│   |   └── ErrorPage.tsx
|   ├── utils/
│   |   └── currencyFormatter.ts
|   ├── main.tsx
|   ├── routes.tsx
|   ├── store.ts
│   └── styles.css
└── node_moduels
```

## Installation

All the commands below are run from the root of the project, from a terminal:
|Command|Action|
|:-|:-|
|yarn|Installs dependencies|
|yarn dev| Starts local dev server at localhost:5173|
|yarn build | Build your production site to ./dist/
|yarn preview | Preview your build locally, before deploying|
