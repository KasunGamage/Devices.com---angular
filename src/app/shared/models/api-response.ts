import { ResourceTypes } from '../constants/request';

export interface ApiResponse {
  appVersion: string;
  id: number;
  data: Data;
  error: string;
}

export interface Data {
  resourceType: ResourceTypes;
  item?: any;
  items?: any;
  totalItems: number;
  totalPages: number;
  totalRecordCount?: number;
  offSet: number;
  limit: number;
  page: number;
  orders?: any;
}
