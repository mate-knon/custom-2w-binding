import { Component, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Older versions
  // @Input({ required: true }) size!: { width: string; height: string };
  // // sizeChange is strict name for two way binding (same name as in Input and follow by Changed word)
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  // Modern way to solve it
  size = model.required<{ width: string; height: string }>();

  onReset() {
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100',
    // });
    this.size.set({
      width: '200',
      height: '100',
    });
  }
}
