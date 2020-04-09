import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'Home',
      icon: 'Home'
    },
    {
      title: 'Sensor De Luz',
      url: 'Luz',
      icon: 'sunny'
    },
    {
      title: 'Sensor De Movimiento',
      url: 'Movimiento',
      icon: 'walk'
    },
    {
      title: 'Sensor De Temperatura',
      url: 'Temperatura',
      icon: 'thermometer'
    },
    {
      title: 'Reportes',
      url: 'Reportes',
      icon: 'trending-up'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }
  async presentConfirm(item) {
    if(item.title=="Reportes"){
      const alert = await  this.alertCtrl.create({
        header: 'Atención',
        message: 'Aun no se ha registrado ningun reporte, joven vuelva mas tarde' ,
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            handler: () => {
              // console.log('Cancel clicked'); aqui se coloca lo que va a hacer el boton al presionarse
            }
          }
        ]
      });
      alert.present();
    }
    
  }
  

  ngOnInit() {
   
  }
}
