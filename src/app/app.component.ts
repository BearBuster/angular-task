import {Component, OnInit} from '@angular/core';import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";interface person {  name: string,  surname: string,  age: number}@Component({  selector: 'app-root',  templateUrl: './app.component.html',  styleUrls: ['./app.component.css']})export class AppComponent implements OnInit{  qew=true  ngOnInit(): void {}}