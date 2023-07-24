import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
const WordListStep = (props) => {
    const { data } = props;
    const { speak } = useSpeechSynthesis();
    const [showDefineVi, setShowDefineVi] = useState([]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {data.map((item, index) => {
                return (
                    <div
                        className="cursor-pointer flex flex-col items-center bg-gray-100 p-2 rounded-2xl"
                        onClick={() => {
                            speak({ text: item.word });
                        }}
                    >
                        {item.hasImg && (
                            <div className="min-h-[200px]">
                                <img
                                    className="w-[240px]"
                                    src={`https://res.cloudinary.com/darrspnxu/raw/upload/words/${item.id}.png`}
                                />
                            </div>
                        )}
                        <div className="font-bold text-xl">{item.word}</div>
                        <div className="text-cyan-500">
                            /{item.phonetic.trim()}/
                        </div>
                        <div className="text-orange-600">{item.type}</div>
                        <div
                            className="text-center cursor-pointer hover:text-gray-800"
                            onClick={(event) => {
                                event.stopPropagation();
                                setShowDefineVi((prev) =>
                                    prev.includes(item.id)
                                        ? prev.filter(
                                              (itemP) => itemP !== item.id
                                          )
                                        : [...prev, item.id]
                                );
                            }}
                        >
                            {item.defineEn}
                        </div>
                        {showDefineVi.includes(item.id) && (
                            <div className="text-center text-red-600">
                                {item.defineVi}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default WordListStep;
