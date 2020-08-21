import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';

const Home: React.FC = () => {

  useIonViewWillEnter(() => {
    
  });

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastro de funcionários em massa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
