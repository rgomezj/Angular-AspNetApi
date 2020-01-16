import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../interfaces/Type';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  types: Type[] = [ 
    { value: true, display: 'Expense'},
    { value: false, display: 'Income'}
  ] 
  
  form : FormGroup;
  id: number;

  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialogRef<UpdateEntryComponent>, 
    @Inject(MAT_DIALOG_DATA) { Description, IsExpense, Value, Id}) {
      this.id = Id;

      this.form = formBuilder.group({
            description: [Description, Validators.required],
            isExpense: [IsExpense, Validators.required],
            value: [Value, Validators.required],
      });
     }

    
  ngOnInit() {
  }

  close() {

  }

  save() {
    
  }

}
