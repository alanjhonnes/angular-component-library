import { Injectable } from '@angular/core';

type AngularJSIdentifier = keyof AngularJSResources;

@Injectable({
  providedIn: 'root',
})
export class AngularJSResourceService {

  private $inject: any;

  constructor() {
    this.$inject = (window as any).angular.element(document.body).injector();
  }

  getResource<T extends string>(identifier: AngularJSIdentifier): AngularJSResources {
    return this.$inject.get(identifier);
  }
}

function getResource<T extends AngularJSIdentifier>(identifier: T): AngularJSResources[T] {
  return this.$inject.get(identifier);
}

const x = getResource('ngModel');
const y = getResource('ngModel2');
const z = getResource('24');
