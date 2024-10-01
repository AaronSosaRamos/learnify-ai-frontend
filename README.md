# LearnifyAI Frontend

**LearnifyAI Frontend** is a modern web platform designed to enhance the educational experience by offering four AI-powered services: **AI Syllabus Generator**, **AI-Resistant Assignments**, **Personalized Tasks**, and **AI Rubric Generator**. These services are aimed at providing tailored support for teachers and educational professionals, helping them to craft custom syllabi, create robust assignments, and evaluate students more effectively with AI-powered tools.

Developed by **Wilfredo Aaron Sosa Ramos**, this frontend application is deployed on **Vercel** and integrates seamlessly with a backend API to deliver dynamic and customizable educational solutions. Built with a powerful tech stack, the platform ensures a smooth and efficient user experience.

## Table of Contents

- [1. Features](#1-features)
- [2. Services Provided](#2-services-provided)
  - [2.1 AI Syllabus Generator](#21-ai-syllabus-generator)
  - [2.2 AI-Resistant Assignments](#22-ai-resistant-assignments)
  - [2.3 Personalized Tasks](#23-personalized-tasks)
  - [2.4 AI Rubric Generator](#24-ai-rubric-generator)
- [3. Technologies Used](#3-technologies-used)
- [4. Environment Variables](#4-environment-variables)
- [5. Installation Guide](#5-installation-guide)
- [6. How to Use](#6-how-to-use)

---

## 1. Features

**LearnifyAI Frontend** provides a range of features aimed at helping educators streamline their workflows and enhance student outcomes through AI-driven tools. The key features include:

- **AI-Powered Syllabus Generation**: Automatically generate comprehensive and customizable syllabi tailored to specific educational goals and requirements.
- **AI-Resistant Assignments**: Design assignments that are resistant to AI-based cheating or plagiarism.
- **Personalized Learning Tasks**: Generate tasks personalized to the needs and learning styles of individual students.
- **AI Rubric Generator**: Create detailed and customized rubrics for grading and assessment, tailored to specific learning outcomes.

These services leverage advanced AI models to assist teachers in developing, assigning, and evaluating educational content with minimal effort.

---

## 2. Services Provided

The **LearnifyAI Frontend** offers four core services that are designed to help educators improve the quality and effectiveness of their teaching materials and assessments.

### 2.1 AI Syllabus Generator

The **AI Syllabus Generator** helps educators create fully customized syllabi for their courses. Key features include:

- **Comprehensive Syllabus Creation**: Automatically generates syllabi based on course topics, objectives, and desired outcomes.
- **Customizable Sections**: Tailor sections such as course objectives, weekly breakdowns, reading materials, and assessments.
- **AI-Driven Suggestions**: Receive suggestions for course materials, assignments, and topics to enhance the learning experience.

This service is ideal for educators looking to streamline syllabus creation while ensuring that their courses are well-structured and aligned with educational goals.

### 2.2 AI-Resistant Assignments

The **AI-Resistant Assignments** service is designed to help educators create assignments that are resistant to AI-generated content or plagiarism. It includes:

- **Assignment Generation**: Generate creative and challenging assignments that require critical thinking and originality.
- **AI-Resistance Features**: Incorporate elements that make it difficult for AI-based tools to solve the assignments automatically, ensuring student effort and integrity.
- **Assignment Customization**: Modify and fine-tune assignments to suit the learning objectives and student abilities.

This service helps maintain academic integrity by making it harder for students to use AI tools to cheat on assignments.

### 2.3 Personalized Tasks

The **Personalized Tasks** service allows educators to create customized learning tasks tailored to individual students. Features include:

- **Personalized Learning Plans**: Generate tasks based on student performance, learning style, and progress.
- **Custom Task Suggestions**: Receive AI-driven suggestions for tasks that align with the specific needs of each student.
- **Adaptive Learning**: Tasks can be adjusted dynamically based on student feedback and performance over time.

This service helps ensure that each student receives the right level of challenge and support to achieve their learning goals.

### 2.4 AI Rubric Generator

The **AI Rubric Generator** enables educators to quickly create detailed and customized rubrics for grading. Key features include:

- **Custom Rubric Creation**: Automatically generate rubrics based on the assignment type, learning objectives, and assessment criteria.
- **Detailed Criteria**: Define clear, measurable criteria for grading various aspects of student work.
- **Flexible Customization**: Adjust and modify rubric criteria to suit specific assignments or projects.

This service saves educators time by generating high-quality rubrics that are tailored to the needs of each assignment.

---

## 3. Technologies Used

The **LearnifyAI Frontend** is built using a modern tech stack that ensures high performance, scalability, and maintainability. The key technologies used include:

- **NextJS**: A React-based framework for server-side rendering and static site generation, ensuring fast performance and SEO optimization.
- **ShadCN**: Provides reusable components and design patterns, enabling a consistent and responsive user interface.
- **axios**: A promise-based HTTP client used for making API requests to the backend.
- **react-markdown**: Enables rendering of markdown content within React components, useful for displaying formatted text or syllabus previews.
- **zod**: A TypeScript-first schema declaration and validation library, integrated with **react-hook-form** for input validation.
- **react-hook-form**: Simplifies form handling and validation in React components, ensuring efficient and effective input management.
- **@hookform/resolvers**: Connects **react-hook-form** with **zod**, ensuring seamless validation logic.
- **react-toastify**: Provides real-time notifications for user feedback, such as success or error messages.
- **Tailwind CSS**: A utility-first CSS framework that enables custom and responsive design implementation.
- **Async Management**: Ensures smooth and efficient handling of asynchronous operations, such as API requests and data fetching.

---

## 4. Environment Variables

The **LearnifyAI Frontend** requires the following environment variables to be configured for proper API integration:

- **NEXT_PUBLIC_API_BASE_URL**: The base URL for the backend API that provides the educational services.
- **NEXT_PUBLIC_API_KEY**: The API key used to authenticate requests to the backend services.

Example `.env.local` file configuration:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.learnifyai.com
NEXT_PUBLIC_API_KEY=your_api_key_here
```


Ensure you replace `your_api_key_here` with the actual API key provided by the backend.

---

## 5. Installation Guide

Follow these steps to set up and run the **LearnifyAI Frontend** locally:

1. **Clone the repository**:
   - Download the repository to your local machine using the following command:
     ```
     git clone https://github.com/yourusername/LearnifyAIFrontend.git
     ```

2. **Navigate to the project directory**:
   - Move into the project folder:
     ```
     cd LearnifyAIFrontend
     ```

3. **Install dependencies**:
   - Install the required packages using npm or yarn:
     ```
     npm install
     ```

4. **Set up environment variables**:
   - Create a `.env.local` file in the root directory and configure the environment variables:
     ```
     NEXT_PUBLIC_API_BASE_URL=https://api.learnifyai.com
     NEXT_PUBLIC_API_KEY=your_api_key_here
     ```

5. **Run the development server**:
   - Start the application locally:
     ```
     npm run dev
     ```

6. **Build for production**:
   - To build the application for production deployment:
     ```
     npm run build
     ```

7. **Deploy**:
   - The project is deployed on **Vercel**. For custom deployment, push your code to a repository connected to Vercel or follow Vercel’s deployment instructions.

---

## 6. How to Use

Once the **LearnifyAI Frontend** is set up, you can begin using its services as follows:

1. **Generate a Syllabus**:
   - Use the **AI Syllabus Generator** to create a custom syllabus by entering course details such as topics, objectives, and timelines.

2. **Create AI-Resistant Assignments**:
   - Generate assignments that challenge students while making it difficult for AI-based tools to solve them automatically.

3. **Assign Personalized Tasks**:
   - Provide personalized learning tasks to students based on their learning needs, styles, and progress.

4. **Generate Rubrics**:
   - Use the **AI Rubric Generator** to create detailed grading rubrics that match the specific goals of an assignment.

Throughout the process, you will receive real-time notifications for successful submissions or errors via **react-toastify**, ensuring smooth interaction with the platform.
