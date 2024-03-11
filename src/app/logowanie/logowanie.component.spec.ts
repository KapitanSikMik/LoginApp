import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogowanieComponent ],
      imports: [ FormsModule ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with required fields', () => {
    expect(component.formData.username).toEqual('');
    expect(component.formData.password).toEqual('');
  });

  it('should call logowanie() method when form is submitted', () => {
    spyOn(component, 'logowanie');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.logowanie).toHaveBeenCalled();
  });

  it('should log in for valid username and password', () => {
    component.formData.username = 'przykladowyUzytkownik';
    component.formData.password = 'przykladoweHaslo';
    component.logowanie();
    
    // Dodaj oczekiwane zachowanie po poprawnym zalogowaniu
    // np. sprawdź, czy użytkownik jest przekierowany na inną stronę
    expect(component.isLoggedIn).toBeTruthy();
  });

  it('should display an error message for invalid login', () => {
    component.formData.username = 'niepoprawnyUzytkownik';
    component.formData.password = 'niepoprawneHaslo';
    component.logowanie();
    // Dodaj oczekiwane zachowanie po niepoprawnym zalogowaniu
    // np. sprawdź, czy wyświetlany jest komunikat o błędnych danych logowania
    expect(component.isLoggedIn).toBeFalsy();
  });
});
