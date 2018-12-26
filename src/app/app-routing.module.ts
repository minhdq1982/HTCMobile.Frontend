import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { TenantsComponent } from './pages/tenants/tenants.component';
import { RolesComponent } from 'app/pages/roles/roles.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';

import { CustomersAccountComponent } from 'app/theme/components/customers-account/customers-account.component';

import { WarrantyInformationComponent } from 'app/theme/components/guide-content/warranty-information/warranty-information.component';
import { GuideBookComponent } from 'app/theme/components/guide-content/guide-book/guide-book.component';
import { TechnicalGuideComponent } from 'app/theme/components/guide-content/technical-guide/technical-guide.component';
import { AgencyInformationComponent } from 'app/theme/components/agency-information/agency-information.component';
import { CustomersInfoComponent } from 'app/theme/components/customers-account/customers-info/customers-info.component';




@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'dashboard', component: DashboardComponent,  canActivate: [AppRouteGuard] },
                    //customers-account
                    { path: 'customers-account', component: CustomersAccountComponent,  canActivate: [AppRouteGuard], data: { breadcrumb: 'Tài khoản khách hàng' } },
                    { path: 'customers-info', component: CustomersInfoComponent,  canActivate: [AppRouteGuard], data: { breadcrumb: 'Tài khoản khách hàng' } },
                    //agency-infomation
                    { path: 'agency-information', component: AgencyInformationComponent,  canActivate: [AppRouteGuard], data: { breadcrumb: 'Thông tin đại lý' } },
                    //guide-content
                    { path: 'warranty-information', component: WarrantyInformationComponent,  canActivate: [AppRouteGuard], data: { breadcrumb: 'Chính sách bảo hành' } },
                    { path: 'guide-book', component: GuideBookComponent,  canActivate: [AppRouteGuard], data: { breadcrumb: 'Sách hướng dẫn' } },
                    { path: 'technical-guide', component: TechnicalGuideComponent,  canActivate: [AppRouteGuard], data: { breadcrumb: 'Hướng dẫn kỹ thuật' } },

                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
