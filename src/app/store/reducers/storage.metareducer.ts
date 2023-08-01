import { ActionReducer, MetaReducer } from '@ngrx/store';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { merge, pick } from 'lodash-es';

const ls = new LocalStorageService();

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    let onInit = true; //after load and refresh

    return function (state, action) {
        const nextState = reducer(state, action);

        if (onInit) {
            onInit = false;
            const savedState = ls.getItem("theme");
            return merge(nextState, savedState);
        }

        // save the next state to the application storage.
        const stateToSave = pick(nextState, ["theme"]);
        ls.setItem("theme", stateToSave);
        return nextState;
    }
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];