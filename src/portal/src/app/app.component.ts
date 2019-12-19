// Copyright Project Harbor Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie';

import { SessionService } from './shared/session.service';
import { AppConfigService } from './app-config.service';
import { ThemeService } from './theme.service';
import { themeArray, ThemeInterface } from './theme';
import { clone } from '../lib/utils/utils';

const HAS_STYLE_MODE: string = 'styleModeLocal';

@Component({
    selector: 'harbor-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    themeArray: ThemeInterface[] = clone(themeArray);

    styleMode: string = this.themeArray[0].showStyle;
    constructor(
        private translate: TranslateService,
        private cookie: CookieService,
        private session: SessionService,
        private appConfigService: AppConfigService,
        private titleService: Title,
        public theme: ThemeService

        ) {
        // Override page title
        let key: string = "APP_TITLE.HARBOR";
        if (this.appConfigService.isIntegrationMode()) {
            key = "APP_TITLE.REG";
        }

        translate.get(key).subscribe((res: string) => {
            this.titleService.setTitle(res);
        });

    function themeObject() {
        this.hasStyleMode = 'styleModeLocal';
        this.themeArray = [
            {
                showStyle: 'LIGHT',
                currentFileName: 'light-theme.css', 
            },
            {
                showStyle: 'DARK',
                currentFileName: 'dark-theme.css',
            },

            {
                showStyle: 'CUSTOM',
                currentFileName: 'customer.css',
            },
        ];
    }
    themeObject.prototype.loadStyle = function (styleName) {
        var head = document.getElementsByTagName('head')[0];
        var themeLink: any = document.getElementById(
            'client-theme'
        );
        if (themeLink) {
            themeLink.href = styleName;
        } else {
            var style = document.createElement('link');
            style.id = 'client-theme';
            style.rel = 'stylesheet';
            style.href = `${styleName}`;
            head.appendChild(style);
        }
    }
    themeObject.prototype.setTheme = function () {
        var styleMode = this.themeArray[0].showStyle;
        var localHasStyle = localStorage && localStorage.getItem(this.hasStyleMode);
        if (localHasStyle) {
            styleMode = localStorage.getItem(this.hasStyleMode);
        } else {
            localStorage.setItem(this.hasStyleMode, styleMode);
        }
        this.themeArray.forEach((themeItem) => {
            if (themeItem.showStyle === styleMode) {
                this.loadStyle(themeItem.currentFileName);
            }
        })
    }
    new themeObject().setTheme();

    }
}
