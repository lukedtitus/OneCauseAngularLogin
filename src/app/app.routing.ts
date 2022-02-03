import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';

const routes: Routes = [
    { path: '', component: LoginComponent },
];

export const appRoutingModule = RouterModule.forRoot(routes);