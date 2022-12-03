import { useState, useEffect } from 'react'
import { menuController } from "@ionic/core/components";
import { Link, useLocation } from 'react-router-dom';

import { IonButtons, IonContent, IonIcon, IonImg, IonItem, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNote, isPlatform } from '@ionic/react';
import * as icons from "ionicons/icons";


interface AppMenu {
    url: string;
    title: string;
    myicon: string;
}
interface AppMenuOther {
    url: string;
    title: string;
    myicon: string;
}

const appMenus: AppMenu[] = [
    // {
    //     title: 'Home',
    //     url: '/',
    //     myicon: icons.homeOutline,
    // },
    {
        title: 'Passwords',
        url: '/',
        myicon: icons.lockClosedOutline
    },
    {
        title: 'Notes',
        url: '/Notes',
        myicon: icons.documentOutline,
    },
    {
        title: 'Reminders',
        url: '/reminders',
        myicon: icons.timeOutline,
    },
    {
        title: 'Chat',
        url: '/chat',
        myicon: icons.chatbubblesOutline,
    }
];

const appMenusOthers: AppMenuOther[] = [
    {
        title: 'Profile',
        url: '/auth/profile',
        myicon: icons.personOutline,
    },
    {
        title: 'Preferences',
        url: '/preferences',
        myicon: icons.cogOutline,
    },
    {
        title: 'Trash',
        url: '/Trash',
        myicon: icons.trashOutline,
    },
    {
        title: 'Signout',
        url: '/auth/signout',
        myicon: icons.logOutOutline,
    },
];

const Menu: React.FC = () => {
    const location = useLocation();

    // This holds the information about dark mode/light mode
    const [mode, setMode] = useState('');

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', event => {
                const colorScheme = event.matches ? "dark" : "light";
                setMode(colorScheme);
            });
    }, []);


    const aa = location.pathname


    function openMenu(menu: string) {

        menuController.close(menu);



    }

    return (
        <>
            <IonMenu contentId="main" menuId="mymenu" type={`${isPlatform('desktop') ? "push" : "overlay"}`} className="border-none" disabled={aa === "/auth/register" ? true : false}>
                <IonContent className='grid justify-around'>
                    <IonList id="inbox-list" className="">
                        <div className="flex items-center">
                            <IonButtons slot="start">
                                <IonMenuButton auto-hide="false" menu="mymenu" onClick={(click) => openMenu("mymenu")} />
                            </IonButtons>
                            <IonListHeader className="text-xl font-bold pl-4">
                                <h2 className="text-xl font-bold flex item-center dark:invert">
                                    <Link to="/" className="flex align-middle text-gray-700 dark:text-white dark:invert">
                                        <IonImg src="/assets/icon/logo.png" className="w-7 mr-2" />
                                        authentic
                                    </Link>
                                </h2>
                            </IonListHeader>
                        </div>
                        <div className="flex-1">
                            <ul className="mt-8 pb-4 space-y-1 list-none p-0">
                                <small className="ml-3 mb-2 block">Apps</small>
                                {appMenus.map((appMenu, index) => {
                                    return (
                                        <>
                                            <IonMenuToggle auto-hide="false">
                                                <li key={index} className="rounded-sm">
                                                    <IonItem className={`items-center p-0 text-sm space-x-3 rounded-md h-15 d-block mb-0.5 ${location.pathname === appMenu.url ? 'selected font-semibold' : ""}`} routerLink={appMenu.url} routerDirection={isPlatform('desktop') ? "none" : "forward"} lines="none" detail={false}>
                                                        <IonIcon icon={appMenu.myicon} size="small" />
                                                        <span className="yz-text-color">{appMenu.title}</span>
                                                    </IonItem>
                                                </li>
                                            </IonMenuToggle></>
                                    );
                                })}

                            </ul>

                            <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                            <ul className="mt-8 pb-4 space-y-1 list-none p-0">
                                <small className="ml-3 mb-2 block">Other</small>
                                {appMenusOthers.map((AppMenuOther, index) => {
                                    return (
                                        <>
                                            <IonMenuToggle auto-hide="false">
                                                <li key={index} className="rounded-sm">
                                                    <IonItem className={`items-center p-0 text-sm space-x-3 rounded-md h-15 d-block mb-0.5 ${location.pathname === AppMenuOther.url ? 'selected font-semibold' : ""}`} routerLink={AppMenuOther.url} routerDirection={isPlatform('desktop') ? "none" : "forward"} lines="none" detail={false}>
                                                        <IonIcon icon={AppMenuOther.myicon} size="small" />
                                                        <span className="yz-text-color">{AppMenuOther.title}</span>
                                                    </IonItem>
                                                </li>
                                            </IonMenuToggle>
                                        </>
                                    );
                                })}
                            </ul>
                        </div>
                    </IonList>

                    {/* <div className="w-full left-0 z-40 absolute transition duration-150 ease-in-out bottom-0">
                        <div className="px-8 border-t flex justify-between">
                            <IonIcon icon={icons.addOutline} size="small" />
                            <IonIcon icon={icons.addOutline} size="small" />
                        </div>
                    </div> */}

                </IonContent>
            </IonMenu>
        </>
    );
};

export default Menu;