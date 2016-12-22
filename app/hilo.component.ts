import { Component, OnInit } from '@angular/core';
import { HiloService } from './hilo.service';
import { Attempt } from './attempt';
import { Score } from './score';

@Component({
    moduleId: module.id,
    selector: 'my-hilo',
    templateUrl: 'hilo.component.html',
    styleUrls: ['hilo.component.css'],
})

export class HiloComponent implements OnInit {
    constructor(private hiloService: HiloService) {

    }
    target: number;
    latestGuess: number;
    attempt: Attempt;
    attempts: Array<Attempt>;
    countOfAttempts: number;
    correctAnswer: boolean;
    highScores: Array<Score>;
    latestScore: Score;
    personName: string;


    ngOnInit(): void {
        this.newGame();
        this.highScores = new Array<Score>();
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
        this.correctAnswer = this.attempt.correct;
    }

    displayHighScores(): void {
        this.latestScore = { name: this.personName, attempts: this.countOfAttempts }
        this.highScores = this.hiloService.displayHighScores(this.latestScore, this.highScores)
        this.newGame();
    }

    newGame(): void {
        this.target = this.generateTarget();
        this.attempts = new Array<Attempt>();
        this.countOfAttempts = 0;
        this.correctAnswer = false;
        this.latestScore = null;
        this.personName = null;
    }
}