import { Directive, ElementRef, OnInit } from '@angular/core';
import 'widgster';

@Directive({
  selector: '[widget]'
})
export class WidgetDirective {

   $el: any;

  constructor(el: ElementRef) {
      this.$el = jQuery2(el.nativeElement);
      jQuery2.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';

      jQuery2(document).on('close.widgster', (e) => {
      let $colWrap = jQuery2(e.target).closest(' [class*="col-"]:not(.widget-container)');
      if (!$colWrap.find('.widget').not(e.target).length) {
        $colWrap.remove();
      }
    });

      jQuery2(document).on("fullscreened.widgster", (e) => {
          jQuery2(e.target).find('div.widget-body').addClass('card-block-scrolling');
    }).on("restored.widgster", (e) => {
        jQuery2(e.target).find('div.widget-body').removeClass('card-block-scrolling');
    }); 
  }

  ngOnInit(): void {
    this.$el.widgster();
  }

}
