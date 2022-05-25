import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-import',
  templateUrl: './client-import.component.html',
  styleUrls: ['./client-import.component.css']
})
export class ClientImportComponent implements OnInit {

  uploadForm: FormGroup;
  client = ''
  link: string;

  constructor(private formBuilder: FormBuilder, private ClientService: ClientService) { }

  ngOnInit(): void {
    this.client = ''
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onFileSelect(event: any) {
    this.client = ''
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile')?.setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile')?.value);

    this.ClientService.postImport(formData).subscribe(res => {
      this.client = res
    }
    );
  }

  export() {
    this.ClientService.exportClient().subscribe(res => {

      this.link = res.file
    })
  }

}
