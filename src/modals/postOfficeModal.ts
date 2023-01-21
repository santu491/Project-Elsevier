export interface Response {
  data: Data[];
  status: Number;
}

export interface Data {
  Message: string;
  PostOffice: PostOfficeInfo[];
  Status: string;
}

export interface PostOfficeInfo {
  BranchType: string;
  Circle: string;
  Country: string;
  DeliveryStatus: string;
  Description: string;
  District: string;
  Division: string;
  Name: string;
  Pincode: string;
  Region: string;
  State: string;
}
