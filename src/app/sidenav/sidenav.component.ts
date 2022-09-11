import {
  animate,
  keyframes,
  style,
  transition,
  trigger
} from "@angular/animations";
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { Router } from "@angular/router";
import {
  fadeInOut,
  INavbarData
} from "./helper";
import { navbarData } from "./nav-data";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
  animations: [
    fadeInOut,
    trigger("rotate", [
      transition(":enter", [
        animate("1000ms", keyframes([
          style({ transform: "rotate(0deg)", offset: "0" }),
          style({ transform: "rotate(2turn)", offset: "1" })
        ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @Output() public handleToggle = new EventEmitter<{
    screenWidth: number;
    collapsed: boolean
  }>();

  @Input()
  public collapsed = false;
  public screenWidth = 0;
  public navData = navbarData;
  public multiple: boolean = false;

  @HostListener("window:resize", ["$event"])
  public onResize($event: Event): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.handleToggle.emit({
        screenWidth: this.screenWidth,
        collapsed: this.collapsed
      });
    }
  }

  constructor(public router: Router) {
  }

  public ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  public toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.handleToggle.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed
    });
  }

  public closeSidebar(): void {
    this.collapsed = false;
    this.handleToggle.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed
    });
  }

  public handleClick(item: INavbarData): void {
    this.shrinkItem(item);
    item.expanded = !item.expanded;
  }

  public shrinkItem(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
