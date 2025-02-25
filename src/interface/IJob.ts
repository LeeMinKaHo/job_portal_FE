import { ICompany } from "./ICompany";

export interface IJob {
   id: number;
   title: string;
   salary: number;
   recruitment_quantity: number;
   benefits: string;
   job_description: string;
   application_deadline: Date;
   is_Hidden: boolean;
   gender: boolean;
   company? : ICompany
}
