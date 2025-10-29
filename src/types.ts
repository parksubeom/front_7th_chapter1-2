export type RepeatType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface RepeatInfo {
  type: RepeatType;
  interval: number;
  endDate?: string;
}

export interface EventForm {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  location: string;
  category: string;
  repeat: RepeatInfo;
  notificationTime: number; // 분 단위로 저장
  seriesId?: string | null;
}

export interface Event extends EventForm {
  id: string;
  seriesId?: string | null;
  exceptionDates?: string[];
}

export interface EventInstance extends Event {
  originalDate: string;
}