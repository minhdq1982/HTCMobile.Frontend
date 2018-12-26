import { Component, OnInit } from '@angular/core';
import {ExcelService} from './excel.service';

@Component({
  selector: 'app-customers-account',
  templateUrl: './customers-account.component.html',
  styleUrls: ['./customers-account.component.scss']
})
export class CustomersAccountComponent implements OnInit {
	public searchName : string;
	public searchCmnd : string;
	
	customaccount: any[] = [
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 1,
			'name': 'Lê Bá Tùng',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 2,
			'name': 'Lê Bá T',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '2133304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 3,
			'name': 'Lê Bá U',
			'phonenumber': '01635505198',
			'email': 'batung1709@mail.com',
			'cmnd': '163543304647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 4,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 5,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 6,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 7,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 8,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 9,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 10,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 11,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 12,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 13,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 14,
			'name': 'Lê Bá T',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 15,
			'name': 'Lê Bá U',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
		{
			'stt': 16,
			'name': 'Lê Bá N',
			'phonenumber': '01635543505198',
			'email': 'batung1709@mail.com',
			'cmnd': '16330423647',
			'birthday': '21/10/2018',
			'lock': 'On/Off'
		},
	]

  constructor(private excelService:ExcelService) { }

  ngOnInit() {
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.customaccount, 'sample');
  }

}
