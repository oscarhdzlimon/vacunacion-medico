import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaItemComponent } from './vacuna-item.component';

describe('VacunaItemComponent', () => {
  let component: VacunaItemComponent;
  let fixture: ComponentFixture<VacunaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacunaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacunaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
