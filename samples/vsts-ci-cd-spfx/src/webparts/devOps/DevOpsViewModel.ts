import * as ko from "knockout";
import styles from "./DevOps.module.scss";
import { IDevOpsWebPartProps } from "./IDevOpsWebPartProps";
import { DevOpsWebPartService } from "./DevOpsWebPart.service";
import { ISPListCollectionService, ISPList } from "./dataservice";

export interface IDevOpsBindingContext extends IDevOpsWebPartProps {
  shouter: KnockoutSubscribable<{}>;
  dataService: ISPListCollectionService;
}

export default class DevOpsViewModel {
  public description: KnockoutObservable<string> = ko.observable("");

  public devOpsClass: string = styles.devOps;
  public containerClass: string = styles.container;
  public rowClass: string = styles.row;
  public columnClass: string = styles.column;
  public titleClass: string = styles.title;
  public subTitleClass: string = styles.subTitle;
  public descriptionClass: string = styles.description;
  public buttonClass: string = styles.button;
  public labelClass: string = styles.label;

  public opA = ko.observable<string>("0");
  public opB = ko.observable<string>("0");
  public opResult = ko.observable<number>(0);
  public listCollection = ko.observableArray<ISPList>();
  private service: DevOpsWebPartService = new DevOpsWebPartService();
  public doCalculation = () => {
    const base10Radix: number = 10;
    const result: number = this.service.add(parseInt(this.opA(), base10Radix), parseInt(this.opB(), base10Radix));
    this.opResult(result);
  }
  constructor(bindings: IDevOpsBindingContext) {
    this.description(bindings.description);
    bindings.dataService.getListData().then((value)=> {
      this.listCollection(value);
    });
    // when web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, "description");
  }
}
