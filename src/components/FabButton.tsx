import { isPlatform, IonFab, IonFabButton, IonIcon, IonFabList, IonButton, IonHeader, IonItem, IonList, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";

import * as icons from "ionicons/icons";


export default function FabButton() {
    // Modal
    const [isOpen, setIsOpen] = useState(false);

    // Show Password
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            {isPlatform('mobile') ?
                <>
                    <IonModal isOpen={isOpen} backdrop-dismiss="false">
                        <div className="wrapper">
                            <IonHeader>
                                <IonToolbar className="yz-b-bottom">
                                    <IonTitle className="">
                                        <IonIcon
                                            icon={icons.lockClosed}
                                            className="mr-5 align-middle text-2xl" />Add New Login
                                    </IonTitle>
                                    <IonButton slot="end" size="small" color="undefined" className="text-gray-800 dark:text-white hover:bg-gray-100 outline-none shadow-none focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 outline dark:outline-none absolute right-0 top-0" onClick={() => setIsOpen(false)}>
                                        <IonIcon
                                            icon={icons.closeOutline}
                                            className="align-middle text-2xl" />
                                    </IonButton>
                                </IonToolbar>
                            </IonHeader>

                            <form className="w-full p-4">
                                <IonList>
                                    <IonItem lines="none" className="ion-no-padding">
                                        <div className="md:flex mb-2 w-full">
                                            <div className="relative w-full md:pr-3">
                                                <input className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="App or Site Name" />
                                            </div>
                                            <div className="relative w-full md:pl-3">
                                                <input className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="App URL" />
                                                <IonIcon
                                                    icon={icons.globeOutline}
                                                    className="absolute top-3.5 right-5 transform" />
                                            </div>
                                        </div>
                                    </IonItem>
                                    <IonItem lines="none" className="ion-no-padding">
                                        <div className="mb-2 w-full">
                                            <div className="relative w-full">
                                                <input className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="Username or Email" required />
                                                <IonIcon icon={icons.at} className="absolute top-3.5 right-5 transform" />
                                            </div>
                                        </div>
                                    </IonItem>
                                    <IonItem lines="none" className="ion-no-padding">
                                        <div className="mb-2 w-full">
                                            <div className="relative w-full">
                                                <input className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="Password" type={showPassword ? 'text' : 'password'} />
                                                {showPassword ?
                                                    <IonIcon icon={icons.eyeOffOutline} onClick={() => setShowPassword(!showPassword)} className="absolute top-3.5 right-5 transform cursor-pointer" />
                                                    : <IonIcon icon={icons.eyeOutline} onClick={() => setShowPassword(!showPassword)} className="absolute top-3.5 right-5 transform cursor-pointer" />}

                                            </div>
                                        </div>
                                    </IonItem>
                                    <IonItem lines="none" className="ion-no-padding">
                                        <div className="mb-2 w-full">
                                            <div className="relative w-full">
                                                <textarea className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 rounded py-3 px-4 mb-3 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="Note"></textarea>
                                            </div>
                                        </div>
                                    </IonItem>
                                    <IonItem lines="none" className="ion-no-padding">
                                        <div className="mb-2 w-full text-center">
                                            <IonButton type="submit" size="large" color="undefined" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 capitalize" id="open-custom-dialog" expand="block">
                                                <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                                </svg>
                                                Saving...
                                            </IonButton>

                                        </div>
                                    </IonItem>
                                </IonList>
                            </form>
                        </div>
                    </IonModal>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton color="dark">
                            <IonIcon icon={icons.add} />
                        </IonFabButton>
                        <IonFabList side="top">
                            <IonFabButton data-desc="Add Reminder">
                                <IonIcon icon={icons.timeOutline} />
                            </IonFabButton>
                            <IonFabButton data-desc="Add Notes">
                                <IonIcon icon={icons.documentOutline} />
                            </IonFabButton>
                            <IonFabButton data-desc="Add Password" onClick={() => setIsOpen(true)}>
                                <IonIcon icon={icons.lockOpenOutline} />
                            </IonFabButton>
                        </IonFabList>
                    </IonFab>
                </>
                : ""
            }
        </>
    )
}