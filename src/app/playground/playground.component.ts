import { animate, state, style, transition, trigger } from '@angular/animations';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { AngularTechnologyComponent } from './angular-technology/angular-technology.component';
import { CicdTechnologyComponent } from './cicd-technology/cicd-technology.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  animations: [
    trigger('ntm', [
      state('start', style({ 'margin-right': '*' })),
      state('hover', style({ 'margin-right': '45px' })),
      transition('* => hover',  animate('0.3s ease-out', style({ 'margin-right': '45px' }))),
      transition('* => start',  animate('0.3s ease-out')),
    ]),
    trigger('shadow', [
      state('start', style({ 'box-shadow': '6px 6px 0 black' })),
      state('hover', style({ 'box-shadow': '10px 10px 0 #FBC638' }))
    ]),
    trigger('changeSize', [
      state('initial', style({
        width: '0px',
        height: '0px'
      })),
      state('in_transition', style({
        width: '0px',
        height: '0px'
      })),
      state('final', style({
        width: '*',
        height: '*'
      })),
      transition('*=>final', animate('1200ms')),
      transition('final=>*', animate('1200ms'))
    ])
  ]
})
export class PlaygroundComponent implements OnInit {

  public states = {
    INITIAL: 'initial',
    FINAL: 'final',
    IN_TRANSITION: 'in_transition',
  };


  public angularClicked = false;
  public angularActive = false;
  public cicdClicked = false;
  public cicdActive = false;
  public selectedPortal: Portal<any>;
  public currentState = this.states.INITIAL;



  constructor() { }

  clickAngular() {
    this.angularClicked = true;
    setTimeout(() => this.angularClicked = false, 300);

    if (this.cicdActive) {
      this.currentState = this.states.IN_TRANSITION;
    } else if (this.angularActive) {
      this.currentState = this.states.INITIAL;
    } else {
      this.angularActive = !this.angularActive;
      this.selectedPortal = new ComponentPortal(AngularTechnologyComponent);
      this.currentState = this.states.FINAL;
    }
  }

  clickCicd() {
    this.cicdClicked = true;
    setTimeout(() => this.cicdClicked = false, 300);

    if (this.angularActive) {
      this.currentState = this.states.IN_TRANSITION;
    } else if (this.cicdActive) {
      this.currentState = this.states.INITIAL;
    } else {
      this.cicdActive = !this.cicdActive;
      this.selectedPortal = new ComponentPortal(CicdTechnologyComponent);
      this.currentState = this.states.FINAL;
    }
  }

  animationDone(event) {
    if (event.toState === this.states.INITIAL) {
      this.cicdActive = false;
      this.angularActive = false;
      this.selectedPortal = null;
    } else if (event.toState === this.states.IN_TRANSITION) {
      const futureState = [!this.cicdActive, !this.angularActive];
      this.cicdActive = false;
      this.angularActive = false;
      setTimeout(() => {
        this.currentState = this.states.FINAL;
        [this.cicdActive, this.angularActive] = futureState;
        if (this.cicdActive) {
          this.selectedPortal = new ComponentPortal(CicdTechnologyComponent);
        } else if (this.angularActive) {
          this.selectedPortal = new ComponentPortal(AngularTechnologyComponent);
        }
      }, 0);
      // TODO: complete
    }
  }

  ngOnInit() {
  }
}
