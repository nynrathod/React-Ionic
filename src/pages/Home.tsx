import { useParams } from 'react-router';

import { IonContent, IonPage } from '@ionic/react';


import Layout from '@/components/Layout';

import { ReactNode } from 'react';

export default function Home({ pagetitle }: { pagetitle: ReactNode }) {

    const { name } = useParams<{ name: string; }>();
    return (
        <IonPage id="main">
            <Layout pagename={name} pagetitle={pagetitle}>
                <IonContent fullscreen>
                    {/* <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">sadj</IonTitle>
                    </IonToolbar>
                </IonHeader> */}




                </IonContent>
            </Layout>
        </IonPage>
    );
};