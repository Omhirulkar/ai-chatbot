import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotCustomizationComponent } from './bot-customization.component';

describe('BotCustomizationComponent', () => {
  let component: BotCustomizationComponent;
  let fixture: ComponentFixture<BotCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotCustomizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
