import React, {useState} from "react";
const WordItem = (props) => {
    const {
        item
    } = props;
    const [showDefineVi, setShowDefineVi] = useState(false);
    console.log('item',item)
    return (
        <div
            className="cursor-pointer flex flex-col items-center bg-gray-100 p-2 rounded-2xl"
            onClick={() => {
                // speak({ text: item.word });
                const audio = new Audio(item.audio);
                audio.play();
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
                    setShowDefineVi(prev => !prev);
                }}
            >
                {item.defineEn}
            </div>
            {showDefineVi && (
                <div className="text-center text-red-600">
                    {item.defineVi}
                </div>
            )}

            <div className="mt-2 w-full">
                <div className="font-bold text-blue-800">
                    Examples:
                </div>
                <ul className="pl-4">
                    {item.examples.map(itemEx => {
                        return (
                            <li className="italic">
                                {itemEx}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default WordItem;
