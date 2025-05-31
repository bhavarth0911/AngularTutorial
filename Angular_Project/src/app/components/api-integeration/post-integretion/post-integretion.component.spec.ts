import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIntegretionComponent } from './post-integretion.component';

describe('PostIntegretionComponent', () => {
  let component: PostIntegretionComponent;
  let fixture: ComponentFixture<PostIntegretionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostIntegretionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostIntegretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
