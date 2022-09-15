import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path: 'members',
    pathMatch: 'full',
    component: MembersComponent,
  },
  {
    path:'creat',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'members'
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'members'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
