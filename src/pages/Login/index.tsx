import React from 'react';

import { IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, IonContent } from '@ionic/react';
import { Label } from '../../theme/custom-styles-components/label';

const Login: React.FC = () => {
  return (
    <IonPage id="register-page">
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            <Label size={1.25}>Entrar</Label>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">

      </IonContent>
    </IonPage>
  );
}

export default Login;