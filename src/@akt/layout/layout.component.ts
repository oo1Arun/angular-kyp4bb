import { Component, OnInit,ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { SidebarService } from '../../@akt/services/side-bar/sidebar.service';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  open = false;
  //@ViewChild('isOpen') public isOpen;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(private _sidebarService: SidebarService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this._sidebarService.change.subscribe(isOpen => {
      this.open = isOpen;
      //console.log(this.open);
    });
  }
}
