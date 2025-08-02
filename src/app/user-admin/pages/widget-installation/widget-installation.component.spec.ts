import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetInstallationComponent } from './widget-installation.component';

describe('WidgetInstallationComponent', () => {
  let component: WidgetInstallationComponent;
  let fixture: ComponentFixture<WidgetInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetInstallationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
