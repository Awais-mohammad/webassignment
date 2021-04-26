import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  constructor(private breakpointObserver: BreakpointObserver,

  ) {

  }
  width = window.innerWidth;
  height = window.innerHeight;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;



  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


}