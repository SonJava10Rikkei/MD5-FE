import {Component, EventEmitter, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  selectedFile?: File;
  ref?: AngularFireStorageReference;
  downloadURL?: string;
  checkUploadAvatar = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private afStorage: AngularFireStorage) {
  }

  onFileChanged($event: any) {
    this.selectedFile = $event.target.files[0];
    this.onUpload();
  }

  onUpload() {
    this.checkUploadAvatar = true;
    const id = this.selectedFile?.name + '_' + Math.random().toString(18).substring(2); //Tạo ra 1 name riêng cho mỗi DB firebase;
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile).then(snapshot => {
      return snapshot.ref.getDownloadURL(); //Tra ve 1 chuoi sieu van ban tren FB.
    }).then(downloadURL => { //chuyen giao link tu nhung component khac nhau khi su upload
      this.downloadURL = downloadURL;
      this.giveURLtoCreate.emit(this.downloadURL);
      this.checkUploadAvatar = false;
      return downloadURL;
    })
      .catch(error => {
        console.log(`Failed to upload avatar and get link ${error}`);
      })
  }

}
