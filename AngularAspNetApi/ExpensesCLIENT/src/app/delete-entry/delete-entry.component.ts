import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntryService } from '../entry.service';
import { EntryElement } from '../interfaces/EntryElement';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.css']
})
export class DeleteEntryComponent implements OnInit {

  id;
  entry = {
    description: '',
    value: 0,
    isExpense: false
  };

  constructor(private route:ActivatedRoute,
    private service: EntryService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getEntry(this.id).subscribe( (data: EntryElement) => {
      this.entry.description = data.Description;
      this.entry.value = data.Value;
      this.entry.isExpense = data.IsExpense;
      console.log(data);
    } );
  }

  cancel() {
    console.log("cancel clicked");
    this.router.navigate(['/']);
  }

  confirm() {
    console.log("confirm clicked");
    this.service.deleteEntry(this.id).subscribe((data) => {
      console.log('deleted: ' , data)
      this.router.navigate(['/']);
    });
  }

}
