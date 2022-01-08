export interface Device {
  id: number;
  name: string;
  status: string;
  icon: Icon;
  type: string;
  temperature: string;
  usage: string;
  related: number[];
}

export interface Icon {
  id: number;
  url: string;
}
