import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {Subscription} from "rxjs";
import {BackgroundImageService, OverviewContentInformationService} from "../data-service/data-service.component";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    NgClass,
    NgStyle
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})

export class OverviewComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  sections: any[] = [];
  backgroundImageUrl: string = '';

  constructor(
    private overviewContentInformationService: OverviewContentInformationService,
    private backgroundImageService: BackgroundImageService
  ) { }

  ngOnInit(): void {
    // Subscribe to data streams and push the data into the sections array for rendering
    this.subscriptions.push(this.overviewContentInformationService.personalInformation$.subscribe(data => {
      this.sections.push(data);
    }));
    this.subscriptions.push(this.overviewContentInformationService.projects$.subscribe(data => {
      this.sections.push(data);
    }));
    this.subscriptions.push(this.overviewContentInformationService.work$.subscribe(data => {
      this.sections.push(data);
    }));
    this.subscriptions.push(
      this.backgroundImageService.backgroundImageOverviewThree$.subscribe(url => {
        this.backgroundImageUrl = url;
      })
    );
  }

  getContentArray(content: string | string[]): string[] {
    // Helper method to ensure content is always an array
    return Array.isArray(content) ? content : [content];
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


}
