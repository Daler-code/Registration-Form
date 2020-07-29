import React, {lazy, Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './AppStyles';

import Spinner from './components/Spinner';

const CreditCardLink = lazy(() => import('./pages/CreditCardLink'));
const SMSCodeCheckCard = lazy(() => import('./pages/SMSCodeCheckCard'));
const PassportDataForm = lazy(() => import('./pages/PassportDataForm'));
const RegistrationSuccess = lazy(() => import('./pages/RegistrationSuccess'));


const  App = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact key='r-1' path='/' component={PassportDataForm} />
          <Route exact key='r-2' path='/credit-card' component={CreditCardLink} />
          <Route exact key='r-3' path='/sms-code-card' component={SMSCodeCheckCard} />
          <Route exact key='r-4' path='/success' component={RegistrationSuccess} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
