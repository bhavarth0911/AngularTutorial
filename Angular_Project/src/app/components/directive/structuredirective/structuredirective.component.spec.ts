import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredirectiveComponent } from './structuredirective.component';

describe('StructuredirectiveComponent', () => {
  let component: StructuredirectiveComponent;
  let fixture: ComponentFixture<StructuredirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuredirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuredirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
