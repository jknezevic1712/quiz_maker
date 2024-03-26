// types
import { Question, Quiz } from "../types/api";

export const mockQuizzes: Quiz[] = [
  {
    id: "6ad6ab69-77b2-4453-b7b3-d8f54662d18d",
    name: "General Knowledge",
    questions: [
      {
        id: "92a0023d-36d8-4897-9a40-a56516569e84",
        question: "What is a group of crows called?",
        answer: "A murder",
      },
      {
        id: "8b5a676c-23dc-421d-ad8f-85e64d8fe208",
        question: "How many dots appear on a pair of dice?",
        answer: "42",
      },
      {
        id: "827ad664-1dd3-4508-8f02-e2d8d0e47449",
        question: "Which is the only body part that is fully grown from birth?",
        answer: "Eyes",
      },
      {
        id: "827ad664-1dd3-4508-8b02-e2d8d0e47449",
        question: "What is acrophobia a fear of?",
        answer: "Heights",
      },
      {
        id: "827ad664-1dd3-4508-8a02-e2d8d0e47449",
        question: "What country has the most islands?",
        answer: "Sweden - 270,000",
      },
      {
        id: "827ad664-1dd3-4508-8c02-e2d8d0e47449",
        question: "How many hearts does an octopus have?",
        answer: "3",
      },
    ],
  },
  {
    id: "9c4f2deb-42d3-4166-a6de-e23acdd21f23",
    name: "Geography",
    questions: [
      {
        id: "cda2efdd-f0e6-47b4-bc6b-10a251f9f7f4",
        question:
          "What is the only continent with land in all four hemispheres?",
        answer: "Africa",
      },
      {
        id: "cda2efdd-f0e6-47b4-bc6b-10a351f9f7f4",
        question: "Which river flows through the Grand Canyon?",
        answer: "Colorado River",
      },
      {
        id: "cda2efdd-f0e6-47b4-bc6b-10a451f9f7f4",
        question: "What is the state capital of New York?",
        answer: "Albany",
      },
      {
        id: "cda2efdd-f0e6-47b4-bc6b-10a551f9f7f4",
        question:
          "On what continent would you find the world’s largest desert?",
        answer: "Antarctica",
      },
      {
        id: "cda2efdd-f0e6-47b4-bc6b-10a651f9f7f4",
        question: "What is the capital of Canada?",
        answer: "Ottawa",
      },
      {
        id: "cda2efdd-f0e6-47b4-bc6b-10a751f9f7f4",
        question: "On what continent would you find the city of Baku?",
        answer: "Asia",
      },
    ],
  },
  {
    id: "8813057f-8011-4b44-8dc1-291302c2b374",
    name: "Food & Drink",
    questions: [
      {
        id: "e44d8a2e-044e-4826-bbc2-36c3546f6b3e",
        question:
          "How many measures of Gordon’s Gin are in a Vesper (James Bond) martini?",
        answer: "3",
      },
      {
        id: "961a2435-a6c2-40ad-8764-e7d6f3cb8343",
        question: "Cacio & Pepe is a staple of what Italian city’s cuisine?",
        answer: "Rome",
      },
      {
        id: "961a243f-a6c2-40ad-8764-e7d6f3cb8343",
        question: "Where did sushi originate?",
        answer: "China",
      },
      {
        id: "961a243s-a6c2-40ad-8764-e7d6f3cb8343",
        question: "What is a Beaujolais?",
        answer: "A type of red wine",
      },
      {
        id: "961a243c-a6c2-40ad-8764-e7d6f3cb8343",
        question: "What country drinks the most coffee?",
        answer: "Finland",
      },
      {
        id: "961a243v-a6c2-40ad-8764-e7d6f3cb8343",
        question: "What is the world’s best-selling stout beer?",
        answer: "Guinness",
      },
      {
        id: "961a243b-a6c2-40ad-8764-e7d6f3cb8343",
        question: "What meat is used in a shepherd's pie?",
        answer: "Lamb",
      },
    ],
  },
  {
    id: "600c33d1-12ea-49f2-a26e-40cb8848b193",
    name: "Sports",
    questions: [
      {
        id: "06ddba2f-b0ce-433d-ad6e-debafb61e97a",
        question: "What does FIFA stand for in English?",
        answer: "International Federation of Association Football",
      },
      {
        id: "06ddba2f-b0ce-433d-ad6e-debafb61e9s2",
        question: "Who is the world’s highest-paid athlete in 2021?",
        answer: "Conor McGregor",
      },
      {
        id: "06ddba2f-b0ce-433d-ad6e-debafb61e9f2",
        question: "In what city is the NFL Hall of Fame located?",
        answer: "Canton, Ohio",
      },
      {
        id: "06ddba2f-b0ce-433d-ad6e-debafb61e9b2",
        question: "Simone Biles is famous for her skill in what sport?",
        answer: "Gymnastics",
      },
      {
        id: "06ddba2f-b0ce-433d-ad6e-debafb61ez72",
        question:
          "What was the first name of Argentinian soccer star Maradona?",
        answer: "Diego",
      },
      {
        id: "06ddba2f-b0ce-433d-ad6e-debafb61er72",
        question: "What is the national sport of Japan?",
        answer: "Sumo Wrestling",
      },
      {
        id: "06ddba2f-b0ce-433d-ad6e-debafb61et72",
        question: "What sporting event has a strict dress code of all-white?",
        answer: "Wimbledon",
      },
    ],
  },
];

export const mockQuizQuestions: Question[] = [
  {
    id: "92a0023d-36d8-4897-9a40-a56516569e84",
    question: "What is a group of crows called?",
    answer: "A murder",
  },
  {
    id: "8b5a676c-23dc-421d-ad8f-85e64d8fe208",
    question: "How many dots appear on a pair of dice?",
    answer: "42",
  },
  {
    id: "827ad664-1dd3-4508-8f02-e2d8d0e47449",
    question: "Which is the only body part that is fully grown from birth?",
    answer: "Eyes",
  },
  {
    id: "827ad664-1dd3-4508-8b02-e2d8d0e47449",
    question: "What is acrophobia a fear of?",
    answer: "Heights",
  },
  {
    id: "827ad664-1dd3-4508-8a02-e2d8d0e47449",
    question: "What country has the most islands?",
    answer: "Sweden - 270,000",
  },
  {
    id: "827ad664-1dd3-4508-8c02-e2d8d0e47449",
    question: "How many hearts does an octopus have?",
    answer: "3",
  },
  {
    id: "cda2efdd-f0e6-47b4-bc6b-10a251f9f7f4",
    question: "What is the only continent with land in all four hemispheres?",
    answer: "Africa",
  },
  {
    id: "cda2efdd-f0e6-47b4-bc6b-10a351f9f7f4",
    question: "Which river flows through the Grand Canyon?",
    answer: "Colorado River",
  },
  {
    id: "cda2efdd-f0e6-47b4-bc6b-10a451f9f7f4",
    question: "What is the state capital of New York?",
    answer: "Albany",
  },
  {
    id: "cda2efdd-f0e6-47b4-bc6b-10a551f9f7f4",
    question: "On what continent would you find the world’s largest desert?",
    answer: "Antarctica",
  },
  {
    id: "cda2efdd-f0e6-47b4-bc6b-10a651f9f7f4",
    question: "What is the capital of Canada?",
    answer: "Ottawa",
  },
  {
    id: "cda2efdd-f0e6-47b4-bc6b-10a751f9f7f4",
    question: "On what continent would you find the city of Baku?",
    answer: "Asia",
  },
  {
    id: "e44d8a2e-044e-4826-bbc2-36c3546f6b3e",
    question:
      "How many measures of Gordon’s Gin are in a Vesper (James Bond) martini?",
    answer: "3",
  },
  {
    id: "961a2435-a6c2-40ad-8764-e7d6f3cb8343",
    question: "Cacio & Pepe is a staple of what Italian city’s cuisine?",
    answer: "Rome",
  },
  {
    id: "961a243f-a6c2-40ad-8764-e7d6f3cb8343",
    question: "Where did sushi originate?",
    answer: "China",
  },
  {
    id: "961a243s-a6c2-40ad-8764-e7d6f3cb8343",
    question: "What is a Beaujolais?",
    answer: "A type of red wine",
  },
  {
    id: "961a243c-a6c2-40ad-8764-e7d6f3cb8343",
    question: "What country drinks the most coffee?",
    answer: "Finland",
  },
  {
    id: "961a243v-a6c2-40ad-8764-e7d6f3cb8343",
    question: "What is the world’s best-selling stout beer?",
    answer: "Guinness",
  },
  {
    id: "961a243b-a6c2-40ad-8764-e7d6f3cb8343",
    question: "What meat is used in a shepherd's pie?",
    answer: "Lamb",
  },
  {
    id: "06ddba2f-b0ce-433d-ad6e-debafb61e97a",
    question: "What does FIFA stand for in English?",
    answer: "International Federation of Association Football",
  },
  {
    id: "06ddba2f-b0ce-433d-ad6e-debafb61e9s2",
    question: "Who is the world’s highest-paid athlete in 2021?",
    answer: "Conor McGregor",
  },
  {
    id: "06ddba2f-b0ce-433d-ad6e-debafb61e9f2",
    question: "In what city is the NFL Hall of Fame located?",
    answer: "Canton, Ohio",
  },
  {
    id: "06ddba2f-b0ce-433d-ad6e-debafb61e9b2",
    question: "Simone Biles is famous for her skill in what sport?",
    answer: "Gymnastics",
  },
  {
    id: "06ddba2f-b0ce-433d-ad6e-debafb61ez72",
    question: "What was the first name of Argentinian soccer star Maradona?",
    answer: "Diego",
  },
  {
    id: "06ddba2f-b0ce-433d-ad6e-debafb61er72",
    question: "What is the national sport of Japan?",
    answer: "Sumo Wrestling",
  },
  {
    id: "06ddba2f-b0ce-433d-ad6e-debafb61et72",
    question: "What sporting event has a strict dress code of all-white?",
    answer: "Wimbledon",
  },
];
