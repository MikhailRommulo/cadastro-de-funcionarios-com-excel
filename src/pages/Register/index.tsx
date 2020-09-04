import React from 'react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonContent,
  IonRow,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonList
} from '@ionic/react';

import { addOutline } from 'ionicons/icons';

import { Label } from '../../theme/custom-styles-components/label';
import { GridFullCenter } from '../../theme/custom-styles-components/grid-full-center';

const Register: React.FC = () => {
  return (
    <IonPage id="register-page">
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            <Label size={1.25}>Cadastro</Label>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <GridFullCenter>
          <IonRow className="ion-justify-content-center">
            <IonCard>
              <IonCardContent>
                <IonItem>
                  <Label position="floating">Nome</Label>
                  <IonInput clearInput></IonInput>
                </IonItem>
                <IonItem>
                  <Label position="floating">CPF</Label>
                  <IonInput clearInput></IonInput>
                </IonItem>
                <IonItem>
                  <Label position="floating">Senha</Label>
                  <IonInput clearInput></IonInput>
                </IonItem>
                <IonItem>
                  <Label position="floating" className="ion-text-wrap" size={0.25}>Confirmação de senha</Label>
                  <IonInput clearInput></IonInput>
                </IonItem>
                <IonItem lines="none">
                  <Label>Endereço</Label>
                  <IonButton color="secondary" fill="outline"><Label><IonIcon icon={addOutline}/></Label></IonButton>
                </IonItem>
                <IonList>
                  <IonItem>
                    <Label position="floating">CEP</Label>
                    <IonInput clearInput></IonInput>
                  </IonItem>
                  <IonItem>
                    <Label position="floating">Logradouro</Label>
                    <IonInput clearInput></IonInput>
                  </IonItem>
                  <IonItem>
                    <Label position="floating">Número</Label>
                    <IonInput clearInput></IonInput>
                  </IonItem>
                  <IonItem>
                    <Label position="floating">Complemento</Label>
                    <IonInput clearInput></IonInput>
                  </IonItem>
                  <IonItem>
                    <Label position="floating">Bairro</Label>
                    <IonInput clearInput></IonInput>
                  </IonItem>
                  <IonItem>
                    <Label position="floating">Cidade</Label>
                    <IonInput clearInput></IonInput>
                  </IonItem>
                  <IonItem>
                    <Label position="floating">Estado</Label>
                    <IonInput clearInput></IonInput>
                  </IonItem>
                  <IonItem>
                    <Label position="floating">País</Label>
                    <IonInput clearInput></IonInput>
                  </IonItem>
                </IonList>
                
                  <IonButton color="secondary" expand="block">
                    <Label>
                      Cadastrar
                    </Label>
                  </IonButton>
              </IonCardContent>
            </IonCard>
          </IonRow>
        </GridFullCenter>
      </IonContent>
    </IonPage>
  );
}

export default Register;