import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function User() {
    const search = useLocation().search;
    const authToken = new URLSearchParams(search).get('access_token');
    console.log("search", authToken, "auttoken", authToken)
    const userData = async function () {
        try {
            let response = await fetch("https://testapp1a353d80-1a353d80-dev.auth.ap-south-1.amazoncognito.com/oauth2/userInfo", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": authToken
                },
            });
            console.log("data", data)
            const data = await response.json();
            return data
        } catch (err) {
            console.log("Your Error is", err);
            return err
        }
    }
    useEffect(() => {
        userData()
    }, [])

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://askmescript.com/upload/photos/2020/04/EZQXmD79fDXYYB7CpoDb_22_2564e94001831683083bda12432b7e56_image.png" alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                            Sarah Dayan
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}
export default User;
