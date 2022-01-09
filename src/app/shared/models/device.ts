export interface Device {
  id: number;
  name: string;
  status: string;
  icon: Icon;
  type: number;
  temperature: string;
  usage: number;
  related: number[];
}

export interface Icon {
  id: number;
  url: string;
}
