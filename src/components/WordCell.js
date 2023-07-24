import React from "react";
const WordCell = (props) => {
    const {
        data
    } = props;
    if (!data) return <></>
    const examples = [...new Set(data.examples)].sort((a, b) => a.length - b.length);

    return (
        <div className="flex cursor-pointer" onClick={() => {
            const audio = new Audio(data.audio);
            audio.play();
        }}>
            <div
                className="w-[30%]"
            >
                {data.hasImg && <img
                    src={`https://res.cloudinary.com/darrspnxu/raw/upload/words/${data.id}.png`}
                />}
            </div>
            <div className="flex-1 p-2">
                <div className="text-[14px] font-bold">
                    {data.word}
                </div>
                <div className="text-[10px]">
                    /{data.phonetic.trim()}/
                </div>
                <div className="text-[11px]">
                    {data.defineEn}
                </div>
                <ul className="list-disc ml-6">
                    {examples.slice(0,2).map(itemEx => {
                        return (
                            <li className="text-[11px] italic">{itemEx}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default WordCell;
