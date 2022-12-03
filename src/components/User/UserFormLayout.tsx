import { ReactNode } from "react";

import { IonApp, IonContent, isPlatform } from "@ionic/react";

import '../../theme/variables.css'

import TopBar from "@/components/Header/TopBar";


export default function UserFormLayout({ children }: { children: ReactNode; }) {
    return (
        <>
            <div
                className="flex bg-white md:flex-row md:flex-1 h-full md:items-center w-full"
            >
                {isPlatform('desktop') ?
                    <div
                        className=" text-white bg-gray-900 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly w-7/12 h-full"
                    >
                        <img src="https://brandio.io/envato/iofrm/html/images/img2.jpg" className="opacity-50 object-cover w-full h-full" />
                    </div>
                    : ""}
                <div className="p-5 bg-white md:flex-1 md:w-5/12 w-full relative top-36 md:top-auto">
                    {children}
                </div>
            </div>

        </>
    );
}
