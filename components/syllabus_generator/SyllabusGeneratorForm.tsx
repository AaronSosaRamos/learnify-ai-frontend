import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';

const syllabusSchema = z.object({
  grade_level: z.string().min(1, 'Grade level is required'),
  course: z.string().min(1, 'Course is required'),
  instructor_name: z.string().min(1, 'Instructor name is required'),
  instructor_title: z.string().min(1, 'Instructor title is required'),
  unit_time: z.string().min(1, 'Unit time is required'),
  unit_time_value: z.number().min(1, 'Unit time value is required'),
  start_date: z.date().optional(),
  assessment_methods: z.string().min(1, 'Assessment methods are required'),
  grading_scale: z.string().min(1, 'Grading scale is required'),
  file_url: z.string().url({ message: 'Must be a valid URL 🌐' }),
  file_type: z.enum([
    'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml',
    'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'
  ], { message: 'Please select a valid file type 📂' }),
  lang: z.enum(['en', 'es', 'fr', 'de', 'it', 'zh', 'jp'], { message: 'Please select a valid language 🌍' }),
});

export default function SyllabusGeneratorForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: zodResolver(syllabusSchema),
  });

  const [startDate, setStartDate] = useState<Date | null>(null);

  const onSubmit = (data: any) => {
    toast.success('Form submitted successfully 🎉');
    console.log('Form data:', data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ease-in-out py-10 px-4">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          AI Syllabus Generator 📘✨
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {[
            { placeholder: "Grade level 🎓", name: "grade_level" },
            { placeholder: "Course 📚", name: "course" },
            { placeholder: "Instructor name 👨‍🏫", name: "instructor_name" },
            { placeholder: "Instructor title 🧑‍🏫", name: "instructor_title" },
            { placeholder: "Unit time ⏳", name: "unit_time" },
            { placeholder: "Unit time value (e.g., hours) 🕒", name: "unit_time_value", type: "number", isNumberInput: true },
            { placeholder: "Select start date 📅", name: "start_date", isDate: true },
            { placeholder: "Assessment methods 📑", name: "assessment_methods" },
            { placeholder: "Grading scale 📊", name: "grading_scale" },
            { placeholder: "File URL 🌐", name: "file_url" },
            { placeholder: "Select file type 📂", name: "file_type", isSelect: true },
            { placeholder: "Select language 🌍", name: "lang", isSelect: true },
          ].map(({ placeholder, name, isDate, isSelect, type = "text", isNumberInput }, index) => (
            <div key={index} className="relative">
              {isDate ? (
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => {
                    setStartDate(date);
                    setValue(name, date);
                  }}
                  placeholderText={placeholder}
                  className="w-full md:w-[450px] max-md:w-[280px] pl-10 py-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-gray-200 text-gray-900 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-300 transition-colors"
                  popperClassName="z-50"
                  calendarClassName="bg-white dark:bg-gray-800 border dark:border-gray-700"
                />
              ) : isSelect ? (
                <select
                  {...register(name)}
                  className="w-full pl-10 py-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-gray-200 text-gray-900 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-300 transition-colors"
                >
                  <option value="">{placeholder}</option>
                  {name === "file_type" && (
                    <>
                      <option value="pdf">PDF</option>
                      <option value="csv">CSV</option>
                      <option value="txt">Text</option>
                      <option value="md">Markdown</option>
                      <option value="url">URL</option>
                      <option value="pptx">PowerPoint</option>
                      <option value="docx">Word Document</option>
                      <option value="xls">Excel Spreadsheet</option>
                      <option value="xlsx">Excel Spreadsheet (.xlsx)</option>
                      <option value="xml">XML</option>
                      <option value="gdoc">Google Doc</option>
                      <option value="gsheet">Google Sheet</option>
                      <option value="gslide">Google Slide</option>
                      <option value="gpdf">Google PDF</option>
                      <option value="img">Image</option>
                      <option value="youtube_url">YouTube URL</option>
                    </>
                  )}
                  {name === "lang" && (
                    <>
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="it">Italian</option>
                      <option value="zh">Chinese</option>
                      <option value="jp">Japanese</option>
                    </>
                  )}
                </select>
              ) : (
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(name, {
                    setValueAs: (value) => isNumberInput ? Number(value) : value,
                  })}
                  className="w-full pl-10 py-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-gray-200 text-gray-900 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-300 transition-colors"
                />
              )}
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{(errors[name] as any).message}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg transition-colors flex items-center justify-center"
          >
            Submit <AiOutlineSend className="ml-2" />
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}
