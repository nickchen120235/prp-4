# PRP Assignment 4
Demo: https://nickchen120235.github.io/prp-4
## Goal
> In this assignment, you are required to design and implement an online interactive visualization for a chosen dataset.
## Used Library
- [TypeScript](https://www.typescriptlang.org/) [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Recharts](http://recharts.org/)
## File Structure
Source code are under `./src` folder
- `App.tsx`: Main file for overall layout
- `/components`: Graphs and dialogs are here
- `/utils`: Data and tools
  - `countryCode.tsx`: A map between country code and country name
  - `data.tsx`: The original data
  - `math.tsx`: Correlation function is here
  - `seriesCode.tsx`:  A map between series code and series name
  - `styles.tsx`: Styling using toolkit from Material-UI
## Developing
- Clone this project: <code>git clone https://github.com/nickchen120235/prp-4.git</code>
- Install required libraries: <code>npm install</code>
- Run the development server: <code>npm start</code> then visit http://localhost:3000
- Create production build: <code>npm run build</code>