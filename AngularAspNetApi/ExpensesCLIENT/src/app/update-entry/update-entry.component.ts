import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../interfaces/Type';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';

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
    @Inject(MAT_DIALOG_DATA) { Description, IsExpense, Value, Id},
    private service: EntryService, 
    private router: Router) {
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
    console.log("close clicked");
    this.dialog.close();
  }

  save() {
    console.log("save clicked");
    this.form.value.id = this.id;
    this.service.updateEntry(this.id, this.form.value).subscribe((data) => {
      console.log('Data: ' , data)
      this.router.navigate(['/']);
    });
  }

}
