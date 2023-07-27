import data from "./data/data.json";
import { useState } from "react";
import SubCategory from "./components/SubCategory";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillPrinterFill } from "react-icons/bs";
import {FcList} from "react-icons/fc";
import LogoIcon from "./assets/logo.png";
import { Link } from "react-router-dom";
const App = (props) => {
    const [categoryActive, setCategoryActive] = useState(null);
    const [subCategory, setSubCategoryActive] = useState(null);
    const [indexActive, setIndexActive] = useState(null);
    return (
        <div className="flex bg-white text-gray-800">
            <div className="w-[300px] max-md:w-full h-[100vh] flex flex-col">
                <div
                    className="flex flex-col items-center p-1 cursor-pointer"
                    onClick={() => setCategoryActive(null)}
                >
                    <img className="w-[36px] h-[36px]" src={LogoIcon} />
                    <div className="text-sm font-bold">
                        English Vocabulary App
                    </div>
                    <div className="text-xs italic">@trandinhthangdev</div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {data.map((item, index) => {
                        return (
                            <div className="border-b border-b-blue-200">
                                <div
                                    className="cursor-pointer p-2 font-bold text-gray-800"
                                    onClick={() => {
                                        setIndexActive((prev) =>
                                            prev === index ? null : index
                                        );
                                    }}
                                >
                                    {item.title}
                                </div>
                                {indexActive === index && (
                                    <div className="pl-4">
                                        {item.categories.map(
                                            (itemCat, indexCat) => {
                                                return (
                                                    <div
                                                        className={`cursor-pointer flex items-center my-2 p-2  ${
                                                            itemCat.id ===
                                                            categoryActive?.id
                                                                ? "bg-blue-100"
                                                                : "hover:bg-blue-100"
                                                        }`}
                                                        onClick={() => {
                                                            setCategoryActive(
                                                                itemCat
                                                            );
                                                        }}
                                                    >
                                                        <div className="w-[60px] min-w-[50px]">
                                                            <img
                                                                className="w-full"
                                                                src={require(`./assets/categories/${itemCat.id}.png`)}
                                                            />
                                                        </div>
                                                        <div className="flex-1 pl-2 flex flex-col items-start">
                                                            <div className="text-gray-700">
                                                                {itemCat.title}
                                                            </div>
                                                            <div className="font-bold italic text-blue-600">
                                                                {
                                                                    itemCat.nbWords
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {categoryActive ? (
                <div className="flex-1 h-[100vh] overflow-y-auto max-md:fixed max-md:top-0 bottom-0 left-0 right-0 flex flex-col bg-white">
                    <div className="flex items-center">
                        <div
                            className="px-4 py-2 cursor-pointer text-xl text-blue-500 hover:text-blue-900"
                            onClick={() => {
                                setCategoryActive(null);
                            }}
                        >
                            <IoIosArrowBack />
                        </div>
                        <div className="text-xl font-bold flex-1">
                            {categoryActive.title}
                        </div>
                        <Link
                            to={`/print-word-in-category/${categoryActive.id}`}
                            className="cursor-pointer mr-4"
                        >
                            <BsFillPrinterFill className="text-2xl text-blue-400" />
                        </Link>
                        <Link
                            to={`/print-word-list-in-category/${categoryActive.id}`}
                            className="cursor-pointer mr-4"
                        >
                            <FcList className="text-2xl text-blue-400" />
                        </Link>
                    </div>
                    <div className="flex-1 overflow-y-auto px-4">
                        {categoryActive.items.map((setItem, setIndex) => {
                            return (
                                <div
                                    className="cursor-pointer my-2 hover:text-blue-400"
                                    onClick={() => {
                                        setSubCategoryActive(setItem);
                                    }}
                                >
                                    {setItem.title}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="flex-1 h-[100vh] flex items-center justify-center text-2xl text-blue-600 max-md:hidden">
                    Please Select select Category
                </div>
            )}
            {subCategory && (
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-white">
                    <SubCategory
                        subCategory={subCategory}
                        onClose={() => setSubCategoryActive(null)}
                    />
                </div>
            )}
        </div>
    );
};

export default App;
