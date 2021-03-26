import { TranslateService } from "@ngx-translate/core";

export function routeLanguage(translate: TranslateService, value?) {
    if (value && value.toLowerCase() == 'en-us') {
        translate.use('en-us');
    } else {
        translate.use('pt-br');
    }
}