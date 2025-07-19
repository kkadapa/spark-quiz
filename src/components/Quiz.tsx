import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Alert,
} from '@mui/material';
import { Question, QuizState } from '../types/quiz';
import { sparkQuestions } from '../data/sparkQuestions';
import Results from './Results';

const Quiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showExplanation: false,
    isAnswered: false,
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuestion: Question = sparkQuestions[quizState.currentQuestionIndex];

  const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(Number(event.target.value));
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setQuizState(prev => ({
      ...prev,
      score: correct ? prev.score + 1 : prev.score,
      showExplanation: true,
      isAnswered: true,
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < sparkQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        showExplanation: false,
        isAnswered: false,
      }));
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  const isQuizComplete = quizState.currentQuestionIndex === sparkQuestions.length - 1 && quizState.isAnswered;

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showExplanation: false,
      isAnswered: false,
    });
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  // Show results page if quiz is complete
  if (isQuizComplete) {
    return (
      <Results 
        score={quizState.score}
        totalQuestions={sparkQuestions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Apache Spark Quiz
        </Typography>
        <Typography variant="h6">
          Question {quizState.currentQuestionIndex + 1} of {sparkQuestions.length}
        </Typography>
        <Typography variant="h6">
          Score: {quizState.score}
        </Typography>
      </Paper>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {currentQuestion.question}
          </Typography>

          <FormControl component="fieldset">
            <RadioGroup
              value={selectedAnswer}
              onChange={handleAnswerSelect}
            >
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={option}
                  disabled={quizState.isAnswered}
                  sx={{
                    ...(quizState.isAnswered && index === currentQuestion.correctAnswer && {
                      color: 'success.main',
                      fontWeight: 'bold',
                    }),
                    ...(quizState.isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && {
                      color: 'error.main',
                    }),
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {quizState.showExplanation && (
            <Box sx={{ mt: 2 }}>
              <Alert severity={isCorrect ? "success" : "error"} sx={{ mb: 2 }}>
                {isCorrect ? "Correct!" : "Incorrect!"}
              </Alert>
              <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
                <Typography variant="body1">
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </Typography>
              </Box>
            </Box>
          )}

          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            {!quizState.isAnswered ? (
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </Button>
            ) : (
              <>
                {quizState.currentQuestionIndex < sparkQuestions.length - 1 ? (
                  <Button variant="contained" onClick={handleNext}>
                    Next Question
                  </Button>
                ) : (
                  <Button variant="contained" onClick={handleNext}>
                    See Results
                  </Button>
                )}
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Quiz; 