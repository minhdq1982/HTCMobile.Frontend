import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbpModule } from '@abp/abp.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PipesModule } from './theme/pipes/pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule } from 'angular-calendar';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ToastrModule } from 'ngx-toastr';
import { CKEditorModule } from 'ng2-ckeditor';
import { CustomerAccountFilterPipe } from './theme/pipes/search/customer-account.pipe';

import { HomeComponent } from '@app/pages/home/home.component';
import { AboutComponent } from '@app/pages/about/about.component';
import { UsersComponent } from '@app/pages/users/users.component';
import { CreateUserComponent } from '@app/pages/users/create-user/create-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { RolesComponent } from '@app/pages/roles/roles.component';
import { CreateRoleComponent } from '@app/pages/roles/create-role/create-role.component';
import { EditRoleComponent } from './pages/roles/edit-role/edit-role.component';
import { TenantsComponent } from '@app/pages/tenants/tenants.component';
import { CreateTenantComponent } from './pages/tenants/create-tenant/create-tenant.component';
import { EditTenantComponent } from './pages/tenants/edit-tenant/edit-tenant.component';
import { TopBarComponent } from '@app/layout/topbar.component';
import { TopBarLanguageSwitchComponent } from '@app/layout/topbar-languageswitch.component';
import { SideBarUserAreaComponent } from '@app/layout/sidebar-user-area.component';
import { SideBarNavComponent } from '@app/layout/sidebar-nav.component';
import { SideBarFooterComponent } from '@app/layout/sidebar-footer.component';
import { RightSideBarComponent } from '@app/layout/right-sidebar.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FullscreenComponent } from './layout/layout-component/fullscreen/fullscreen.component';
import { BreadcrumbComponent } from './layout/layout-component/breadcrumb/breadcrumb.component';

import { MessagesComponent } from './layout/layout-component/messages/messages.component';
import { UserMenuComponent } from './layout/layout-component/user-menu/user-menu.component';
import { BackTopComponent } from './layout/layout-component/back-top/back-top.component';
//theme/components
///account-customers
import { CustomersAccountComponent } from './theme/components/customers-account/customers-account.component';
import { CustomersInfoComponent } from './theme/components/customers-account/customers-info/customers-info.component';
import { PersonalInfoComponent } from './theme/components/customers-account/customers-info/personal-info/personal-info.component';
import { MembercardInfoComponent } from './theme/components/customers-account/customers-info/membercard-info/membercard-info.component';
import { CarsInfoComponent } from './theme/components/customers-account/customers-info/cars-info/cars-info.component';
///guide-technical
import { GuideBookComponent } from './theme/components/guide-content/guide-book/guide-book.component';
import { TechnicalGuideComponent } from './theme/components/guide-content/technical-guide/technical-guide.component';
import { WarrantyInformationComponent } from './theme/components/guide-content/warranty-information/warranty-information.component';
import { AgencyInformationComponent } from './theme/components/agency-information/agency-information.component';
import { UsersChartComponent } from './theme/components/dashboard/users-chart/users-chart.component';
import { UsersTestdriverComponent } from './theme/components/dashboard/users-testdriver/users-testdriver.component';
import { UsersServiceComponent } from './theme/components/dashboard/users-service/users-service.component';
import { UsersSurveyComponent } from './theme/components/dashboard/users-survey/users-survey.component';
import { ImageUploaderComponent } from './theme/components/guide-content/technical-guide/image-uploader/image-uploader.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TenantsComponent,
		CreateTenantComponent,
		EditTenantComponent,
        UsersComponent,
		CreateUserComponent,
		EditUserComponent,
      	RolesComponent,        
		CreateRoleComponent,
		EditRoleComponent,
        TopBarComponent,
        TopBarLanguageSwitchComponent,
        SideBarUserAreaComponent,
        SideBarNavComponent,
        SideBarFooterComponent,
        RightSideBarComponent,
        DashboardComponent,
        FullscreenComponent,
        BreadcrumbComponent,
        MessagesComponent,
        UserMenuComponent,
        BackTopComponent,
        GuideBookComponent,
        TechnicalGuideComponent,
        WarrantyInformationComponent,
        CustomersAccountComponent,
        AgencyInformationComponent,
        CustomersInfoComponent,
        PersonalInfoComponent,
        MembercardInfoComponent,
        CarsInfoComponent,
        CustomerAccountFilterPipe,
        UsersChartComponent,
        UsersTestdriverComponent,
        UsersServiceComponent,
        UsersSurveyComponent,
        ImageUploaderComponent,
    
    ],
    imports: [
        CommonModule,
        FormsModule,ReactiveFormsModule,
        PerfectScrollbarModule,
        NgxChartsModule,
        HttpClientModule,
        HttpModule,
        JsonpModule,
        ModalModule.forRoot(),
        AbpModule,
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule,
        NgbModule.forRoot(),
        Ng2SmartTableModule,
        PipesModule,
        NgxDatatableModule,
        CalendarModule.forRoot(),
        MultiselectDropdownModule,
        ToastrModule.forRoot(),
        CKEditorModule
    ],
    providers: [
        // provide: PERFECT_SCROLLBAR_CONFIG,
        // useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    ]
})
export class AppModule { }
