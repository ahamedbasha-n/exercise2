import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-lowercase',
  standalone: true,
  imports: [],
  templateUrl: './lowercase.component.html',
  styleUrl: './lowercase.component.css'
})

@Pipe({ name:'titlecase', standalone: true, pure: true })
export class TitleCasePipe implements PipeTransform {
  transform(input: string): string {
    return input.length === 0
      ? ''
      : input.replace(/\w\S*/g, (txt) => txt.toLowerCase());
  }
}