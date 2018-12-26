import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-guide',
  templateUrl: './technical-guide.component.html',
  styleUrls: ['./technical-guide.component.scss']
})
export class TechnicalGuideComponent implements OnInit {

	technicalguide: any[] = [
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
			'updatetime': '01/01/2018 10:12',
		},
		{
			'category': 'Hướng dẫn sử dụng hệ thống AVN',
			'content': 'Hyundai Thành Công xin giới thiệu đến quý khách hàng video hướng dẫn sử dụng hệ thống AVN....',
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
