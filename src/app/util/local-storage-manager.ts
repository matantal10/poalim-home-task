import {LocaleStorageItem} from "./LocaleStorageItem";
import {CommentIfc} from "../interfaces/UserIfc";


export class LocalStorageManager {

  localStorageSupported: boolean;

  constructor() {
    this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
  }

// add value to storage
  add(key: string, item: any) {
    if (this.localStorageSupported) {
      localStorage.setItem(key, item);
    }
  }

// get all values from storage (all items)
  getAllItems(): Array<LocaleStorageItem> {
    let list = new Array<LocaleStorageItem>();
    for (let i = 0; i < localStorage.length; i++) {
      let key: any = localStorage.key(i);
      let value = localStorage.getItem(key);
      list.push(new LocaleStorageItem({
        key: key,
        value: value
      }));
    }
    return list;
  }

// get only all values from localStorage
  getAllValues(): Array<any> {
    let list = new Array<any>();
    for (let i = 0; i < localStorage.length; i++) {
      let key: any = localStorage.key(i);
      let value = localStorage.getItem(key);
      list.push(value);
    }
    return list;
  }

// get one item by key from storage
  get(key: string) {
    if (this.localStorageSupported) {
      let item = localStorage.getItem(key);
      return item;
    } else {
      return null;
    }
  }

// remove value from storage
  remove(key: string) {
    if (this.localStorageSupported) {
      localStorage.removeItem(key);
    }
  }

// clear storage (remove all items from it)
  clear() {
    if (this.localStorageSupported) {
      localStorage.clear();
    }
  }
}
