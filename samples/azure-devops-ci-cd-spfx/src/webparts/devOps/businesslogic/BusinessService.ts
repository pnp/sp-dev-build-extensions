import { ISPList, ISPListCollectionService } from "../dataservice/";
export class BusinessService {
    private _dataService:ISPListCollectionService;
    constructor(dataSerivce: ISPListCollectionService) {
        this._dataService = dataSerivce;
    }
    public async GetBusinessLogic(): Promise<number> {
        const lists:ISPList[] = await this._dataService.getListData();
        return lists.length;
    }
}
