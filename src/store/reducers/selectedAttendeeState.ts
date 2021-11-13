export interface SelectedAttendee {
  phone: string;
  firstName: string;
  lastName: string;
  location: string;
  organizerId: string;
  attendeeId: string;
  children: string;
  eventsAttendeed: string[] | never[];
}
