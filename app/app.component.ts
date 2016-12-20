import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <my-hilo></my-hilo>`
})
export class AppComponent {
    title = 'Guess the number';
}
