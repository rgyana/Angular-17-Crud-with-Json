import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  sidePanelDetails: any[] = [];
  selectedLabel: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sidePanelDetails = [
      { labelId: '1', icon: 'pi-th-large', label: 'Dashboard', route: '/dashboard' },
      { labelId: '2', icon: 'pi-users', label: 'Posts', route: '/index' },
      { labelId: '2', icon: 'pi-cog', label: 'Settings', route: '/' }
    ]
  }

  selectLabel(item: any): void {
    this.selectedLabel = item;
    this.router.navigate([item.route]);
  }

}
