import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-information',
  templateUrl: './agency-information.component.html',
  styleUrls: ['./agency-information.component.scss']
})
export class AgencyInformationComponent implements OnInit {
	
  agencyinfo: any[] = [
    {
        'stt': 1,
        'idagency': '13150207',
        'nameagency': 'Huyndai Giải Phóng',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 2,
        'idagency': '13151207',
        'nameagency': 'Huyndai Hà Nội',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 3,
        'idagency': '13150205',
        'nameagency': 'Huyndai Vinh',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 4,
        'idagency': '13150207',
        'nameagency': 'Huyndai Huế',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 5,
        'idagency': '13150207',
        'nameagency': 'Huyndai Thành công',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 6,
        'idagency': '13150207',
        'nameagency': 'Huyndai Giải Phóng',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 7,
        'idagency': '13150207',
        'nameagency': 'Huyndai Giải Phóng',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 8,
        'idagency': '13150207',
        'nameagency': 'Huyndai Giải Phóng',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 9,
        'idagency': '13150207',
        'nameagency': 'Huyndai Giải Phóng',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 10,
        'idagency': '13150207',
        'nameagency': 'Huyndai Giải Phóng',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 11,
        'idagency': '13150207',
        'nameagency': 'Huyndai Giải Phóng',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
    {
        'stt': 12,
        'idagency': '13150207',
        'nameagency': 'Huyndai Giải Phóng',
        'areaagency': 'Hà Nội',
        'cityagency': 'Hà Nội',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
