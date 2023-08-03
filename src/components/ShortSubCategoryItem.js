import React, {useState} from "react";
const ShortSubCategoryItem = (props) => {
    const {
        id
    } = props;
    const [data, setData] = useState(
        require(`./../data/items/${id}.json`)
    );
    const words = data["words"];
    const newArr = new Array(Math.ceil(words.length/4)).fill(1);
    const playAudio = (audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.play();
    }
    return (
        <>
            {
                newArr.map((item, index) => {
                    const word1 = words[4*index];
                    const word2 = words[4*index+1];
                    const word3 = words[4*index+2];
                    const word4 = words[4*index+3];
                    return (
                        <>
                            <tr>
                                <td className="p-2 border">
                                    <div className="cursor-pointer hover:text-blue-500" onClick={() => {
                                        playAudio(word1.audio)
                                    }}>
                                        {word1.word}
                                    </div>
                                </td>
                                <td className="p-2 border">
                                    {
                                        word2
                                        ?
                                            <div className="cursor-pointer hover:text-blue-500" onClick={() => {
                                                playAudio(word2.audio)
                                            }}>
                                                {word2.word}
                                            </div>
                                            :
                                            <></>
                                    }
                                </td>
                                <td className="p-2 border">
                                    {
                                        word3
                                            ?
                                            <div className="cursor-pointer hover:text-blue-500" onClick={() => {
                                                playAudio(word3.audio)
                                            }}>
                                                {word3.word}
                                            </div>
                                            :
                                            <></>
                                    }
                                </td>
                                <td className="p-2 border">
                                    {
                                        word4
                                            ?
                                            <div className="cursor-pointer hover:text-blue-500" onClick={() => {
                                                playAudio(word4.audio)
                                            }}>
                                                {word4.word}
                                            </div>
                                            :
                                            <></>
                                    }
                                </td>
                            </tr>
                        </>
                    )
                })
            }
        </>
    )
}

export default ShortSubCategoryItem;
