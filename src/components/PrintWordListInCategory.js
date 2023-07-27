import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SubCategoryItem from "./SubCategoryItem";
import LogoIcon from "../assets/logo.png";
import ShortSubCategoryItem from "./ShortSubCategoryItem";

const PrintWordListInCategory = (props) => {
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
            <div className="text-center w-full">
                <Link className="inline-block" to={"/"}>
                    <div className="flex flex-col items-center p-1">
                        <img className="w-[36px] h-[36px]" src={LogoIcon} />
                        <div className="text-sm font-bold">
                            Shadowing English App
                        </div>
                        <div className="text-xs italic">@trandinhthangdev</div>
                    </div>
                </Link>
            </div>
            <table className="table-auto w-full">
                <tbody>
                    <tr>
                        <td
                            colSpan={4}
                            align="center"
                            className="text-[24px] font-bold"
                        >
                            {data.title}
                        </td>
                    </tr>
                    <tr>
                        <td
                            colSpan={4}
                            align="center"
                            className="text-[18px] font-bold text-blue-500"
                        >
                            {data.nbWords}
                        </td>
                    </tr>
                    {data.items.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td
                                        colSpan={4}
                                        align="center"
                                        className="text-[18px] font-bold py-4"
                                    >
                                        {item.title}
                                        <span className="text-blue-500">
                                            ({item.nbWords})
                                        </span>
                                    </td>
                                </tr>

                                <ShortSubCategoryItem id={item.id} />
                            </>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PrintWordListInCategory;
