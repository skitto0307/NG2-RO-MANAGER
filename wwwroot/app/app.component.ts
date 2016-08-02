import { Component } from '@angular/core';

import {TMPL_VERSION} from "./shared/index";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html' + TMPL_VERSION
})
export class AppComponent {

}
