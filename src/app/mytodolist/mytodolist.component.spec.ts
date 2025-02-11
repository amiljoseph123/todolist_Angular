import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytodolistComponent } from './mytodolist.component';

describe('MytodolistComponent', () => {
  let component: MytodolistComponent;
  let fixture: ComponentFixture<MytodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytodolistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
