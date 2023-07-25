import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SubCategoryItem from "./SubCategoryItem";
import LogoIcon from "../assets/logo.png";

const PrintWordInCategory = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(() => {
        const result = require("./../data/data.json");
        let categories = [];
        result.forEach((item) => {
            categories = [...categories, ...item.categories];
        });
        return categories.find((item) => item.id === id);
    });

    if (!data) return <></>;
    return (
        <div className="p-4 bg-white text-gray-900">
            <div className="text-center">
                <Link className="inline-block" to={"/"}>
                    <div className="flex flex-col items-center p-1">
                        <img className="w-[36px] h-[36px]" src={LogoIcon} />
                        <div className="text-sm font-bold">
                            Shadowing English App
                        </div>
                        <div className="text-xs italic">@trandinhthangdev</div>
                    </div>{" "}
                </Link>
            </div>
            <table className="table-auto">
                <tbody>
                    <tr>
                        <th
                            colSpan={2}
                            align="center"
                            className="text-[24px] font-bold"
                        >
                            {data.title}
                        </th>
                    </tr>
                    {data.items.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td
                                        colSpan={2}
                                        align="center"
                                        className="text-[18px] font-bold py-4"
                                    >
                                        {item.title}
                                    </td>
                                </tr>
                                <SubCategoryItem id={item.id} />
                            </>
                        );
                    })}
                    {/*{*/}
                    {/*    words.map(item => {*/}
                    {/*        return (*/}
                    {/*            <tr>*/}
                    {/*                <td>*/}
                    {/*                    {item.hasImg && (*/}
                    {/*                        <div className="min-h-[200px]">*/}
                    {/*                            <img*/}
                    {/*                                className="w-[240px]"*/}
                    {/*                                src={`https://res.cloudinary.com/darrspnxu/raw/upload/words/${item.id}.png`}*/}
                    {/*                            />*/}
                    {/*                        </div>*/}
                    {/*                    )}*/}
                    {/*                </td>*/}
                    {/*                <td>*/}
                    {/*                    <div>*/}
                    {/*                        {item.examples.map(itemEx => {*/}
                    {/*                            return (*/}
                    {/*                                <div>{itemEx}</div>*/}
                    {/*                            )*/}
                    {/*                        })}*/}
                    {/*                    </div>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </tbody>
            </table>
        </div>
    );
};

export default PrintWordInCategory;
