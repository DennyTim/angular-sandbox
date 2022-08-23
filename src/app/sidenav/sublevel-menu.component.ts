import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import {
  Component,
  Input
} from "@angular/core";
import { Router } from "@angular/router";
import {
  fadeInOut,
  INavbarData
} from "./helper";

@Component({
  selector: "app-sublevel-menu",
  template: `
    <ul
      *ngIf="collapsed && data.items && data.items.length > 0"
      class="sublevel-nav"
      [@submenu]="
        expanded
        ? {
            value: 'visible',
            params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '*'
            }
        }
        : {
            value: 'hidden',
            params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '0'
            }
        }
      "
    >
      <li
        *ngFor="let item of data.items"
        class="sublevel-nav-item"
      >
        <a
          *ngIf="item.items && item.items.length > 0"
          class="sublevel-nav-link"
          [class.active-sublevel]="item.expanded && router.url.includes(data.routerLink)"
          (click)="handleClick(item)"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span
            @fadeInOut
            *ngIf="collapsed"
            class="sublevel-link-text"
          >{{item.label}}</span>
          <i
            *ngIf="item.items && collapsed"
            class="menu-collapse-icon"
            [ngClass]="!item.expanded ? 'fa fa-angle-right' : 'fa fa-angle-down'"
          ></i>
        </a>
        <a
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          class="sublevel-nav-link"
          routerLinkActive="active-sublevel"
          [routerLink]="[item.routerLink]"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span
            @fadeInOut
            *ngIf="collapsed"
            class="sublevel-link-text"
          >{{ item.label }}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
          ></app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ["./sidenav.component.scss"],
  animations: [
    fadeInOut,
    trigger("submenu", [
      state("hidden", style({
        height: "0",
        overflow: "hidden"
      })),
      state("visible", style({
        height: "*"
      })),
      transition("visible <=> hidden", [
        style({ overflow: "hidden" }),
        animate("{{transitionParams}}")
      ]),
      transition("void => *", animate(0))
    ])
  ]
})
export class SublevelMenuComponent {
  @Input() public collapsed = false;
  @Input() public animating: boolean | undefined;
  @Input() public expanded: boolean | undefined;
  @Input() public multiple: boolean = false;
  @Input() public data: INavbarData = {
    routerLink: "",
    icon: "",
    label: "",
    items: []
  };

  constructor(public router: Router) {
  }

  handleClick(item: INavbarData): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
