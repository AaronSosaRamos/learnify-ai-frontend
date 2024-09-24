import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';
import SyllabusGeneratorResults from './SyllabusGeneratorResults';
import Loader from '../Loader';

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

const syllabusMockedData = {
    course_information: {
        course_title: "线性回归",
        grade_level: "大学",
        description:
            "本课程涵盖线性回归的基本概念和应用，包括简单线性回归、多元线性回归、模型评估和诊断等。"
    },
    instructor_information: {
        name: "Wilfredo Sosa",
        title: "人工智能硕士",
        description_title: "在机器学习和数据分析领域拥有丰富经验的专业人士。"
    },
    course_description_objectives: {
        objectives: [
            "理解线性回归的基本原理和假设。",
            "学习如何使用最小二乘法拟合线性回归模型。",
            "掌握评估线性回归模型拟合优度的指标。",
            "了解如何识别和处理线性回归中的异常值和影响点。",
            "能够使用线性回归模型进行预测和推断。"
        ],
        intended_learning_outcomes: [
            "学生将能够解释线性回归的概念及其在现实世界中的应用。",
            "学生将能够使用统计软件包（如R或Python）执行线性回归分析。",
            "学生将能够解释线性回归模型的结果并得出有意义的结论。",
            "学生将能够批判性地评估线性回归模型的适用性和局限性。"
        ]
    },
    course_content: [
        {
            unit_time: "周",
            unit_time_value: 1,
            topic: "线性回归简介"
        },
        {
            unit_time: "周",
            unit_time_value: 2,
            topic: "简单线性回归"
        },
        {
            unit_time: "周",
            unit_time_value: 3,
            topic: "多元线性回归"
        },
        {
            unit_time: "周",
            unit_time_value: 4,
            topic: "模型评估与诊断"
        },
        {
            unit_time: "周",
            unit_time_value: 5,
            topic: "异常值和影响点"
        },
        {
            unit_time: "周",
            unit_time_value: 6,
            topic: "预测和推断"
        },
        {
            unit_time: "周",
            unit_time_value: 7,
            topic: "线性回归的应用"
        },
        {
            unit_time: "周",
            unit_time_value: 8,
            topic: "复习和总结"
        }
    ],
    policies_procedures: {
        attendance_policy: "鼓励学生按时上课，积极参与课堂讨论。",
        late_submission_policy:
            "迟交作业将被扣分，具体扣分细则将在课程网站上公布。",
        academic_honesty: "学生应遵守学术诚信原则，严禁任何形式的抄袭和作弊行为。"
    },
    assessment_grading_criteria: {
        assessment_methods: [
            {
                type_assessment: "项目",
                weight: 50
            },
            {
                type_assessment: "考试",
                weight: 50
            }
        ],
        grading_scale: {
            A: "90-100%",
            B: "80-89%",
            C: "70-79%",
            D: "60-69%",
            F: "低于60%"
        }
    },
    learning_resources: [
        {
            title: "线性回归分析",
            author: "道格拉斯·C·蒙哥马利、伊丽莎白·A·佩克、G·杰弗里·维宁",
            year: 2012
        },
        {
            title: "R语言实战",
            author: "罗伯特·科布洛夫",
            year: 2015
        }
    ],
    course_schedule: [
        {
            unit_time: "周",
            unit_time_value: 1,
            date: "2024-07-04",
            topic: "线性回归简介",
            activity_desc: "介绍线性回归的基本概念、应用和课程安排。"
        },
        {
            unit_time: "周",
            unit_time_value: 2,
            date: "2024-07-11",
            topic: "简单线性回归",
            activity_desc: "讲解简单线性回归模型、最小二乘法和模型评估指标。"
        },
        {
            unit_time: "周",
            unit_time_value: 3,
            date: "2024-07-18",
            topic: "多元线性回归",
            activity_desc: "介绍多元线性回归模型、变量选择方法和模型解释。"
        },
        {
            unit_time: "周",
            unit_time_value: 4,
            date: "2024-07-25",
            topic: "模型评估与诊断",
            activity_desc: "讲解模型诊断方法、残差分析和影响点分析。"
        },
        {
            unit_time: "周",
            unit_time_value: 5,
            date: "2024-08-01",
            topic: "异常值和影响点",
            activity_desc: "讨论异常值和影响点的识别和处理方法。"
        },
        {
            unit_time: "周",
            unit_time_value: 6,
            date: "2024-08-08",
            topic: "预测和推断",
            activity_desc: "讲解如何使用线性回归模型进行预测和推断。"
        },
        {
            unit_time: "周",
            unit_time_value: 7,
            date: "2024-08-15",
            topic: "线性回归的应用",
            activity_desc: "介绍线性回归在不同领域的应用案例。"
        },
        {
            unit_time: "周",
            unit_time_value: 8,
            date: "2024-08-22",
            topic: "复习和总结",
            activity_desc: "回顾课程内容，解答学生疑问，进行期末考试准备。"
        }
    ]
}

export default function SyllabusGeneratorForm() {
    const [result, setResult] = useState<any>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: zodResolver(syllabusSchema),
    });

    const [startDate, setStartDate] = useState<Date | null>(null);

    const onSubmit = (data: any) => {
        setIsSubmitted(true);
        setResult(null);
        toast.success('Form submitted successfully 🎉');
        console.log('Form data:', data);
        setTimeout(() => {
            setResult(syllabusMockedData);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transition-colors duration-300 ease-in-out py-10 px-4">
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

            {!result && isSubmitted && (
                <div className="mt-10">
                    <Loader />
                </div>
            )}

            {result && isSubmitted && (
                <div className="mt-10 w-full max-w-lg">
                    <SyllabusGeneratorResults syllabusGeneratorData={result} />
                </div>
            )}
        </div>
    );
}
