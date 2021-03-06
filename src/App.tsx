import * as React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ActionAutorenew from 'material-ui/svg-icons/action/autorenew';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';

import { Prescription } from './lib/Prescription';
import { Store, StoreStatus } from './lib/Store';

import { AddIngredientDialog } from './components/AddIngredientDialog';
import { PrescriptionFormView } from './components/PrescriptionFormView';
import { ResetPrescriptionFormDialog } from './components/ResetPrescriptionFormDialog';

import { environment } from './environments/environment';

import './App.css';

const store = new Store();

export class App extends React.Component {
  constructor(props: any) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <AppBar
              title={environment.appName}
              iconElementLeft={<IconButton onClick={store.prescriptionFormStore.openResetDialog}>
                                <ActionAutorenew style={{color: 'white'}} />
                              </IconButton>}
            />
          </div>

          <PrescriptionFormView store={store} />

          <ResetPrescriptionFormDialog prescriptionFormStore={store.prescriptionFormStore} />
          <AddIngredientDialog store={store} />
        </div>
      </MuiThemeProvider>
    );
  }
}
