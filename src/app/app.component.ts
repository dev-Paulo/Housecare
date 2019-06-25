import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public menuItens = new Array<{
    name: string,
    route: string,
    icon: string
  }>();
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.addMenuItens();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  addMenuItens() {
    this.menuItens = [
      {
        name: 'Contas',
        route: '/housecare/tabs/contas',
        icon: 'card',
      },
      {
        name: 'Casa',
        route: '/housecare/tabs/casa',
        icon: 'home',
      },
      {
        name: 'Notificações',
        route: '',
        icon: 'notifications',
      },
      {
        name: 'Usuários',
        route: '',
        icon: 'people',
      },
      {
        name: 'Editar Perfil',
        route: '',
        icon: 'create',
      }
    ];
  }

  openSideMenu() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }


}
