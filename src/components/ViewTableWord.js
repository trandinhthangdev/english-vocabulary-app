import React, {useState} from "react";
import {useParams} from "react-router-dom";

const ViewTableWord = (props) => {
    const {id} = useParams();
    const [data, setData] = useState(() => {
        try {
            return require(`./../data/items/${id}.json`)
        } catch (e) {
            return null;
        }
    });
    const words = Array.isArray(data?.words) ? data.words : [];
    return <table className="table-fixed">
        <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {
            words.map(item => {
                return (
                    <tr>
                        <td>
                            {item.hasImg && (
                                <div className="min-h-[200px]">
                                    <img
                                        className="w-[240px]"
                                        src={`https://res.cloudinary.com/darrspnxu/raw/upload/words/${item.id}.png`}
                                    />
                                </div>
                            )}
                        </td>
                        <td>
                            <div>
                                {item.examples.map(itemEx => {
                                    return (
                                        <div>{itemEx}</div>
                                    )
                                })}
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
};

export default ViewTableWord;
