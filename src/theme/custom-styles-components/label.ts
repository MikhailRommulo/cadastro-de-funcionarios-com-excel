import styled from 'styled-components';

import { IonLabel } from '@ionic/react';

interface LabelProps {
  font?: string;
  weight?: number;
  size?: number;
}

export const Label = styled(IonLabel)`
  font-family: ${(props: LabelProps) => props.font || "Poppins"};
  font-weight: ${(props: LabelProps) => props.weight || 600};
  font-size: ${(props: LabelProps) => props.size || 0.9}rem;
`;