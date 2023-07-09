import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTestComponent } from './template-test.component';

describe('TemplateTestComponent', () => {
  let component: TemplateTestComponent;
  let fixture: ComponentFixture<TemplateTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateTestComponent]
    });
    fixture = TestBed.createComponent(TemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
