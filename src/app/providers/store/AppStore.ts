import { makeAutoObservable } from "mobx";

export class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  private data: undefined = undefined;

  setData(value: undefined) {
    this.data = value;
  }

  getData() {
    return this.data;
  }
}
