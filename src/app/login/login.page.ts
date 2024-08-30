import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    name: '',
    surname: '',
    educationLevel: '',
    dateOfBirth: ''
  };

  constructor(private alertController: AlertController) {}

  async onSubmit() {
    const { name, surname } = this.user;
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${name}<br>Apellido: ${surname}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  onClear() {
    this.user = {
      name: '',
      surname: '',
      educationLevel: '',
      dateOfBirth: ''
    };
  }
}
