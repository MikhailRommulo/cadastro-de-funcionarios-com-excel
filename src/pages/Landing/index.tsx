import React from 'react';

import {
  IonPage,
  IonContent,
  useIonViewWillEnter,
  IonLabel,
  IonButton,
  IonCardContent
} from '@ionic/react';

import { Card } from './styles';

const Landing: React.FC = () => {

  useIonViewWillEnter(() => {

  });

  return (
    <IonPage id="landing-page">

      <IonContent color="light" fullscreen>
        <Card color="secondary">
          <IonCardContent>
            <IonLabel className="ion-text-justify">
              Cadastre vários funcionários de uma vez com uma planilha do excel.
            </IonLabel>
          </IonCardContent>
          <IonCardContent>
            <IonButton expand="block" color="light" className="ion-margin-bottom">
              <IonLabel>Entrar</IonLabel>
            </IonButton>
            <IonButton expand="block" color="tertiary">
              <IonLabel>Cadastrar</IonLabel>
            </IonButton>
          </IonCardContent>
        </Card>
      </IonContent>

    </IonPage>
  );
};

export default Landing;
