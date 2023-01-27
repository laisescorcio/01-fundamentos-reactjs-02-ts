# How to run the project

- yarn install || npm install
- yarn dev (necessary reloaders)
- yarn run dev || npm run dev (watching the modifications)

## Aplications used
- [Node](https://nodejs.org/en/)
- [Vite](https://vitejs.dev/guide/) (it was runned *yarn create @vite* command to create this project)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) or [npm](https://docs.npmjs.com/cli/v6/commands/npm-install)
- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)

## Good practices of this project
### React
- Used Named Exports (instead of Default Exports); 
- When it pass a handle function by prop, it used the prefix 'on'. For exemplo: onDeleteComment={deleteComment}.
- To name React component files you must assign a capital letter to avoid confusion with the html tag

### Style
- Scoped CSS (define only determined component to apply the css)
- CSS Modules (to define classNames locally, not globally, to not affect other components)
- Defined colors roots;
- Used [Tailwind Patterns](https://tailwindcss.com/docs/customizing-colors#default-color-palette) to define the name of color variables;
- Used relative measurement units to facilitate accessibility (unless border for exemple or elements doesn't need adaptability ).

### Figma
Link: https://www.figma.com/community/file/1113573231685349036



# [Project Link](https://feed-rocketseat2023.vercel.app/)

