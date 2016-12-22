import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Attempt } from './attempt';
import { Score } from './score';

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
            return { guess: latestguess, result: "Low", counter:previousAttempts, correct:false }
        }
        if (latestguess == this.target) {
            return { guess: latestguess, result: "Correct", counter:previousAttempts, correct:true }
        }
        if (latestguess > this.target) {
            return { guess: latestguess, result: "High", counter:previousAttempts, correct: false }
        }
    }

    displayHighScores(score: Score, highScores: Array<Score>): Array<Score> {
        highScores.push(score);
        highScores.sort(this.compare);
        if (highScores.length > 3)
        {
            highScores = highScores.slice(0,3);
        }
        return highScores;
    }

    compare(a: Score, b: Score) {
        if (a.attempts < b.attempts)
            return -1;
        if (a.attempts > b.attempts)
            return 1;
        return 0;
    }

}


