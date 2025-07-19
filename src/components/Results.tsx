import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Paper,
  LinearProgress,
  Chip,
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent! You're a Spark expert!";
    if (percentage >= 80) return "Great job! You have a solid understanding of Spark!";
    if (percentage >= 70) return "Good work! You know the basics of Spark!";
    if (percentage >= 60) return "Not bad! Keep learning about Spark!";
    return "Keep studying! Spark has a lot to offer!";
  };

  const getScoreColor = () => {
    if (percentage >= 90) return 'success';
    if (percentage >= 80) return 'success';
    if (percentage >= 70) return 'warning';
    if (percentage >= 60) return 'warning';
    return 'error';
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Quiz Complete!
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          {getScoreMessage()}
        </Typography>
      </Paper>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" gutterBottom color={getScoreColor()}>
              {score}/{totalQuestions}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {percentage.toFixed(1)}%
            </Typography>
            
            <Box sx={{ width: '100%', mb: 3 }}>
              <LinearProgress 
                variant="determinate" 
                value={percentage} 
                sx={{ 
                  height: 10, 
                  borderRadius: 5,
                  backgroundColor: 'grey.200',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: getScoreColor() === 'success' ? 'success.main' : 
                                   getScoreColor() === 'warning' ? 'warning.main' : 'error.main'
                  }
                }} 
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
              <Chip 
                icon={<CheckCircle />} 
                label={`Correct: ${score}`} 
                color="success" 
                variant="outlined"
              />
              <Chip 
                icon={<Cancel />} 
                label={`Incorrect: ${totalQuestions - score}`} 
                color="error" 
                variant="outlined"
              />
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button 
              variant="contained" 
              size="large" 
              onClick={onRestart}
              sx={{ px: 4, py: 1.5 }}
            >
              Take Quiz Again
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Results; 