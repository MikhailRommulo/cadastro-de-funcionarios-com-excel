import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Landing from './pages/Landing/index';
import Register from './pages/Register/index';
import Login from './pages/Login/index';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import GlobalStyle from './theme/globalStyle';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/landing" component={Landing} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/landing" />} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </IonRouterOutlet>
    </IonReactRouter>
    <GlobalStyle />
  </IonApp>
);

export default App;
