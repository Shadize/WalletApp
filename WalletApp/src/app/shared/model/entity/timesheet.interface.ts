interface Timesheet {
  timesheetId?: string;
  startDate: Date;
  startHours: Date;
  endHours: Date;
  comment: string;
  timesheetType: string;
  contracts: Contract[];
  employee: Employee;
}
