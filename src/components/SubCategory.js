import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { IoIosArrowBack } from "react-icons/io";
import { FaListAlt, FaMicrophone, FaSpellCheck } from "react-icons/fa";
import { PiCards } from "react-icons/pi";
import { MdQuiz } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";
import WordListStep from "./steps/WordListStep";
import FlashcardStep from "./steps/FlashcardStep";
import QuizPronunciationStep from "./steps/QuizPronunciationStep";
import QuizChoiceWordStep from "./steps/QuizChoiceWordStep";
import QuizWriteWordStep from "./steps/QuizWriteWordStep";
import QuizChoiceDefineStep from "./steps/QuizChoiceDefineStep";
import ViewTableWord from "./ViewTableWord";
const WORD_LIST_STEP = "wordList";
const FLASHCARD_STEP = "flashcard";
const QUIZ_PRONUNCIATION_STEP = "quizPronunciation";
const QUIZ_CHOICE_WORD_STEP = "quizChoiceWord";
const QUIZ_CHOICE_DEFINE_STEP = "quizChoiceDefine";
const QUIZ_WRITE_WORD_STEP = "quizWriteWord";
const SubCategory = (props) => {
    const { subCategory, onClose } = props;
    console.log("subCategory", subCategory);
    const [data, setData] = useState(
        require(`./../data/items/${subCategory.id}.json`)
    );
    const words = data["words"];
    const [currentStep, setCurrentStep] = useState(WORD_LIST_STEP);
    const [showTableWord, setShowTableWord] = useState(false);
    const steps = [
        {
            code: WORD_LIST_STEP,
            name: "Word list",
            icon: FaListAlt,
        },
        {
            code: FLASHCARD_STEP,
            name: "Flashcard",
            icon: PiCards,
        },
        {
            code: QUIZ_PRONUNCIATION_STEP,
            name: "Pronunciation",
            icon: FaMicrophone,
        },
        {
            code: QUIZ_CHOICE_WORD_STEP,
            name: "Choice Word",
            icon: MdQuiz,
        },
        {
            code: QUIZ_CHOICE_DEFINE_STEP,
            name: "Choice Define",
            icon: MdQuiz,
        },
        {
            code: QUIZ_WRITE_WORD_STEP,
            name: "Spelling",
            icon: FaSpellCheck,
        },
    ];

    const showStepContent = () => {
        switch (currentStep) {
            case WORD_LIST_STEP:
                return <WordListStep data={words} />;
            case FLASHCARD_STEP:
                return <FlashcardStep data={words} />;
            case QUIZ_PRONUNCIATION_STEP:
                return <QuizPronunciationStep data={words} />;
            case QUIZ_CHOICE_WORD_STEP:
                return <QuizChoiceWordStep data={words} />;
            case QUIZ_CHOICE_DEFINE_STEP:
                return <QuizChoiceDefineStep data={words} />;
            case QUIZ_WRITE_WORD_STEP:
                return <QuizWriteWordStep data={words} />;
            default:
                return <></>;
        }
    };
    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center">
                <div
                    className="px-4 py-2 cursor-pointer text-xl text-blue-500 hover:text-blue-900"
                    onClick={() => {
                        onClose();
                    }}
                >
                    <IoIosArrowBack />
                </div>
                <div className="text-xl font-bold">{subCategory.title}</div>
                <div onClick={() => setShowTableWord((prev) => !prev)}>
                    <CiViewTable />
                </div>
            </div>
            <div className="flex items-center justify-center px-4">
                {steps.map((step, index) => {
                    return (
                        <>
                            <div
                                className={`h-full cursor-pointer flex flex-col items-center px-2 py-1 rounded-lg max-sm:text-sm ${
                                    currentStep === step.code
                                        ? "bg-blue-300 text-white"
                                        : ""
                                }`}
                                onClick={() => {
                                    setCurrentStep(step.code);
                                }}
                            >
                                <step.icon className="text-xl max-sm:text-sm" />
                                <div className="text-center">{step.name}</div>
                            </div>
                            {index !== steps.length - 1 && (
                                <div className="w-[50px] h-[5px] bg-blue-300"></div>
                            )}
                        </>
                    );
                })}
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {showStepContent()}
            </div>
            {showTableWord && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-white">
                    <ViewTableWord />
                </div>
            )}
        </div>
    );
};

export default SubCategory;
