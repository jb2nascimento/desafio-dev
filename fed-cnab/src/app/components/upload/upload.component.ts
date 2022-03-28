import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  fileName: string = '';

  @Output() onSelectFile: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  onFileSelected(event: any) {

    const file: File = event.target?.files[0];   

    if (file){
      this.fileName = file.name;
      this.onSelectFile.emit(file);
    } 
    
  }

}
