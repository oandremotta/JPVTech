import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PessoasFisicasPageRoutingModule } from './pessoas-fisicas/pessoas-fisicas-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pessoas-fisicas/pessoas-fisicas.module').then(m => m.PessoasFisicasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PessoasFisicasPageRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
