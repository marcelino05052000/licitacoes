import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdicionarComponent} from "./adicionar/adicionar.component";
import {ListarComponent} from "./listar/listar.component";
import {EditarComponent} from "./editar/editar.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'editar', component: EditarComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
