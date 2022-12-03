import { IonContent, IonIcon, isPlatform, useIonRouter } from "@ionic/react";
import { useEffect, useState } from "react";
import UserFormLayout from "./UserFormLayout";

import * as icons from "ionicons/icons";
import { useHistory } from "react-router-dom";
import OtpInput from "react-otp-input";

export default function MasterPasswordForm() {
    useEffect(() => {
        document.body.classList.add('page-login');
    }, []);
    let history = useHistory();
    function emailNext(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        history.push("/otp-verification");
    }

    const [OTP, setOTP] = useState("");


    return (
        <>
            <IonContent>
                <UserFormLayout>
                    <form action="#" className="flex flex-col space-y-5" onSubmit={emailNext}>
                        <div className="m-auto w-80">
                            <span className="block mb-4">Enter the verification code that was sent to your contact email.</span>
                            <OtpInput
                                value={OTP}
                                isInputNum={true}
                                onChange={setOTP}
                                numInputs={6}
                                shouldAutoFocus={true}
                                inputStyle="block rounded-t-sm !w-10 h-10 text-base text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mr-4 mb-4"
                            />
                            <button type="submit" className="text-white text-base bg-gray-800 transition hover:bg-gray-900 focus:bg-gray-800 py-3 active:bg-gray-800 capitalize rounded-md w-full">
                                Next
                                {/* <IonSpinner name="dots" /> */}
                            </button>

                            <div className="mt-6 border-t">
                                <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-center mr-2 pt-5 text-sm tracking-wide text-gray-800">Didn’t receive the code?</span>
                                <a className="text-center inline-block pt-5 underline text-sm tracking-wide text-gray-800">Resend Code</a>
                            </div>

                        </div>
                    </form>
                </UserFormLayout>
            </IonContent>
        </>
    )
}