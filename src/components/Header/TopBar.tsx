import { Fragment, ReactNode } from "react";

import { IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonButtons, IonMenuButton, IonTitle, IonIcon, IonItem } from "@ionic/react";
import * as icons from "ionicons/icons";
import { isPlatform } from '@ionic/react';

import { Menu, Transition } from "@headlessui/react";

import Notification from '@/components/Header/Notification';


import { Link } from "react-router-dom";


export default function TopMenu({ pagename, pagetitle }: { pagename: ReactNode, pagetitle: ReactNode }) {
    if (localStorage.getItem('themecolor')) {
        document.body.classList.add("dark");
    }
    const toggleDarkModeHandler = () => {
        if (localStorage.getItem('themecolor')) {
            localStorage.removeItem('themecolor')
            document.body.classList.remove("dark");
            return true;
        } else {
            localStorage.setItem('themecolor', '1')
            document.body.classList.add("dark");
            return false;
        }
    };

    const reviewsHandler = () => {
        // setIsOpen(false);
        // document.getElementById("myDIV").classList.toggle("mystyle");;

    }

    return (
        <>
            {/* <IonContent>
                <IonList>
                    <IonItem routerLink="/dashboard/users/1">
                        <IonLabel>User 1</IonLabel>
                    </IonItem>
                    <IonItem>
                        <Link to="/dashboard/users/2">
                            <IonLabel>User 2</IonLabel>
                        </Link>
                    </IonItem>

                </IonList>
            </IonContent> */}
            <IonHeader className="yz-b-bottom">
                <div className="dark-bg-header">
                    <IonGrid className="p-0">
                        <IonRow className="ion-justify-content-between ion-align-items-center">
                            <IonCol size={isPlatform('desktop') ? "4" : ''} className="p-0">
                                <IonToolbar className="flex justify-between">
                                    <IonButtons slot="start">
                                        <IonMenuButton auto-hide="false" menu="mymenu" onClick={reviewsHandler} />
                                    </IonButtons>
                                    <IonTitle className="">{pagetitle}</IonTitle>
                                </IonToolbar>
                            </IonCol>
                            <IonCol size="1.5" className="p-0">
                                <IonRow>
                                    <IonCol className={`flex align-middle p-0 items-center text-center justify-center ${isPlatform('desktop') ? "yz-b-left dark:border-l dark:border-gray-700" : ""} `} >
                                        <Notification />
                                    </IonCol>
                                    {isPlatform('desktop') ?
                                        <>
                                            <IonCol className="flex align-middle border-r p-0 yz-b-right yz-b-left dark:border-l dark:border-r dark:border-gray-700">
                                                <IonToolbar className="text-center cursor-pointer">
                                                    <IonIcon
                                                        icon={icons.contrastOutline}
                                                        className="text-2xl align-middle"
                                                        onClick={toggleDarkModeHandler} />
                                                </IonToolbar>
                                            </IonCol>
                                            {/* <IonCol className="border-r p-0 flex items-center text-center justify-center">
                                                <Menu as="div" className="">
                                                    <Menu.Button className="max-w-xs bg-transparent items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <img
                                                            className="h-8 w-8 rounded-full m-auto align-middle"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt="" />
                                                    </Menu.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="origin-top-right absolute right-2 mt-4 w-48 rounded-md bg-white focus:outline-none yz-shadow">
                                                            <IonItem button className="ion-no-padding hover:bg-slate-700" routerLink="/" routerDirection={isPlatform('desktop') ? "none" : "forward"}>
                                                                <span className="flex px-4  text-sm text-gray-700 dark:text-white w-full h-full items-center">
                                                                    <IonIcon icon={icons.personOutline} className="mr-2" />
                                                                    Profile
                                                                </span>
                                                            </IonItem>
                                                            <IonItem button className="ion-no-padding hover:bg-slate-700">
                                                                <Link to="/" className="flex px-4  text-sm text-gray-700 dark:text-white w-full h-full items-center">
                                                                    <IonIcon icon={icons.cogOutline} className="mr-2" />
                                                                    Account Setting
                                                                </Link>
                                                            </IonItem>
                                                            <IonItem button className="ion-no-padding hover:bg-slate-700">
                                                                <Link to="/" className="flex px-4  text-sm text-gray-700 dark:text-white w-full  h-full items-center">
                                                                    <IonIcon icon={icons.logOutOutline} className="mr-2" />
                                                                    Logout
                                                                </Link>
                                                            </IonItem>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </IonCol> */}
                                        </>
                                        : ''}
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>

            </IonHeader >
        </>
    );
};
