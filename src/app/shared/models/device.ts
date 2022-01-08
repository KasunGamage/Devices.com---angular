export interface Device {
  id: number;
  longitude: number;
  latitude: number;
  status: string;
  description: string;
  street: string;
  area: string;
  entryDate: string;
  finishedDate?: any;
  targetDate: string;
  complete?: any;
  reporter?: any;
}
