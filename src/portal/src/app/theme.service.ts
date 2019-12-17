import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(DOCUMENT) private document: Document

  ) { }

loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
        'client-theme'
    ) as any;
    if (themeLink) {
        themeLink.href = styleName;
    } else {
        const link = this.document.createElement('link');
        link.id = 'client-theme';
        link.rel = 'stylesheet';
        link.href = `${styleName}`;

        head.appendChild(link);
    }
}
}
