import React, { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFileAlt, FaSchool, FaCloudUploadAlt } from "react-icons/fa";
import { RiFileUploadLine, RiFileTextLine, RiTranslate } from "react-icons/ri";
import ResultCard from "./ResultCard";
import Spinner from "../Spinner";

const fetchResultData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        topic: 'Introduction to Data Science',
        grade_level: 'college',
        ideas: [
          {
            assignment_description:
              'Develop a neural network architecture for emulating a specific Data Science workflow...',
            explanation:
              'This modification makes the assignment AI-resistant because it requires students...'
          },
          {
            assignment_description:
              'Design a neural network architecture for emulating a Data Science workflow...',
            explanation:
              'This modification makes the assignment AI-resistant by requiring students to work with...'
          },
          {
            assignment_description:
              'Develop a neural network architecture for emulating a Data Science workflow...',
            explanation:
              'This modification makes the assignment AI-resistant by requiring students to design...'
          }
        ]
      });
    }, 2000); 
  });
};

const formSchema = z.object({
  topic: z.string().min(1).max(255, { message: "Topic must be between 1 and 255 characters 🎯" }),
  assignment: z.string().min(1).max(255, { message: "Assignment must be between 1 and 255 characters 📝" }),
  grade_level: z.enum(["elementary", "middle", "high", "college", "professional"]),
  file_type: z.enum(
    [
      "pdf", "csv", "txt", "md", "url", "pptx", "docx", "xls", "xlsx", "xml", "gdoc", "gsheet", "gslide", "gpdf", "img", "youtube_url"
    ],
    { message: "Please select a valid file type 📂" }
  ),
  file_url: z.string().url({ message: "Must be a valid URL 🌐" }),
  lang: z.enum(["en", "es", "fr", "de", "it", "zh", "jp"], { message: "Please select a valid language 🌍" }),
});

type FormData = z.infer<typeof formSchema>;

const AIResistantForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
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
    const result = await fetchResultData();
    setResultData(result);
    setLoading(false);
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-900 shadow-md rounded-lg space-y-6 animate__animated animate__fadeInUp transition-all duration-300"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          AI-Resistant Assignments ✨
        </h1>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Topic 🎯</label>
          <div className="flex items-center">
            <FaFileAlt className="mr-2 text-gray-600 dark:text-gray-400" />
            <input
              {...register("topic")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Enter the topic"
            />
          </div>
          {errors.topic && <span className="text-red-500 text-sm">{errors.topic.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Assignment 📝</label>
          <div className="flex items-center">
            <RiFileTextLine className="mr-2 text-gray-600 dark:text-gray-400" />
            <input
              {...register("assignment")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Enter the assignment"
            />
          </div>
          {errors.assignment && <span className="text-red-500 text-sm">{errors.assignment.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Grade Level 🎓</label>
          <div className="flex items-center">
            <FaSchool className="mr-2 text-gray-600 dark:text-gray-400" />
            <select
              {...register("grade_level")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
            >
              <option value="elementary">Elementary</option>
              <option value="middle">Middle</option>
              <option value="high">High</option>
              <option value="college">College</option>
              <option value="professional">Professional</option>
            </select>
          </div>
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
          {errors.file_type && <span className="text-red-500 text-sm">{errors.file_type.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">File URL 🌐</label>
          <div className="flex items-center">
            <FaCloudUploadAlt className="mr-2 text-gray-600 dark:text-gray-400" />
            <input
              {...register("file_url")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Enter the file URL"
            />
          </div>
          {errors.file_url && <span className="text-red-500 text-sm">{errors.file_url.message}</span>}
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
          {errors.lang && <span className="text-red-500 text-sm">{errors.lang.message}</span>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-green-400 via-blue-400 to-purple-500'} text-white rounded-md hover:from-green-500 hover:via-blue-500 hover:to-purple-600 dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 transition-all duration-300`}
        >
          {loading ? "Submitting..." : "Submit 🚀"}
        </button>
      </form>

      <ToastContainer />

      {loading && <Spinner />}
      
      {!loading && resultData && (
        <Suspense fallback={<Spinner />}>
          <ResultCard data={resultData} />
        </Suspense>
      )}
    </div>
  );
};

export default AIResistantForm;
