import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router"; 
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-breadcrumb',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
    public pageTitle:string;
    public breadcrumbs: {
        name: string;
        url: string
    }[] = [];

    constructor(public router: Router, 
                public activatedRoute: ActivatedRoute,                
                public title:Title) {
        
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];                
                this.parseRoute(this.router.routerState.snapshot.root); 
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' > ' + breadcrumb.name;
                })
            }
        })     
    }

    parseRoute(node: ActivatedRouteSnapshot) { 
        if (node.data['breadcrumb']) {
            if(node.url.length){
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                }) 
            }         
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
}