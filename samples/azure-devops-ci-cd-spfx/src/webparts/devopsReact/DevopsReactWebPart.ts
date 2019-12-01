import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DevopsReactWebPartStrings';
import DevopsReact from './components/DevopsReact';
import { IDevopsReactProps } from './components/IDevopsReactProps';
import { UserProfileService } from './services/UserProfileService';
import { IUser } from './services/IUser';
import { MathService } from './services/MathService';

export interface IDevopsReactWebPartProps {
  description: string;
}

export default class DevopsReactWebPart extends BaseClientSideWebPart<IDevopsReactWebPartProps> {
  private _user: IUser;
  protected onInit = async (): Promise<void> => {
    await super.onInit();
    const graphClient = await this.context.msGraphClientFactory.getClient();
    const userProfileService = new UserProfileService(graphClient);
    this._user = await userProfileService.getCurrentUser();
  }
  public render(): void {
    const mathService = new MathService();
    const element: React.ReactElement<IDevopsReactProps > = React.createElement(
      DevopsReact,
      {
        description: this.properties.description,
        user: this._user,
        mathValue: 10,
        addNumbers: mathService.Add,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
