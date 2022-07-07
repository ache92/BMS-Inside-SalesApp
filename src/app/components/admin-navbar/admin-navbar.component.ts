import { Component, OnInit  } from '@angular/core';
import { DataService } from '../../services/services.service';
import { Observable } from 'rxjs';
import { UsersService } from "../../services/auth.service";
@Component({
    selector: 'admin-navbar-component',
    templateUrl: './admin-navbar.component.html',
    styleUrls: ['./admin-navbar.component.css',
    '../../css/neumorphism.component.css'],
})

export class AdminNavbarComponent implements OnInit {


    public adminMenuTabs: any;
    public activeItem: any;

    constructor(private DataService: DataService, private usersService: UsersService) { }

    ngOnInit() {
  
        this.DataService.getNavbarData().subscribe(

            response => {

                this.adminMenuTabs = response.adminMenu_tabs
                this.activeItem = this.adminMenuTabs[0];

            },
            error => {
                console.error(error)
            }
        )

      }
      
      log(val: any) { console.log(val); }
      
  }

  