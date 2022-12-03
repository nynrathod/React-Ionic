import React from 'react';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';

import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('begin');

    setTimeout(() => {
        console.log('end');
        event.detail.complete();
    }, 2000);
}

const Tab1: React.FC = () => {
    return (
        <IonContent>
            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                <IonRefresherContent
                    pullingIcon={chevronDownCircleOutline}
                    pullingText="Pull to refresh"
                    refreshingSpinner="circles"
                    refreshingText="Refreshing...">
                </IonRefresherContent>
            </IonRefresher>
        </IonContent>
    );
};

export default Tab1;