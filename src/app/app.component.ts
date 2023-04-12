import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FcmService } from './services/fcm.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(
    private platform:Platform,
    private fcmService:FcmService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(()=>{
      this.fcmService.initPush();
    })
  }
}
