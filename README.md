# SparkQuiz - Apache Spark Learning Quiz

A React-based interactive quiz application designed to test and improve your knowledge of Apache Spark concepts. Built with TypeScript, Material-UI, and modern React practices.

## Features

- **Interactive Quiz Interface**: Answer multiple-choice questions about Apache Spark
- **Real-time Feedback**: Get immediate feedback on your answers with detailed explanations
- **Progress Tracking**: See your current score and question progress
- **Results Page**: View your final score with performance analysis and motivational feedback
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Screenshots

### Quiz Results Page
![Results Screenshot](spark-quiz/src/results.png)

*The results page shows your final score, percentage, and performance breakdown with the option to retake the quiz.*

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SparkQuiz.git
   cd SparkQuiz/spark-quiz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Material-UI (MUI)** - UI component library
- **Create React App** - Build tool and development environment

## Project Structure

```
spark-quiz/
├── src/
│   ├── components/
│   │   ├── Quiz.tsx          # Main quiz component
│   │   └── Results.tsx       # Results page component
│   ├── data/
│   │   └── sparkQuestions.ts # Quiz questions and answers
│   ├── types/
│   │   └── quiz.ts          # TypeScript type definitions
│   └── App.tsx              # Main application component
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Learn More

To learn more about the technologies used:

- [React documentation](https://reactjs.org/)
- [TypeScript documentation](https://www.typescriptlang.org/)
- [Material-UI documentation](https://mui.com/)
- [Apache Spark documentation](https://spark.apache.org/docs/latest/)
