/// <reference types="mocha" />
import {assert, expect} from 'chai';
import { DevOpsWebPartService } from "../DevOpsWebPart.service";
import { BusinessService } from "../businesslogic";
import { MockSPListCollectionService } from "../dataservice/mockSPListCollectionService";

describe("DevOpsWebPart", () => {
  let service: DevOpsWebPartService = new DevOpsWebPartService();
  it("should do something", () => {
    assert.ok(true, 'should be true');
  });
  it("should add numbers Sync fluent", () => {
    const result:number = service.add(1, 3);
    expect(result).to.eq(4); // fluent API
  });
  it("should add numbers sync assert", () => {
    const result:number = service.add(1, 3);
    assert.equal(result, 4, "result equals 4"); // assert/imperative API
  });
  it("should add numbers async", async () => { // async test
    const result: number = await service.addAsync(1, 3);
    expect(result).to.eq(4);
  });
  it("get a business value of 3", async () => {
    const businessService:BusinessService = new BusinessService(new MockSPListCollectionService());
    const result = await businessService.GetBusinessLogic();
    expect(result).to.eq(3);
  });
});
