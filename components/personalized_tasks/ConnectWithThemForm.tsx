import React, { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSchool, FaFileAlt } from "react-icons/fa";
import { RiFileUploadLine, RiTranslate } from "react-icons/ri";
import Spinner from "../Spinner";
import Recommendations from "./Recommendations";

const fetchRecommendations = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        recommendations: [
          {
            project_overview:
              "Design and train a neural network to predict the popularity of songs on a music streaming platform...",
            rationale:
              "This project aligns with students' interest in hands-on activities and their diverse cultural backgrounds...",
            difficulty_level: "Moderate",
            required_tools: [
              "Python",
              "TensorFlow or PyTorch",
              "Jupyter Notebook",
              "Music streaming platform API or data scraping tools",
            ],
            estimated_time: "2-3 weeks",
          },
          {
            project_overview:
              "Develop a neural network model to analyze and classify images of local landmarks in your city...",
            rationale:
              "This project encourages students to explore their urban environment and apply their knowledge of neural networks...",
            difficulty_level: "Moderate to Challenging",
            required_tools: [
              "Python",
              "TensorFlow or PyTorch",
              "Keras",
              "Image processing libraries like OpenCV",
            ],
            estimated_time: "3-4 weeks",
          },
          {
            project_overview:
              "Create a gamified learning experience using a neural network to teach students about different cultural traditions...",
            rationale:
              "This project leverages the power of gamified learning to engage students in a fun and interactive way...",
            difficulty_level: "Challenging",
            required_tools: [
              "Python",
              "TensorFlow or PyTorch",
              "Unity or other game development framework",
              "Game design tools",
            ],
            estimated_time: "4-6 weeks",
          },
        ],
      });
    }, 2000); 
  });
};

type FormData = {
  grade_level: string;
  task_description: string;
  students_description: string;
  file_url: string;
  file_type: string;
  lang: string;
};

const ConnectWithThemForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(z.object({
      grade_level: z.string().min(1, { message: "Grade level is required 🎓" }),
      task_description: z.string().min(1, { message: "Task description is required 📝" }),
      students_description: z.string().min(1, { message: "Students description is required 👩‍🎓" }),
      file_url: z.string().url({ message: "Must be a valid URL 🌐" }),
      file_type: z.enum(["pdf", "csv", "txt", "md", "url", "pptx", "docx", "xls", "xlsx", "xml", "gdoc", "gsheet", "gslide", "gpdf", "img", "youtube_url"], { message: "Please select a valid file type 📂" }),
      lang: z.enum(["en", "es", "fr", "de", "it", "zh", "jp"], { message: "Please select a valid language 🌍" }),
    })),
  });

  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  const onSubmit = async (data: FormData) => {
    toast.success("Form submitted successfully! 🎉", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
    });

    setLoading(true);

    const recommendations = await fetchRecommendations();
    setResultData(recommendations);
    setLoading(false);
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 bg-gradient-to-b from-purple-500 via-indigo-500 to-teal-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-900 shadow-md rounded-lg space-y-6 animate__animated animate__fadeInUp transition-all duration-300"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Personalized Tasks Form ✨
        </h1>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Grade Level 🎓</label>
          <div className="flex items-center">
            <FaSchool className="mr-2 text-gray-600 dark:text-gray-400" />
            <input
              {...register("grade_level")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Enter the grade level"
            />
          </div>
          {errors.grade_level && <span className="text-red-500 text-sm">{errors.grade_level?.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Task Description 📝</label>
          <div className="flex items-center">
            <RiFileUploadLine className="mr-2 text-gray-600 dark:text-gray-400" />
            <textarea
              {...register("task_description")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Describe the task"
            />
          </div>
          {errors.task_description && <span className="text-red-500 text-sm">{errors.task_description?.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Students Description 👩‍🎓</label>
          <div className="flex items-center">
            <FaFileAlt className="mr-2 text-gray-600 dark:text-gray-400" />
            <textarea
              {...register("students_description")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Describe the students"
            />
          </div>
          {errors.students_description && <span className="text-red-500 text-sm">{errors.students_description?.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">File URL 🌐</label>
          <div className="flex items-center">
            <FaFileAlt className="mr-2 text-gray-600 dark:text-gray-400" />
            <input
              {...register("file_url")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Enter the file URL"
            />
          </div>
          {errors.file_url && <span className="text-red-500 text-sm">{errors.file_url?.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">File Type 📂</label>
          <div className="flex items-center">
            <RiFileUploadLine className="mr-2 text-gray-600 dark:text-gray-400" />
            <select
              {...register("file_type")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
            >
              <option value="pdf">PDF</option>
              <option value="csv">CSV</option>
              <option value="txt">TXT</option>
              <option value="md">Markdown</option>
              <option value="url">URL</option>
              <option value="pptx">PPTX</option>
              <option value="docx">DOCX</option>
              <option value="xls">XLS</option>
              <option value="xlsx">XLSX</option>
              <option value="xml">XML</option>
              <option value="gdoc">Google Doc</option>
              <option value="gsheet">Google Sheet</option>
              <option value="gslide">Google Slide</option>
              <option value="gpdf">Google PDF</option>
              <option value="img">Image</option>
              <option value="youtube_url">YouTube URL</option>
            </select>
          </div>
          {errors.file_type && <span className="text-red-500 text-sm">{errors.file_type?.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Language 🌍</label>
          <div className="flex items-center">
            <RiTranslate className="mr-2 text-gray-600 dark:text-gray-400" />
            <select
              {...register("lang")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="zh">Chinese</option>
              <option value="jp">Japanese</option>
            </select>
          </div>
          {errors.lang && <span className="text-red-500 text-sm">{errors.lang?.message}</span>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500'} text-white rounded-md hover:from-yellow-500 hover:via-pink-600 hover:to-red-600 dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 transition-all duration-300`}
        >
          {loading ? "Submitting..." : "Submit 🚀"}
        </button>
      </form>

      <ToastContainer />

      {loading && <Spinner />}

      {!loading && resultData && (
        <Suspense fallback={<Spinner />}>
          <Recommendations data={resultData} />
        </Suspense>
      )}
    </div>
  );
};

export default ConnectWithThemForm;
