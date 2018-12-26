import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warranty-information',
  templateUrl: './warranty-information.component.html',
  styleUrls: ['./warranty-information.component.scss']
})
export class WarrantyInformationComponent implements OnInit {

  warrantyinfo: any [] = [
    {
      'intro' : 'Giới thiệu',
      'contentwar' : 'Xin chúc mừng và cảm ơn các bạn vì đã lựa chọn sử dụng một trong những chiếc xe...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Trách nhiệm của chủ xe',
      'contentwar' : '1. Kiểm tra kỹ Phiếu đăng ký bảo hành mà Đại Lý Ủy Quyền đã đăng ký cho xe của bạn...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Bảo hành xe mới',
      'contentwar' : '1. Bảo hành sẽ không được áp dụng cho bất cứ một hư hỏng, tổn thất nào xảy ra trong trường hợp xe ô tô không được bảo dưỡng định kỳ...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Thông tin cần thiết',
      'contentwar' : 'Xin chúc mừng và cảm ơn các bạn vì đã lựa chọn sử dụng một trong những chiếc xe...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Bảo dưỡng',
      'contentwar' : '1. Nơi thực hiện dịch vụ bảo hành:...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Giới thiệu',
      'contentwar' : 'LẦN BẢO DƯỠNG ĐẦU TIÊN:....',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Giới thiệu',
      'contentwar' : '1. Nơi thực hiện dịch vụ bảo hành:...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Giới thiệu',
      'contentwar' : 'Xin chúc mừng và cảm ơn các bạn vì đã lựa chọn sử dụng một trong những chiếc xe...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Giới thiệu',
      'contentwar' : 'Xin chúc mừng và cảm ơn các bạn vì đã lựa chọn sử dụng một trong những chiếc xe...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Giới thiệu',
      'contentwar' : 'Xin chúc mừng và cảm ơn các bạn vì đã lựa chọn sử dụng một trong những chiếc xe...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Giới thiệu',
      'contentwar' : 'Xin chúc mừng và cảm ơn các bạn vì đã lựa chọn sử dụng một trong những chiếc xe...',
       'timeupdate' : '01/01/2018 10:12',
    },
    {
      'intro' : 'Giới thiệu',
      'contentwar' : 'Xin chúc mừng và cảm ơn các bạn vì đã lựa chọn sử dụng một trong những chiếc xe...',
       'timeupdate' : '01/01/2018 10:12',
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
