import { MSGraphClient } from "@microsoft/sp-http";
import { IUser } from "./IUser";

export class UserProfileService {
  constructor(private _graphClient: MSGraphClient) {

  }
  public getCurrentUser = async (): Promise<IUser> => {
    const response = await this._graphClient.api('me').get();
    return {
      LastName: response.surname as string,
      FirstName: response.givenName as string,
      Email: response.mail as string,
      JobTitle: response.jobTitle as string,
      Photo: await this.getCurrentUserPhoto(),
    } as IUser;
  }
  private getCurrentUserPhoto = async (): Promise<string> => {
    const response = await this._graphClient.api('me/photo/$value').responseType('arraybuffer').get();
    const result = btoa(new Uint8Array(response).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    return result;
  }
}
