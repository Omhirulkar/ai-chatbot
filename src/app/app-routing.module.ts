import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

import { HomeComponent } from './website/pages/home/home.component';
import { AboutComponent } from './website/pages/about/about.component';
import { ContactComponent } from './website/pages/contact/contact.component';

import { DashboardComponent as MasterDashboard } from './master-admin/pages/dashboard/dashboard.component';
import { UsersComponent } from './master-admin/pages/users/users.component';
import { SettingsComponent } from './master-admin/pages/settings/settings.component';

import { BotCustomizationComponent } from './user-admin/pages/bot-customization/bot-customization.component';
import { LeadsComponent } from './user-admin/pages/leads/leads.component';
import { SupportComponent } from './user-admin/pages/support/support.component';
import { WidgetInstallationComponent } from './user-admin/pages/widget-installation/widget-installation.component';
import { BillingComponent } from './user-admin/pages/billing/billing.component';
import { UserDashboardComponent } from './user-admin/pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  {
    path: 'master-admin',
    component: MasterLayoutComponent,
    children: [
      { path: '', component: MasterDashboard },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  {
    path: 'admin',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserDashboardComponent },
       { path: 'home', component: UserDashboardComponent },
      { path: 'bot-customization', component: BotCustomizationComponent },
      { path: 'leads', component: LeadsComponent },
      { path: 'support', component: SupportComponent },
      { path: 'widget-installation', component: WidgetInstallationComponent },
      { path: 'billing', component: BillingComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
