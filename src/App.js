import data from "./data/data.json";
import { useState } from "react";
import SubCategory from "./components/SubCategory";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillPrinterFill, BsListUl } from "react-icons/bs";
import LogoIcon from "./assets/logo.png";
import langeekIcon from "./assets/langeek.png"
import { Link } from "react-router-dom";
import PersonalWebsiteBtn from "./components/PersonalWebsiteBtn";
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
                        Langeek Voca
                    </div>
                    <div className="text-xs italic">@trandinhthangdev</div>
                </div>
                <div className="p-2">
                    <PersonalWebsiteBtn />
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
                <div className="px-2">
                    <div className="text-center text-sm text-blue-400 mb-1">
                        This website was created with the sole purpose of compiling vocabulary from the application <a className="text-blue-800 font-bold" href="https://langeek.co/" target="_blank">https://langeek.co/</a> to help the author and friends easily print out a list of words.
                    </div>
                    <div className="text-center text-sm text-red-400">
                        Website này sinh ra chỉ với mục đích tổng hợp các từ vựng của ứng dụng <a className="text-blue-800 font-bold" href="https://langeek.co/" target="_blank">https://langeek.co/</a> , giúp tác giả và bạn bè có thể dễ dàng in ra danh sách các từ vựng
                    </div>
                </div>
                <a href="https://langeek.co/" target="_blank" className="flex flex-col items-center font-bold text-blue-800">
                    <img src={langeekIcon}/>
                    <div>
                        langeek.co
                    </div>
                </a>
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
                    </div>
                    <div className="flex items-center justify-center">
                        <Link
                            to={`/print-word-in-category/${categoryActive.id}`}
                            className="cursor-pointer mx-2 flex items-center text-white bg-blue-600 p-2 rounded-lg"
                        >
                            <BsFillPrinterFill className="text-2xl" />
                            <div className="ml-1">
                                Print All Word With Card
                            </div>
                        </Link>
                        <Link
                            to={`/print-word-list-in-category/${categoryActive.id}`}
                            className="cursor-pointer mx-2 flex items-center text-white bg-blue-600 p-2 rounded-lg"
                        >
                            <BsListUl className="text-2xl" />
                            <div className="ml-1">
                                Print All Word List
                            </div>
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
