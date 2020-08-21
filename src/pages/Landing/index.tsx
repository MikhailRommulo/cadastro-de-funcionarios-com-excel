import React from 'react';

import {
  IonContent,
  IonPage,
  useIonViewWillEnter
} from '@ionic/react';

const Landing: React.FC = () => {

  useIonViewWillEnter(() => {
    
  });

  return (
    <IonPage id="landing-page">

      <IonContent fullscreen>
       
      </IonContent>
    </IonPage>
  );
};

export default Landing;
