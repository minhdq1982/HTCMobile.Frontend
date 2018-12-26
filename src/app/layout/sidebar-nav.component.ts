import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MenuItem } from '@shared/layout/menu-item';

@Component({
    templateUrl: './sidebar-nav.component.html',
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.None
})
export class SideBarNavComponent extends AppComponentBase {

    menuItems: MenuItem[] = [
        new MenuItem(this.l("Trang Chủ"), "", "widgets", "/app/dashboard"),

        new MenuItem("Tài khoản khánh hàng", "", "account_box", "/app/customers-account"),
        new MenuItem("Hội viên Hyundai", "", "group", "/app/hyundai-members"),
        new MenuItem("Thông tin đại lý", "", "info", "/app/agency-information"),
        new MenuItem("Danh sách đăng ký lái thử", "", "ballot", "list-test-driver"),
        new MenuItem("Nội dung hướng dẫn", "", "assignment", "", [
            new MenuItem("Chính sách bảo hành", "", "arrow_right_alt", "/app/warranty-information"),
            new MenuItem("Sách hướng dẫn", "", "arrow_right_alt", "/app/guide-book"),
            new MenuItem("Hướng dẫn kỹ thuật", "", "arrow_right_alt", "/app/technical-guide")
        ]),
        new MenuItem("Quản lý dịch vụ", "", "dns", "", [
            new MenuItem("Lịch hẹn dịch vụ", "", "arrow_right_alt", "/app/appointment-schedule"),
            new MenuItem("Cấp bảo dưỡng", "", "arrow_right_alt", "/app/maintenance")
        ]),
        new MenuItem("Quản lý khảo sát", "", "bar_chart", "", [
            new MenuItem("Thống kê chung", "", "arrow_right_alt", "/app/statistics-general"),
            new MenuItem("Thống kê kết quả", "", "arrow_right_alt", "/app/statistics-results"),
            new MenuItem("Danh sách khách hàng", "", "arrow_right_alt", "/app/statistics-customers"),
            new MenuItem("Cài đặt", "", "arrow_right_alt", "/app/statistics-settings")
        ]),
        new MenuItem("Thiết lập", "", "settings", "", [
            new MenuItem("Quản lý tài khoản CMS", "", "recent_actors", "/app/manage-accounts"),
            new MenuItem("Quản lý thông báo", "", "notification_important", "/app/manage-notifications"),
            new MenuItem("Giám sát hệ thống", "", "device_hub", "/app/monitoring-system"),
            new MenuItem("Khu vực", "", "arrow_right_alt", "/app/setting-districts"),
            new MenuItem("Thành phố", "", "arrow_right_alt", "/app/setting-cities"),
            new MenuItem("Newsfeed", "", "arrow_right_alt", "/app/setting-newsfeed"),
            new MenuItem("Đồng bộ dữ liệu", "", "arrow_right_alt", "/app/setting-sync-data"),
            new MenuItem("", "", "", "")
        ])
    ];

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    showMenuItem(menuItem): boolean {
        if (menuItem.permissionName) {
            return this.permission.isGranted(menuItem.permissionName);
        }

        return true;
    }
}
