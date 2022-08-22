import '../App.css';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import editimg from "../images/edit-2.svg"
import deletimg from "../images/trash.svg"
function App() {
    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className='pl-0 md:pl-60 lg:pl-[15rem]'>
                <div id="first" className="px-5 py-10 box-shadow-1 pt-6 text-xs mx-5 sm:text-sm text-justify">
                    <div className="flex justify-between mt-2 items-center mb-10">
                        <h6 className="text text-xl font-semibold">Campaigns Listing</h6>
                        <button className="bac-3 uppercase text-sm font-semibold px-4 py-2 text-white rounded">
                            View aLL
                        </button>
                    </div>
                    <div className="overflow-auto mb-5">
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="bg-[#eee] mb-3">
                                    <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-l-lg text-xs sm:text-sm px-5 md:px-5 lg:pl-4 py-2">
                                        Campaign Name
                                    </th>

                                    <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                                        Start Date
                                    </th>

                                    <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                                        Due Date
                                    </th>

                                    <th className="lable-color text-center font-medium lg:font-semibold md:font-medium  text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                                        Participants
                                    </th>

                                    <th className="lable-color text-center font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                                        Needing Action
                                    </th>

                                    <th className="lable-color font-medium lg:font-semibold md:font-medium text-xs sm:text-sm md:px-5 px-5 sm:pl-3 py-2">
                                        Status
                                    </th>

                                    <th className="lable-color font-medium lg:font-semibold md:font-medium rounded-r-lg text-xs sm:text-sm px-5 md:px-5 sm:pl-3 py-2">
                                        Action
                                    </th>
                                </tr>
                                <tr className="h-4"></tr>

                                <tr className="border-b mb-3">
                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        ABC
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        13 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        18 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                        12
                                    </td>

                                    <td className="lable-color font-medium text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                        2
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        Ongoing
                                    </td>

                                    <td className="lable-color mt-4 lg:mt-0 font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                        <a href="#">
                                            <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                        </a>
                                        <a href="#">
                                            <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="h-4"></tr>

                                <tr className="border-b pb-2 mb-3">
                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        ABC
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        13 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        18 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                        12
                                    </td>

                                    <td className="lable-color font-medium text-xs text-center sm:text-base  px-5 md:px-5 lg:pl-8 py-4">
                                        2
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        Ongoing
                                    </td>

                                    <td className="lable-color mt-4 lg:mt-0 font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                        <a href="#">
                                            <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                        </a>
                                        <a href="#">
                                            <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                        </a>
                                    </td>
                                </tr>

                                <tr className="h-4"></tr>

                                <tr className="border-b pb-2 mb-3">
                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        ABC
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        13 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        18 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                        12
                                    </td>

                                    <td className="lable-color font-medium text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                        2
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        Ongoing
                                    </td>

                                    <td className="lable-color mt-4 lg:mt-0 font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                        <a href="#">
                                            <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                        </a>
                                        <a href="#">
                                            <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                        </a>
                                    </td>
                                </tr>

                                <tr className="h-4"></tr>

                                <tr className="border-b pb-2 mb-3">
                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        ABC
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        13 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        18 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                        12
                                    </td>

                                    <td className="lable-color font-medium text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                        2
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        Ongoing
                                    </td>

                                    <td className="lable-color mt-4 lg:mt-0 font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                        <a href="#">
                                            <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                        </a>
                                        <a href="#">
                                            <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                        </a>
                                    </td>
                                </tr>

                                <tr className="h-4"></tr>

                                <tr className="border-b pb-2 mb-3">
                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        ABC
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base px-5 md:px-5 lg:pl-4 py-4">
                                        13 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        18 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                        12
                                    </td>

                                    <td className="lable-color font-medium text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                        2
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        Ongoing
                                    </td>

                                    <td className="lable-color mt-4 lg:mt-0 font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                        <a href="#">
                                            <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                        </a>
                                        <a href="#">
                                            <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="h-4"></tr>

                                <tr className="border-b pb-2 mb-3">
                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        ABC
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        13 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        18 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                        12
                                    </td>

                                    <td className="lable-color font-medium text-xs text-center sm:text-base px-5 md:px-5 py-4">
                                        2
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        Ongoing
                                    </td>

                                    <td className="lable-color mt-4 lg:mt-0 font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                        <a href="#">
                                            <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                        </a>
                                        <a href="#">
                                            <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="h-4"></tr>

                                <tr className="pb-2">
                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        ABC
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        13 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        18 June 2022
                                    </td>

                                    <td className="lable-color font-medium text-center text-xs sm:text-base  px-5 md:px-5 py-4">
                                        12
                                    </td>

                                    <td className="lable-color font-medium text-xs text-center sm:text-base  px-5 md:px-5 py-4">
                                        2
                                    </td>

                                    <td className="lable-color font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-4 py-4">
                                        Ongoing
                                    </td>

                                    <td className="lable-color mt-4 lg:mt-0 font-medium text-xs sm:text-base  px-5 md:px-5 lg:pl-0 py-4 flex items-center justify-center">
                                        <a href="#">
                                            <img src={editimg} alt="editimg" className="mr-5 w-4" />{" "}
                                        </a>
                                        <a href="#">
                                            <img src={deletimg} alt="deletimg" className="w-[15px]" />
                                        </a>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
