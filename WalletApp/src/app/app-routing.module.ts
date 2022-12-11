import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicGuard, SecurityGuard} from '@security/guard';
import {FabianCompComponent} from "./modules/fabian-comp/fabian-comp.component";
import {TestsComponent} from "./modules/tests/tests.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [SecurityGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'account',
    canActivate: [PublicGuard],
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  },
  {
    path: 'test',
    component: FabianCompComponent
  },
  {
    path: 'test2',
    component: TestsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
