import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRepertorioComponent } from './criar-repertorio.component';

describe('CriarRepertorioComponent', () => {
  let component: CriarRepertorioComponent;
  let fixture: ComponentFixture<CriarRepertorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarRepertorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarRepertorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
