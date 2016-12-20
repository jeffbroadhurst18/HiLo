import { Component, OnInit } from '@angular/core';
import { HiloService } from './hilo.service';
import { Attempt } from './attempt';



@Component({
    moduleId: module.id,
    selector: 'my-hilo',
    templateUrl: 'hilo.component.html'
})

export class HiloComponent implements OnInit {
    constructor(private hiloService: HiloService) {

    }
    target: number;
    latestGuess: number;
    attempt: Attempt;
    attempts: Array<Attempt>;
    countOfAttempts: number;

    ngOnInit(): void {
        this.target = this.generateTarget();
        this.attempts = new Array<Attempt>();
        this.countOfAttempts = 0;
    }

    generateTarget(): number {
        var newTarget = this.hiloService.generateTarget();
        return newTarget;
    }

    submit(): void {
       this.attempt = this.hiloService.checkGuess(this.latestGuess, this.attempts.length);
       this.attempts.push(this.attempt);
       this.countOfAttempts = this.attempts.length;
       this.latestGuess = null;
    }
}