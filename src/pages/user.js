import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function User() {
    const search = window.location.href.split("/")[3].split("&")
    const access_token = search[0].split("=")[1]
    const token_type = search[2].split("=")[1]
    console.log(token_type)
    const [apiUserName, setApiUserName] = useState("loading...")
    const [apiUserIdentities, setApiUserIdentities] = useState()
    const userData = async function () {
        try {
            let response = await fetch("https://testapp1a353d80-1a353d80-dev.auth.ap-south-1.amazoncognito.com/oauth2/userInfo", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": token_type + " " + access_token
                },
            });
            const data = await response.json();
            setApiUserName(data.username)
            console.log("JSON.parse(data.identities)", JSON.parse(data.identities))
            setApiUserIdentities(JSON.parse(data.identities)[0])
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
                            “This is user Details fetched from cognito after login or register, form more user got to Dashboard.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                            {apiUserName}
                        </div>
                        <div className='flex mt-5'>
                            <div class="mr-5 text-slate-700 dark:text-slate-500">
                                {apiUserIdentities?.providerName}
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
                                {Date(apiUserIdentities?.dateCreated)}
                            </div>
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}
export default User;
