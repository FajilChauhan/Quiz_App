export const quizData = {
  oop: {
    title: "Object-Oriented Programming",
    description: "Test your knowledge of OOP concepts",
    questions: [
      {
        id: 1,
        question: "What is a class in OOP?",
        options: ["A blueprint for creating objects", "A type of variable", "A programming language"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is an object in OOP?",
        options: ["A function", "An instance of a class", "A loop structure"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which of these is a principle of OOP?",
        options: ["Encapsulation", "Compilation", "Iteration"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "What does polymorphism mean in OOP?",
        options: ["Many forms", "One form", "No forms"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "Which keyword is used to inherit a class in Java?",
        options: ["implements", "extends", "inherits"],
        correctAnswer: 1
      }
    ]
  },
  dsa: {
    title: "Data Structures & Algorithms",
    description: "Challenge yourself with DSA problems",
    questions: [
      {
        id: 1,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Array"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the best case time complexity of Quick Sort?",
        options: ["O(n log n)", "O(n²)", "O(n)"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "Which data structure is used for BFS?",
        options: ["Stack", "Queue", "Tree"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "What is a linked list?",
        options: ["Array of elements", "Linear data structure with nodes", "Tree structure"],
        correctAnswer: 1
      }
    ]
  },
  dbms: {
    title: "Database Management Systems",
    description: "Test your database knowledge",
    questions: [
      {
        id: 1,
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which is a NoSQL database?",
        options: ["MySQL", "MongoDB", "PostgreSQL"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a primary key?",
        options: ["Unique identifier for a record", "Foreign key reference", "Index column"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "What does ACID stand for?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Array, Consistency, Isolation, Data", "Atomicity, Connection, Isolation, Durability"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "What is normalization?",
        options: ["Organizing data to reduce redundancy", "Adding more tables", "Deleting data"],
        correctAnswer: 0
      }
    ]
  },
  os: {
    title: "Operating Systems",
    description: "Explore OS fundamentals",
    questions: [
      {
        id: 1,
        question: "What is an operating system?",
        options: ["Hardware", "System software managing hardware and software", "Application software"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "What is a process?",
        options: ["Program in execution", "Stored program", "Hardware component"],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "What is the purpose of virtual memory?",
        options: ["Increase RAM physically", "Extend available memory using disk space", "Faster processing"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "What is a deadlock?",
        options: ["Process completion", "Processes waiting indefinitely", "Memory overflow"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Which scheduling algorithm is preemptive?",
        options: ["FCFS", "Round Robin", "SJF non-preemptive"],
        correctAnswer: 1
      }
    ]
  }
};
