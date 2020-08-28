import { Label } from './../../theme/custom-styles-components/label';
import styled from 'styled-components';

import { IonCard } from '@ionic/react';

export const Card = styled(IonCard)`
  position: absolute;
  height: 35vh;
  top: 32.5vh;

  @media (min-width: 768px) {
    left: 35vw;
    width: 30vw;
    ion-card-title {
      ion-Label {
        font-size: 1.5rem;
      }
    }
    ion-card-content {
      top: 30%;
      ion-button {
        width: 40%;
        display: inline-block;
        margin: 0 5%;
      }
    }
  }
`;

