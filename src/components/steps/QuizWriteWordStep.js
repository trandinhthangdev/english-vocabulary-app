import React, {useEffect, useState} from "react";
import {getRandomItemFromArray, getRandomItemsFromArray, shuffleArray} from "../../utils/functions";
import {BsCheckLg} from "react-icons/bs";
import  {MdOutlineCancel} from "react-icons/md";
import {BiVolumeFull} from "react-icons/bi"
const QuizWriteWordStep = (props) => {
    const {
        data
    } = props;
    const listIndex = data.map((item ,index) => index)
    const [doneIndex, setDoneIndex] = useState([getRandomItemFromArray(listIndex)]);
    const [optionsIndex, setOptionsIndex] = useState([]);
    const [results, setResults] = useState({})
    const quizCurrent = data[doneIndex[doneIndex.length - 1]];
    const [showResult, setShowResult] = useState(false)

    // const optionsIndex = [
    //     doneIndex[0]
    // ]
    useEffect(() => {
        setOptionsIndex(shuffleArray([
            doneIndex[doneIndex.length - 1],
            ...getRandomItemsFromArray(listIndex.filter((item, index) => index !== doneIndex[doneIndex.length - 1]),3)
        ]))
    }, [doneIndex])

    const onChoiceOption = (choiceIndex) => {
        setResults(prev => ({
            ...prev,
            [quizCurrent.id]: choiceIndex === doneIndex[doneIndex.length - 1]
        }));
        if (doneIndex.length === listIndex.length) {
            setShowResult(true)
            return;
        }
        setDoneIndex(prev => ([
            ...prev,
            getRandomItemFromArray(listIndex.filter((item, index) => !prev.includes(index)))
        ]))
    }

    const nbCorrects = Object.keys(results).filter(item => {
        return results[item]
    }).length
    const nbInCorrects = Object.keys(results).filter(item => {
        return !results[item]
    }).length

    return (
        <div>
            {
                !showResult
                &&
                <>
                    <div>
                        <BiVolumeFull />
                    </div>
                    <div>
                        {quizCurrent.defineEn}
                    </div>
                    {quizCurrent.hasImg && <div>
                        <img className="w-[240px]" src={`https://res.cloudinary.com/darrspnxu/raw/upload/words/${quizCurrent.id}.png`}/>
                    </div>}
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Check
                    </button>
                    </>
            }

            <div>
                <div>
                    <div>
                        {nbCorrects}
                    </div>
                    <BsCheckLg />
                </div>
                <div>
                    <div>
                        {nbInCorrects}
                    </div>
                    <MdOutlineCancel />
                </div>
            </div>
        </div>
    )
}

export default QuizWriteWordStep;
