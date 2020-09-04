import styled from 'styled-components';

import { IonGrid } from '@ionic/react';

export const GridFullCenter = styled(IonGrid)`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ion-row{
    width: 100%;
  }
`;