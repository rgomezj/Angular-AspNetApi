import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { EntryElement } from '../interfaces/EntryElement';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  displayedColumns : string[] = ['Description', 'IsExpense', 'Value']
  dataSource;

  constructor(private service: EntryService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log("Data:" + data);
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
    });
  }

}
