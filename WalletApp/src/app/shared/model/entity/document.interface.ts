interface Document{
  documentId? : string;
  title : string;
  content : string;
  type : string;
  createDate : Date;
  company : Company;
  contract : Contract;
  employee: Employee;
}
