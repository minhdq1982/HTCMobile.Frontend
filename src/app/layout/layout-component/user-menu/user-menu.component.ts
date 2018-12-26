import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent extends AppComponentBase implements OnInit {

	shownLoginName: string = "";
	
  constructor(
        injector: Injector,
    ) {
        super(injector);
    }

  ngOnInit() {
        this.shownLoginName = this.appSession.getShownLoginName();
    }

}
