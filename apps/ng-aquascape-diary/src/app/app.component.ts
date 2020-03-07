import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/services/analytics.service';
import { SeoService } from './@core/services/seo.service';

@Component({
  selector: 'aquascape-diary-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  public constructor(private analytics: AnalyticsService, private seoService: SeoService) {}

  public ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
