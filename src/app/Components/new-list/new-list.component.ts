import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../Services/firestore/firestore.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  public newsList = [];

  constructor(
    private firestoreService: FirestoreService,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit() {
    this.firestoreService.getNews().subscribe((NewsSnapshot) => {
      this.newsList = [];
      NewsSnapshot.forEach((NewData: any) => {
        this.newsList.push({
          id: NewData.payload.doc.id,
          data: NewData.payload.doc.data()
        });
      })
    });
  }

  transform(base64Resource: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64Resource);
  }

}
