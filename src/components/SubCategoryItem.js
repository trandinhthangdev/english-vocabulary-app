import React, {useState} from "react";
import WordCell from "./WordCell";
const SubCategoryItem = (props) => {
    const {
        id
    } = props;
    const [data, setData] = useState(
        require(`./../data/items/${id}.json`)
    );
    const words = data["words"];
    const newArr = new Array(Math.ceil(words.length/2)).fill(1)
    return (
        <>
            {
                newArr.map((item, index) => {
                    const word1 = words[2*index];
                    const word2 = words[2*index+1];
                    return (
                        <>
                            <tr>
                                <td className="p-2 border">
                                    <WordCell data={word1}/>
                                </td>
                                <td className="p-2 border">
                                    {
                                        word2
                                        ?
                                            <WordCell data={word2}/>
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

export default SubCategoryItem;
