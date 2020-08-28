import React from 'react';

import {
  IonPage,
  IonContent,
  useIonViewWillEnter,
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react';

import { Label } from '../../theme/custom-styles-components/label';

import { Card } from './styles';

const Landing: React.FC = () => {

  useIonViewWillEnter(() => {

  });

  return (
    <IonPage id="landing-page">

      <IonContent color="light" fullscreen>
        <Card color="secondary">
          <IonCardHeader>
            <IonCardTitle>
              <Label className="ion-text-justify">
                Cadastre vários funcionários de uma vez com uma planilha do excel.
              </Label>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton expand="block" color="light" className="ion-margin-bottom">
              <Label font={'Archivo'}>Entrar</Label>
            </IonButton>
            <IonButton expand="block" color="tertiary">
              <Label font={'Archivo'}>Cadastrar</Label>
            </IonButton>
          </IonCardContent>
        </Card>
      </IonContent>

    </IonPage>
  );
};

export default Landing;
