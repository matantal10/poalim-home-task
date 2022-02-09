import {LocalStorageItemIfc} from "../interfaces/local-storage-item-ifc";
import {CommentIfc} from "../interfaces/UserIfc";


export class LocaleStorageItem {
  key: string;
  value: CommentIfc;

  constructor(data: LocalStorageItemIfc) {
    this.key = data.key;
    this.value = data.value;
  }
}
