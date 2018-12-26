import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-book',
  templateUrl: './guide-book.component.html',
  styleUrls: ['./guide-book.component.scss']
})
export class GuideBookComponent implements OnInit {

	guidebooks:any[] = [
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2018',
			'title': 'Sách hướng dẫn cho grand i10 2018',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2016',
			'title': 'Sách hướng dẫn cho grand i10 2016',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'carform': 'Grand i10 2017',
			'title': 'Sách hướng dẫn cho grand i10 2017',
			'updatetime': '01/01/2018 10:12',
		},
	]
	public ckeditorContent:string;
  	public config:any;

  constructor() {
  	this.ckeditorContent = '<div>Hey we are testing CKEditor</div>';
    this.config = {
      uiColor: '#F0F3F4',
      height: '160',
      extraPlugins: 'divarea',
      toolbarCanCollapse: true,
      toolbarGroups: [{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'paragraph' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'styles', groups: [ 'styles' ] }
      ],
      removeButtons: 'Font,PasteText,PasteFromWord,Save,Templates,Blockquote,CreateDiv,Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,Print,Templaces,CopyFormatting,RemoveFormat'
    };
  }

   onChange(event: any) {
    setTimeout(() => {
      this.ckeditorContent = event;
    });
  }
  onReady(event: any) { }
  onFocus(event: any) { 
      console.log("editor is focused");
  }
  onBlur(event: any) {
  }

  ngOnInit() {
  }

}
