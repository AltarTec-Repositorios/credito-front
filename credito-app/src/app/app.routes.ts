import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ConsultaNfseComponent } from './pages/consulta-nfse/consulta-nfse.component';


export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'consulta-nfse', component: ConsultaNfseComponent },
  ];
