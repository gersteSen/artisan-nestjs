import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getMonth,
  isToday,
  startOfMonth,
  startOfToday,
} from 'date-fns';
import { de } from 'date-fns/locale';

@Component({
  selector: 'artisan-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Output() selectedDate: EventEmitter<Date> = new EventEmitter<Date>();

  today = startOfToday();
  selectedDay!: Date | null;
  month = getMonth(startOfToday());
  daysOfMonth = eachDayOfInterval({
    start: startOfMonth(this.today),
    end: endOfMonth(this.today),
  });

  get todayWithDate() {
    return format(this.today, 'dd. MMMM, yyyy', { locale: de });
  }
  get monthName() {
    return format(this.today, 'MMMM | yyyy', { locale: de });
  }

  formatDay(date: Date) {
    return format(date, 'd');
  }

  isToday(date: Date): boolean {
    return isToday(date);
  }

  isSelectedDay(date: Date): boolean {
    if (this.selectedDay) {
      return (
        format(date, 'dd.MM.yyyy') === format(this.selectedDay, 'dd.MM.yyyy')
      );
    }
    return false;
  }

  isMonth(date: Date): boolean {
    return getMonth(date) === this.month;
  }

  ngOnInit(): void {}

  nextMonth() {
    this.selectedDay = null;
    this.today = new Date(this.today.setMonth(this.today.getMonth() + 1));
    this.daysOfMonth = eachDayOfInterval({
      start: startOfMonth(this.today),
      end: endOfMonth(this.today),
    });
  }

  previousMonth() {
    this.selectedDay = null;
    this.today = new Date(this.today.setMonth(this.today.getMonth() - 1));
    this.daysOfMonth = eachDayOfInterval({
      start: startOfMonth(this.today),
      end: endOfMonth(this.today),
    });
  }

  selectDay(day: Date) {
    this.selectedDay = day;
    this.selectedDate.emit(day);
  }

  todayOrSelectedDayWithDate() {
    if (!!this.selectedDay) {
      return format(this.selectedDay, 'dd. MMMM | yyyy', { locale: de });
    } else {
      return format(this.today, 'dd. MMMM | yyyy', { locale: de });
    }
  }
}
