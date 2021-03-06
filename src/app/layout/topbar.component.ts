﻿import { Component, OnInit, ViewEncapsulation, HostListener, Injector } from '@angular/core';
import { trigger,  state,  style, transition, animate } from '@angular/animations';
// import { AppSettings } from '../../../app.settings';
// import { Settings } from '../../../app.settings.model';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';

@Component({
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
    selector: 'top-bar',
    encapsulation: ViewEncapsulation.None,
      animations: [
    trigger('showInfo', [
      state('1' , style({ transform: 'rotate(180deg)' })),
      state('0', style({ transform: 'rotate(0deg)' })),
      transition('1 => 0', animate('400ms')),
      transition('0 => 1', animate('400ms'))
    ])
  ]
})
export class TopBarComponent extends AppComponentBase {
  forgot= false;
	public showHorizontalMenu:boolean = true; 
  public showInfoContent:boolean = false;
  // public settings: Settings;
  public menuItems:Array<any>;
  // constructor(public appSettings:AppSettings, public menuService:MenuService) {
  //     this.settings = this.appSettings.settings;
  //     this.menuItems = this.menuService.getHorizontalMenuItems();
  // }
  
  ngOnInit() {
    if(window.innerWidth <= 768) 
      this.showHorizontalMenu = false;
  }


  public closeSubMenus(){
    let menu = document.querySelector("#menu0"); 
    if(menu){
      for (let i = 0; i < menu.children.length; i++) {
          let child = menu.children[i].children[1];
          if(child){          
              if(child.classList.contains('show')){            
                child.classList.remove('show');
                menu.children[i].children[0].classList.add('collapsed'); 
              }             
          }
      }
    }
  }

  @HostListener('window:resize')
  public onWindowResize():void {
     if(window.innerWidth <= 768){
        this.showHorizontalMenu = false;
     }      
      else{
        this.showHorizontalMenu = true;
      }
  }

    constructor(
        injector: Injector,
        private _authService: AppAuthService
    ) {
        super(injector);
    }

    logout(): void {
        this._authService.logout();
    }
}