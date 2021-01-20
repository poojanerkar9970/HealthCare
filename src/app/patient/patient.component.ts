import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }

  model: any = {
    history: ''
  };

  submittedData = '';
  isSubmitted = false;

  formFields = ["Diabetes","Hypertension", "Heart disease", "Asthma", "High Cholesterol", "Thyroid", "Cancer", "Jaundice"];

  genders = ['Male', 'Female', 'Other'];

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  ngOnInit(): void {
    
  }

  onClickSubmit(data) {
    
    if(data.name != undefined && (data.age != undefined && Number(data.age)) && data.gender != "" && (data.phone != undefined && Number(data.phone))){
      this.submittedData = data;
      this.isSubmitted = true;
    }
  }
}
