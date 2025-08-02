import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HomeComponent } from './website/pages/home/home.component';
import { AboutComponent } from './website/pages/about/about.component';
import { ContactComponent } from './website/pages/contact/contact.component';

import { DashboardComponent } from './master-admin/pages/dashboard/dashboard.component';
import { UsersComponent } from './master-admin/pages/users/users.component';
import { SettingsComponent } from './master-admin/pages/settings/settings.component';
import { BotCustomizationComponent } from './user-admin/pages/bot-customization/bot-customization.component';
import { LeadsComponent } from './user-admin/pages/leads/leads.component';
import { SupportComponent } from './user-admin/pages/support/support.component';
import { WidgetInstallationComponent } from './user-admin/pages/widget-installation/widget-installation.component';
import { BillingComponent } from './user-admin/pages/billing/billing.component';
import { BotPreviewComponent } from './user-admin/components/bot-preview/bot-preview.component';
import { WebsiteHeaderComponent } from './website/components/website-header/website-header.component';
import { WebsiteFooterComponent } from './website/components/website-footer/website-footer.component';
import { MasterHeaderComponent } from './master-admin/components/master-header/master-header.component';
import { MasterSidebarComponent } from './master-admin/components/master-sidebar/master-sidebar.component';
import { UserHeaderComponent } from './user-admin/components/user-header/user-header.component';
import { UserSidebarComponent } from './user-admin/components/user-sidebar/user-sidebar.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-admin/pages/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteLayoutComponent,
    MasterLayoutComponent,
    UserLayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    
    DashboardComponent,
    UsersComponent,
    SettingsComponent,
   
    BotCustomizationComponent,
    LeadsComponent,
    SupportComponent,
    WidgetInstallationComponent,
    BillingComponent,
    BotPreviewComponent,
    WebsiteHeaderComponent,
    WebsiteFooterComponent,
    MasterHeaderComponent,
    MasterSidebarComponent,
    UserHeaderComponent,
    UserSidebarComponent,
   UserDashboardComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
