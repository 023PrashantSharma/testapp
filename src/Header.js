import logoImages from "./images/profile-img.svg";
import vectorimg from "./images/Vector.svg";
import dropuserimg from "./images/User.svg"
import logimg from "./images/log-out.svg"
export const Header = () => {
    return (
        <><div className="pl-0 md:pl-60 lg:pl-[15rem]">
            <div class=" sm:block block md:flex lg:flex items-center py-3 mb-8 lg:mb-14 px-2 md:px-5 lg:px-10 md:py-5 lg:py-5 box-shadow-1">
                <div class="md:flex justify-between flex-initial w-full md:w-full lg:w-4/12 mr-5">
                    <h4 class="text-lg font-bold">My Acccount</h4>
                </div>

                <div class="flex-initial w-full md:w-3/12 lg:w-8/12">
                    <div class="hidden sm:block md:flex lg:flex items-center lg:justify-end">
                        <button class="hidden md:hidden lg:block font-semibold text-sm bac-6 text-white uppercase px-6 py-2 rounded-lg mr-10">
                            Create New Campaign
                        </button>
                        <div class="relative">
                            <input
                                type="search"
                                class="bac-1 border-r w-12 md:mr-5 lg:mr-5"
                                id="exampleSearch"
                                placeholder=""
                            />
                            <img
                                src={vectorimg}
                                alt={vectorimg}
                                class="absolute top-1 w-4"
                            />
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="md:hidden block lg:flex items-center">
                                <img
                                    src={logoImages}
                                    alt={logoImages}
                                    class="mr-3 w-10 h-10 border border-black rounded-full"
                                />
                                <h6 class="mr-3">Manan Sharma</h6>
                            </div>

                            <div class="dropdown inline-block relative">
                                <button class="w-7 h-7 rounded-full bac-7 items-center flex justify-center">
                                    <i
                                        class="fa fa-angle-down text-2xl font-bold text-white"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                                <ul class="dropdown-menu absolute right-0 top-14 hidden text-gray-700 pt-1">
                                    <li className="flex bac-6 px-5 rounded-t-lg box-shadow-1">
                                        <img
                                            src={dropuserimg}
                                            alt="dropuserimg"
                                            className="mr-4"
                                        />
                                        <a className="rounded-t text-white py-4 w-36 block whitespace-no-wrap">
                                            My Account
                                        </a>
                                    </li>
                                    <li className="flex bg-white box-shadow-1 px-5 rounded-b-lg">
                                        <img src={logimg} alt="logimg" className="mr-4" />
                                        <a
                                            className="rounded-t text-gray-400 py-4 w-36 block whitespace-no-wrap"
                                            href="#"
                                        >
                                            {" "}
                                            Log Out
                                        </a>
                                    </li>{" "}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}
export default Header