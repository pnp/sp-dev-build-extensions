import { ISPListCollectionService, ISPList } from "./";
import { sp } from "@pnp/sp";

export class HttpSPListCollectionService implements ISPListCollectionService {
    public async getListData(): Promise<ISPList[]> {
        return (await sp.web.lists.filter(`Hidden eq false`).get()) as ISPList[];
    }
}
