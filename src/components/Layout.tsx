import { ReactNode } from "react";

import { IonApp, IonContent, IonRefresher, IonRefresherContent, isPlatform, RefresherEventDetail } from "@ionic/react";

import '../theme/variables.css'

import TopBar from "@/components/Header/TopBar";


export default function Layout({ children, pagename, pagetitle }: { children: ReactNode; pagename: ReactNode, pagetitle: ReactNode }) {

    function doRefresh(event: CustomEvent<RefresherEventDetail>) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            event.detail.complete();
        }, 2000);
    }

    return (
        <>
            <IonApp>
                {isPlatform('desktop') ?
                    <TopBar pagename={pagename} pagetitle={pagetitle} />
                    : ""
                }
                <IonContent>
                    <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>
                    <div className={`main-wrapper ${isPlatform('desktop') ? "py-4 px-4" : "pt-0"}`}>
                        <main>{children}</main>
                    </div>
                </IonContent>
            </IonApp>
        </>
    );
}
