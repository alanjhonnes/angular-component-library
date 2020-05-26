import { NgModule, DoBootstrap, ApplicationRef, Injector } from '@angular/core';
import { MjvComponentLibraryComponent } from './mjv-component-library.component';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [MjvComponentLibraryComponent],
  imports: [],
  exports: [MjvComponentLibraryComponent]
})
export class MjvComponentLibraryModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    console.log('ngDoBootstrap - MjvComponentLibraryModule');
    const customElement = createCustomElement(MjvComponentLibraryComponent, {
      injector: this.injector,
    });
    customElements.define('app-hello-world', customElement);
  }
}
