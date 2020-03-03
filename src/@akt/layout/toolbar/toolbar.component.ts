import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SidebarService } from '../../services/side-bar/sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn: boolean = this._auth.isLoggedIn();

  constructor(private _sideBarService: SidebarService, public _auth: AuthService) { }
  ngOnInit(): void {

  }
  
  toggleSidebar() {
    this._sideBarService.toggle();
    //console.log(this._sideBarService.toggle());
  }

}