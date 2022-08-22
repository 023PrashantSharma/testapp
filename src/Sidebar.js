import daseimg from "./images/dassbord.svg";
import campinimg from "./images/companig.svg"
import inboximg from "./images/inbox-icon.svg"
import framimg from "./images/Frame.svg"
import analayimg from "./images/dassbord-report-icon.svg"
import logoimg from "./images/image.jpg"

export const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 z-10 bac-7 w-60 hidden sm:block h-full">
            <div className="text-center text-white flex justify-center mr-4 mt-12 mb-12 font-medium text-3xl">
                <img src={logoimg} alt="logoimg" />
            </div>
            <div className="">
                <ul className="mb-80">
                    <li className="flex items-center mb-8 border-l-4 border-[#FCB43C] py-2 px-7">
                        <img src={daseimg} alt="daseimg" className="w-5 h-5 object-cover mr-3" />
                        <a className="text-base color-2 font-medium" href="dassbord.html">Dashboard</a>
                    </li>
                    <li className="flex items-center mb-8 py-2 px-7">
                        <img src={campinimg} alt="campinimg" className="w-5 h-5 object-cover mr-3" />
                        <a className="text-base text-white font-medium" href="Campaigns Management.html">Campaigns</a>
                    </li>
                    <li className="flex items-center mb-8 py-2 px-7">
                        <img src={inboximg} alt="inboximg" className="w-5 h-5 object-cover mr-3" />
                        <a className="text-base text-white font-medium" href="inbox.html">Inbox</a>
                    </li>

                    <li className="flex items-center mb-8 py-2 px-7">
                        <img src={framimg} alt="framimg" className="w-6 h-5 object-cover mr-3" />
                        <a className="text-base text-white font-medium" href="plan-menu.html">Plans</a>
                    </li>
                    <li className="flex items-center mb-8 py-2 px-7">
                        <img src={analayimg} alt="analayimg" className="w-5 h-5 object-cover mr-3" />
                        <a className="text-base text-white font-medium" href="#">Analysis Report</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar