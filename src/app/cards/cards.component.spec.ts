import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsComponent } from './cards.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconPlusCircle, IconMinusCircle } from 'angular-feather';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ScrollPanelModule, BrowserAnimationsModule, IconPlusCircle, IconMinusCircle],
      declarations: [ CardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
