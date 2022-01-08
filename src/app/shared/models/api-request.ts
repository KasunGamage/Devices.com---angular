import { ResourceTypes } from '../../shared/constants/request';
// import { SortingOptions } from '../constants/ag-grid';

export interface ApiRequest {
  id?: string;
  language: string;
  data: Data;
}

export interface Data {
  resourceType?: ResourceTypes;
  item?: any;
  items?: any[];
  totalItems?: number;
  totalPages?: number;
  totalRecordCount?: number;
  offSet?: number;
  limit?: number;
  page?: number;
  orders?: Order[];
}

export interface Order {
  property: string;
  order: any;
}
