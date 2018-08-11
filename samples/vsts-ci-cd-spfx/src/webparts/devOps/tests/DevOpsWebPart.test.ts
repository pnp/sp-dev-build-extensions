/// <reference types="mocha" />
/// <reference types="chai-as-promised" />

import { assert } from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { DevOpsWebPartService } from "../DevOpsWebPart.service";
import { BusinessService } from "../businesslogic";
import { MockSPListCollectionService } from "../dataservice/mockSPListCollectionService";

describe("DevOpsWebPart", () => {
  it("should do something", () => {
    assert.ok(true);
  });
});
const service: DevOpsWebPartService = new DevOpsWebPartService();
describe("DevOpsWebPart", () => {
  it("should add numbers Sync fluent", () => {
    const result:number = service.add(1, 3);
    return result.should.equal(4); // fluent API
  });
});

describe("DevOpsWebPart", () => {
  it("should add numbers sync assert", () => {
    const result:number = service.add(1, 3);
    assert.equal(result, 4, "result equals 4"); // assert/imperative API
  });
});

chai.use(chaiAsPromised);
describe("DevOpsWebPart", () => {
  it("should add numbers async", () => {
    const asyncResult:Promise<number> = service.addAsync(1, 3);
    return asyncResult.should.eventually.equal(4); // npm install chai-as-promised@6.0.0 @types/chai-as-promised -D
  });
});

describe("DevOpsWebPartWebPart", () => {
  it("get a business value of 3", () => {
    const businessService:BusinessService = new BusinessService(new MockSPListCollectionService());
    return businessService.GetBusinessLogic().should.eventually.equal(3);
  });
});