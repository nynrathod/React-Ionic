import { IonContent, IonIcon, isPlatform, useIonRouter } from "@ionic/react";
import { useEffect, useState } from "react";
import UserFormLayout from "./UserFormLayout";

import * as icons from "ionicons/icons";

export default function MasterPasswordForm() {
    useEffect(() => {
        document.body.classList.add('page-login');
    }, []);

    // Show Password
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const router = useIonRouter();

    function emailNext(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        router.push("/auth/otp-verification", "forward", "push");
    }
    return (
        <>
            <IonContent>
                <UserFormLayout>
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Create a strong and memorable Master Password</h3>

                    <form action="#" className="flex flex-col space-y-5" onSubmit={emailNext}>
                        <div className="relative">
                            <input type={showPassword1 ? 'text' : 'password'} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-800 peer" placeholder=" " />
                            {showPassword1 ?
                                <IonIcon icon={icons.eyeOffOutline} onClick={() => setShowPassword1(!showPassword1)} className="absolute top-0.5 right-3.5 transform dark:text-gray-200 bg-white dark:bg-gray-600 pl-2 py-3" />
                                : <IonIcon icon={icons.eyeOutline} onClick={() => setShowPassword1(!showPassword1)} className="absolute top-0.5 right-3.5 transform dark:text-gray-200 bg-white dark:bg-gray-600 pl-2 py-3" />}
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 cursor-text">Enter Password....</label>
                        </div>
                        <div className="relative">
                            <input type={showPassword2 ? 'text' : 'password'} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-800 peer" placeholder=" " />
                            {showPassword2 ?
                                <IonIcon icon={icons.eyeOffOutline} onClick={() => setShowPassword2(!showPassword2)} className="absolute top-0.5 right-3.5 transform dark:text-gray-200 bg-white dark:bg-gray-600 pl-2 py-3" />
                                : <IonIcon icon={icons.eyeOutline} onClick={() => setShowPassword2(!showPassword2)} className="absolute top-0.5 right-3.5 transform dark:text-gray-200 bg-white dark:bg-gray-600 pl-2 py-3" />}
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 cursor-text">Confirm Password....</label>
                        </div>
                        <button type="submit" className="text-white text-base bg-gray-800 transition hover:bg-gray-900 focus:bg-gray-800 py-3 active:bg-gray-800 capitalize rounded-md">
                            Next
                            {/* <IonSpinner name="dots" /> */}
                        </button>
                    </form>
                </UserFormLayout>
            </IonContent>
        </>
    )
}