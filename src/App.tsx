// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IonApp, IonButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSplitPane, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, isPlatform, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Router from './Router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css';
import './theme/tailwind.css';

import 'theme/custom.css';

import Menu from '@/components/Header/Menu';
import FabButton from './components/FabButton';

import * as icons from "ionicons/icons";



setupIonicReact();

const App: React.FC = () => {



    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId='main'>
                    <Menu />
                    <Router />
                    {!isPlatform('desktop') ?
                        <IonTabs>
                            <IonRouterOutlet>
                                <Router />
                            </IonRouterOutlet>
                            <IonTabBar slot="bottom" className="border-t">
                                <IonTabButton tab="tab1" className="ion-no-padding" layout="icon-top">
                                    <IonMenuButton auto-hide="false" menu="mymenu" className="relative w-full h-full">
                                        <IonIcon icon={icons.appsOutline} className="w-5 relative top-[-9px]" />
                                        <IonLabel className="text-[12px] absolute bottom-2.5">Menu</IonLabel>
                                    </IonMenuButton>
                                </IonTabButton>
                                <IonTabButton tab="tab2" href="/tab2">
                                    <IonIcon icon={icons.documentOutline} />
                                    <IonLabel>Notes</IonLabel>
                                </IonTabButton>
                                <IonTabButton tab="tab3" href="/tab3">
                                    <IonIcon icon={icons.lockClosedOutline} />
                                    <IonLabel>Password</IonLabel>
                                </IonTabButton>
                                <IonTabButton tab="tab4" href="/tab4">
                                    <IonIcon icon={icons.chatbubblesOutline} />
                                    <IonLabel>Chat</IonLabel>
                                </IonTabButton>
                            </IonTabBar>
                        </IonTabs> : ""

                    }
                </IonSplitPane>




            </IonReactRouter>
        </IonApp>
    );
};

export default App;
