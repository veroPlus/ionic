import { Component, ViewChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, Slides } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class E2EPage {
  @ViewChild(Slides) slider: Slides;

  onSlideWillChange(s: Slides) {
    console.log(`onSlideWillChange: ${s}`);
  }

  onSlideDidChange(s: Slides) {
    console.log(`onSlideDidChange: ${s}`);
  }

  onSlideDrag(s: Slides) {
    console.log(`onSlideDrag: ${s}`);
  }

  ngAfterViewInit() {
    this.slider.paginationBulletRender = (index: number, className: string) => {
      return `<span class="${className}">${index + 1}</span>`;
    };
  }
}

@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class E2EApp {
  root = E2EPage;
}

@NgModule({
  declarations: [
    E2EApp,
    E2EPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EApp,
    E2EPage
  ]
})
export class AppModule {}