import { Component } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  formData = {
  username: '',
  password: ''
  };

 isLoggedIn = false;

  logowanie() {
    // Tutaj można zaimplementować logikę logowania
    if (this.formData.username === 'przykladowyUzytkownik' && this.formData.password === 'przykladoweHaslo') {
      console.log('Zalogowano pomyślnie!');
      this.isLoggedIn = true;
    } else {
      console.log('Błąd logowania. Spróbuj ponownie.');
      this.isLoggedIn = false;
    }
  }
}
