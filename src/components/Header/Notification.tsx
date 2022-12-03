import { Menu, Transition } from "@headlessui/react";
import { IonToolbar, IonIcon, IonBadge, IonItem, IonLabel, IonList, isPlatform } from "@ionic/react";
import * as icons from "ionicons/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";

interface listNotification { title: string; }

const listNotifications: listNotification[] = [
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
    { title: 'Home' },
];

export default function Notification() {
    return (
        <>
            <Menu as="div" className="">
                <Menu.Button className="bg-transparent text-sm">
                    <IonToolbar className="text-center cursor-pointer">
                        <IonIcon
                            icon={icons.notificationsOutline}
                            className="text-2xl align-middle"
                        />
                    </IonToolbar>
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-1 rounded-md dark:rounded-none bg-white focus:outline-none w-80 max-h-80 overflow-auto border dark:border-gray-700">
                        <IonItem className="ion-no-padding">
                            <IonLabel className="pl-4">Notifications</IonLabel>
                            <IonBadge color="tertiary">11</IonBadge>
                        </IonItem>
                        <IonList>
                            {listNotifications.map((listNotification, index) => {
                                return (
                                    <IonItem button className="ion-no-padding hover:bg-slate-700" routerLink="/" routerDirection={isPlatform('desktop') ? "none" : "forward"}>
                                        <span className="flex px-4 py-4  text-sm text-gray-700 dark:text-white w-full h-full items-center">
                                            <img className="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                                            <p className="text-sm mx-2">
                                                <span className="font-bold">Sara Salah</span> replied on the <span className="font-bold">Upload Image</span> artical . 2m
                                            </p>
                                        </span>

                                    </IonItem>
                                );
                            })}
                        </IonList>
                    </Menu.Items>
                </Transition>
            </Menu>


        </>
    )
}