import {ISPList } from "./";
export interface ISPListCollectionService {
    getListData(): Promise<ISPList[]>;
}
