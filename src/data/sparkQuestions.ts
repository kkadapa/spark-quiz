import { Question } from '../types/quiz';

export const sparkQuestions: Question[] = [
  {
    id: 1,
    question: "What is Apache Spark?",
    options: [
      "A database management system",
      "A distributed computing system",
      "A web server",
      "A programming language"
    ],
    correctAnswer: 1,
    explanation: "Apache Spark is a distributed computing system designed for big data processing and analytics. It provides an interface for programming entire clusters with implicit data parallelism and fault tolerance."
  },
  {
    id: 2,
    question: "Which of the following is NOT a core component of Spark?",
    options: [
      "Spark Core",
      "Spark SQL",
      "Spark Streaming",
      "Spark Database"
    ],
    correctAnswer: 3,
    explanation: "Spark Database is not a core component of Spark. The main components are Spark Core, Spark SQL, Spark Streaming, Spark MLlib, and Spark GraphX."
  },
  {
    id: 3,
    question: "What is the primary data structure in Spark?",
    options: [
      "DataFrame",
      "RDD (Resilient Distributed Dataset)",
      "Dataset",
      "Array"
    ],
    correctAnswer: 1,
    explanation: "RDD (Resilient Distributed Dataset) is the fundamental data structure of Spark. It is an immutable distributed collection of objects that can be processed in parallel."
  },
  {
    id: 4,
    question: "Which of the following is a key feature of Spark?",
    options: [
      "Real-time processing only",
      "Batch processing only",
      "Both batch and real-time processing",
      "Neither batch nor real-time processing"
    ],
    correctAnswer: 2,
    explanation: "Spark supports both batch and real-time processing, making it a versatile big data processing framework."
  },
  {
    id: 5,
    question: "What is the main advantage of Spark over MapReduce?",
    options: [
      "Better UI",
      "In-memory processing",
      "More programming languages support",
      "Better documentation"
    ],
    correctAnswer: 1,
    explanation: "Spark's main advantage over MapReduce is its in-memory processing capability, which makes it significantly faster for iterative algorithms and interactive data analysis."
  }
]; 