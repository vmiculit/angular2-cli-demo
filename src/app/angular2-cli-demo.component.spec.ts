import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2CliDemoAppComponent } from '../app/angular2-cli-demo.component';

beforeEachProviders(() => [Angular2CliDemoAppComponent]);

describe('App: Angular2CliDemo', () => {
  it('should create the app',
      inject([Angular2CliDemoAppComponent], (app: Angular2CliDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-cli-demo works!\'',
      inject([Angular2CliDemoAppComponent], (app: Angular2CliDemoAppComponent) => {
    expect(app.title).toEqual('angular2-cli-demo works!');
  }));
});
