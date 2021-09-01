import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'http'
})
export class HttpPipe implements PipeTransform {

    // {{ 'http://google.com' | http: 'http://fallback.com' : true }}
    transform(value: string, fallback: string, forceHttps: boolean = false): string {
        let image = value || fallback;

        if (forceHttps) {
            if (image.indexOf('https') == -1) {
                image = image.replace('http', 'https');
            }
        }
        return image;
    }
}