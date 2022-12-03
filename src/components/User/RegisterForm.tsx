import { IonContent, isPlatform, useIonRouter } from "@ionic/react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import UserFormLayout from "./UserFormLayout";

export default function RegisterForm() {

    const location = useLocation()

    useEffect(() => {
        document.body.classList.add('page-login');
    }, []);

    const router = useIonRouter();
    function emailNext(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        router.push("/auth/master-password", "forward", "push");
    }
    return (
        <>
            <IonContent>
                <UserFormLayout>
                    {location.pathname}
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Start using yuezers</h3>
                    <form action="#" className="flex flex-col space-y-5" onSubmit={emailNext}>
                        <div className="relative">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-800 peer" placeholder=" " />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 cursor-text">Enter email address....</label>
                        </div>
                        <button type="submit" className="text-white text-base bg-gray-800 transition hover:bg-gray-900 focus:bg-gray-800 py-3 active:bg-gray-800 capitalize rounded-md">
                            Next
                            {/* <IonSpinner name="dots" /> */}
                        </button>

                        <div>
                            <div className="mt-6 border-t">
                                <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-center mr-2 pt-5 text-sm tracking-wide text-gray-800">Already have an account</span>
                                <a className="text-center inline-block pt-5 underline text-sm tracking-wide text-gray-800">Sign In</a>
                            </div>
                        </div>

                    </form>
                </UserFormLayout>
            </IonContent>
        </>
    )
}