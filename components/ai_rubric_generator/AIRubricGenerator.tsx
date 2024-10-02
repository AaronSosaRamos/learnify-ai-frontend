import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSchool, FaFileAlt, FaRulerHorizontal } from "react-icons/fa";
import { RiFileUploadLine, RiTranslate } from "react-icons/ri";
import Spinner from "../Spinner";
import axios from "axios";
import RubricCard from "./Rubric";

const formSchema = z.object({
  grade_level: z.string().min(1, { message: "Grade level is required 🎓" }),
  point_scale: z.string().min(1, { message: "Point scale is required 🔢" }),
  standard: z.string().min(1, { message: "Standard is required 📜" }),
  file_url: z.string().url({ message: "Must be a valid URL 🌐" }),
  file_type: z.enum( 
    [
      "pdf", "csv", "txt", "md", "url", "pptx", "docx", "xls", "xlsx", "xml", "gdoc", "gsheet", "gslide", "gpdf", "img", "youtube_url"
    ],
    { message: "Please select a valid file type 📂" }
  ),
  lang: z.enum(["en", "es", "fr", "de", "it", "zh", "jp"], { message: "Please select a valid language 🌍" }),
});

type FormData = z.infer<typeof formSchema>;

const AIRubricGeneratorForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);
  const [rubricData, setRubricData] = useState<any | null>(null); 

  const onSubmit = async (data: FormData) => {
    setRubricData(null);
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ai-rubric-generator`, data, {
        headers: {
          'api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      toast.success("Form submitted successfully! 🎉", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
      });
      
      setRubricData(response.data);  
    } catch (error) {
      toast.error("Error generating rubric ❌");
      console.error("Error generating rubric:", error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 bg-gradient-to-b from-green-500 via-blue-500 to-yellow-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-900 shadow-md rounded-lg space-y-6 animate__animated animate__fadeInUp transition-all duration-300"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          AI Rubric Generator Form 📋
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
          {errors.grade_level && <span className="text-red-500 text-sm">{errors.grade_level.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Point Scale 🔢</label>
          <div className="flex items-center">
            <FaRulerHorizontal className="mr-2 text-gray-600 dark:text-gray-400" />
            <input
              type="text"
              {...register("point_scale")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Enter the point scale"
            />
          </div>
          {errors.point_scale && <span className="text-red-500 text-sm">{errors.point_scale.message}</span>}
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Standard 📜</label>
          <div className="flex items-center">
            <FaFileAlt className="mr-2 text-gray-600 dark:text-gray-400" />
            <textarea
              {...register("standard")}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md transition-all duration-300"
              placeholder="Describe the standard"
            />
          </div>
          {errors.standard && <span className="text-red-500 text-sm">{errors.standard.message}</span>}
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
          {errors.file_url && <span className="text-red-500 text-sm">{errors.file_url.message}</span>}
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
          className={`w-full py-2 px-4 ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500'} text-white rounded-md hover:from-yellow-500 hover:via-pink-600 hover:to-red-600 dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 transition-all duration-300`}
        >
          {loading ? "Submitting..." : "Submit 🚀"}
        </button>
      </form>

      <ToastContainer />

      {loading && <Spinner />}

      {rubricData && (
        <div className="mt-10 w-full max-w-4xl">
          <RubricCard data={rubricData} />
        </div>
      )}
    </div>
  );
};

export default AIRubricGeneratorForm;
