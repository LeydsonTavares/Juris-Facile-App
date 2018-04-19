import { STORAGE_KEYS } from './../../config/storage_keys.config';
import { UserDTO } from './../../model/user.dto';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageProvider {

  getLocalUser() : UserDTO {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
        return null;
    }
    else {
        return JSON.parse(usr);
    }
}

setLocalUser(obj : UserDTO) {
    if (obj == null) {
        localStorage.removeItem(STORAGE_KEYS.localUser);
    }
    else {
        localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
}


}
