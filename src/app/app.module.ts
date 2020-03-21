import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirestoreService } from './Services/firestore/firestore.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertEventService } from './Modules/alert/service/alert-event.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { AuthService} from './Services/Authentication/auth.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    FirestoreService,
    AngularFirestore,
    AlertEventService,
    AuthService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
