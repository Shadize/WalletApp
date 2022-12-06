interface Contract{
  contractId?: string;
  description: string;
  startDate: Date;
  endDate: Date;
  nbHoursByWeek: number;
  companies: Company[];
  employee: Employee;
}


