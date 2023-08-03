import React, { useState } from "react";
import WordItem from "./WordListStep/WordItem";
const WordListStep = (props) => {
    const { data } = props;
    // const { speak } = useSpeechSynthesis();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {data.map((item, index) => {
                return (
                   <WordItem key={index} item={item} />
                );
            })}
        </div>
    );
};

export default WordListStep;
