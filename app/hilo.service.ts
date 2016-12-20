import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Attempt } from './attempt';

@Injectable()
export class HiloService {
    target: number;

    constructor() {
       
    }

    generateTarget(): number {
        this.target = Math.floor((Math.random() * 100) + 1);
        return this.target;
    }

    checkGuess(latestguess: number, previousAttempts: number): Attempt {
        previousAttempts++;
        if (latestguess < this.target) {
            return { guess: latestguess, result: "Low", counter:previousAttempts }
        }
        if (latestguess == this.target) {
            return { guess: latestguess, result: "Correct", counter:previousAttempts }
        }
        if (latestguess > this.target) {
            return { guess: latestguess, result: "High", counter:previousAttempts }
        }
    }



}


