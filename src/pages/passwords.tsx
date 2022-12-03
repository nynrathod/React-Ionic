import { ReactNode, useRef, useState } from 'react';

import { IonAvatar, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonPopover, IonProgressBar, IonSearchbar, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import * as icons from "ionicons/icons";

import Layout from '@/components/Layout';

interface listRow { title: string; }

const listRows: listRow[] = [
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


export default function Passwords({ pagetitle }: { pagetitle: ReactNode }) {

    // Searchbar
    const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City', 'Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City', 'Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
    let [listRows, setListRows] = useState([...data]);

    const searchItem = (ev: Event) => {
        let query = "";
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();

        setListRows(data.filter(d => d.toLowerCase().indexOf(query) > -1));
    }

    // Modal
    const [isOpen, setIsOpen] = useState(false);
    const openModal = async (e: any) => {
        setIsOpen(true);
        const myd = e;
        console.log(myd);

    };

    // Show Password
    const [showPassword, setShowPassword] = useState(false)

    // Popover
    const popover = useRef<HTMLIonPopoverElement>(null);
    const [popoverOpen, setPopoverOpen] = useState(false);


    const openPopover = async (e: any) => {
        // const myd = e;
        // console.log(myd);
        popover.current!.event = e;
        setPopoverOpen(true);
    };

    return (
        <IonPage id="main">
            <Layout pagename={'Password'} pagetitle={pagetitle}>
                <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
                    <IonContent className="ion-no-padding">
                        <IonItem>
                            <IonLabel>Edit app</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Copy Password</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Copy Username</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Copy Password</IonLabel>
                        </IonItem>
                    </IonContent>
                </IonPopover>

                <IonModal isOpen={isOpen} backdrop-dismiss="false" className={`${isPlatform('desktop') ? "new-password-modal" : ""}`}>

                    <div className="wrapper dark:bg-[#1f2936]">
                        <IonHeader>
                            <div className="border-b border-gray-200 dark:border-gray-600 py-3">
                                <IonTitle className="text-lg">
                                    Add New Login
                                </IonTitle>
                                <span className="dark:text-white bg-gray-200 hover:bg-gray-300 text-gray-900 outline-none dark:bg-gray-600 dark:hover:bg-gray-700 absolute right-3 rounded top-3 px-0 cursor-pointer" onClick={() => setIsOpen(false)}>
                                    <IonIcon
                                        icon={icons.closeOutline}
                                        className="align-middle text-2xl"
                                    />
                                </span>
                            </div>
                        </IonHeader>

                        <form className="w-full p-4">
                            <div className="md:flex mb-5 w-full">
                                <div className="relative w-full md:pr-3">
                                    <input className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 dark:text-white dark:border-none dark:bg-[#111827] rounded py-3 px-4 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="App or Site Name" />
                                </div>
                                <div className="relative w-full md:pl-3">
                                    <input className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 dark:text-white dark:border-none dark:bg-[#111827] rounded py-3 px-4 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="App URL" />
                                    <IonIcon
                                        icon={icons.globeOutline}
                                        className="absolute top-0.5 right-3.5 transform dark:text-gray-200 bg-white dark:bg-[#111827] pl-2 py-3" />
                                </div>
                            </div>
                            <div className="mb-5 w-full">
                                <div className="relative w-full">
                                    <input className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 dark:text-white dark:border-none dark:bg-[#111827] rounded py-3 px-4 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="Username or Email" required />
                                    <IonIcon icon={icons.at} className="absolute top-0.5 right-3.5 transform dark:text-gray-200 bg-white dark:bg-[#111827] pl-2 py-3" />
                                </div>
                            </div>
                            <div className="mb-5 w-full">
                                <div className="relative w-full">
                                    <input className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 dark:text-white dark:border-none dark:bg-[#111827] rounded py-3 px-4 leading-tight outline-none ease-in-out duration-300 text-sm" placeholder="Password" type={showPassword ? 'text' : 'password'} />
                                    {showPassword ?
                                        <IonIcon icon={icons.eyeOffOutline} onClick={() => setShowPassword(!showPassword)} className="absolute top-0.5 right-3.5 transform dark:text-gray-200 bg-white dark:bg-[#111827] pl-2 py-3" />
                                        : <IonIcon icon={icons.eyeOutline} onClick={() => setShowPassword(!showPassword)} className="absolute top-0.5 right-3.5 transform dark:text-gray-200 bg-white dark:bg-[#111827] pl-2 py-3" />}

                                </div>
                            </div>

                            <div className="mb-5 w-full">
                                <div className="relative w-full">
                                    <textarea className="appearance-none block w-full text-gray-700 yz-b focus:border-gray-700 dark:text-white dark:border-none dark:bg-[#111827] rounded py-3 px-4 leading-tight outline-none ease-in-out duration-300 text-sm h-20" placeholder="Note"></textarea>
                                </div>
                            </div>

                            <div className="mb-2 w-full text-center">
                                <IonButton type="submit" size="large" color="undefined" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 capitalize" id="open-custom-dialog" expand="block">
                                    <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                    </svg>
                                    Saving...
                                </IonButton>

                            </div>

                        </form>
                    </div>
                </IonModal>

                <IonToolbar className="yz-shadow border yz-b rounded-md">
                    <IonToolbar className="border-b py-3 pr-3 yz-b-bottom">
                        {isPlatform('desktop') ?
                            <>
                                {/* <IonButton slot="end" size="large" color="undefined" className="text-gray-800 dark:text-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 capitalize rounded-none outline dark:outline-none">
                                    <IonIcon icon={icons.shareSocialOutline} className="mr-2"></IonIcon>
                                    Share
                                </IonButton> */}

                                <IonButton slot="end" size="large" color="undefined" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 capitalize" onClick={() => setIsOpen(true)} expand="block">
                                    <IonIcon icon={icons.addOutline} className="mr-2"></IonIcon>
                                    New Passwords
                                </IonButton>
                            </>
                            : ""}
                        <IonSearchbar onIonChange={(ev) => searchItem(ev)} className="shadown-none" placeholder="Search you apps here...." />
                    </IonToolbar>

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="ion-justify-content-between ion-align-items-center yz-color-theme">
                            <tr>
                                <th className="p-4 w-96">
                                    <IonCol className="p-0">
                                        App Item
                                    </IonCol>
                                </th>
                                {isPlatform('desktop') ?
                                    <>
                                        <th className="w-60">
                                            <IonCol className="p-0">
                                                Password Strength
                                            </IonCol>
                                        </th>
                                        <th className="w-60">
                                            <IonCol className="p-0">
                                                Last Accessed
                                            </IonCol>
                                        </th>
                                    </>
                                    : ""}
                                <th className={`${isPlatform('desktop') ? "W-30" : "W-20"} `}>
                                    <IonCol className="p-0">
                                        Action
                                    </IonCol>
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {listRows.map((listRow, index) => {
                                return (
                                    <tr className="yz-b-bottom cursor-pointer yz-hover">
                                        <td className="pl-4 py-3" onClick={() => openModal(index)}>
                                            <IonItem lines="none" className='ion-no-padding'>
                                                <IonAvatar><img src='https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA' alt="profilepic" /></IonAvatar>
                                                <IonLabel className="pl-5">
                                                    <h5>{listRow}</h5>
                                                    <p>This is short desc</p>
                                                </IonLabel>
                                            </IonItem>

                                        </td>
                                        {isPlatform('desktop') ?
                                            <>
                                                <td onClick={() => setIsOpen(true)}>
                                                    <IonItem lines="none" className='ion-no-padding'>
                                                        <IonLabel>
                                                            <IonProgressBar color={index === 1 || index === 4 || index === 6 || index === 10 ? "success" : 'secondary'} value={1} className="w-2/4 h-2 rounded-md mb-2" />
                                                            <p>{index === 1 || index === 4 || index === 6 || index === 10 ? "Strong" : 'need to improve'}</p>
                                                        </IonLabel>
                                                    </IonItem>
                                                </td>

                                                <td onClick={() => setIsOpen(true)}>
                                                    <IonItem lines="none" className='ion-no-padding'>
                                                        <IonLabel>
                                                            <p>2 days ago</p>
                                                        </IonLabel>
                                                    </IonItem>
                                                </td>
                                            </>
                                            : ""}
                                        <td>
                                            <IonItem lines="none" className='ion-no-padding'>
                                                <IonIcon icon={icons.settingsOutline} className="mr-6 cursor-pointer" onClick={() => openPopover(index)} />
                                                {isPlatform('desktop') ?
                                                    <IonButton size="large" fill="outline" className="mr-4 text-xs yz-onhover ease-in-out duration-300">
                                                        Go to App
                                                        <IonIcon icon={icons.openOutline} className="pl-2" />
                                                    </IonButton>
                                                    : ""}
                                            </IonItem>
                                        </td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </IonToolbar>
            </Layout>
        </IonPage >
    );
};
