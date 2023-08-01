import { ActionReducer, Action, MetaReducer } from '@ngrx/store';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { merge, pick } from 'lodash-es';

const ls = new LocalStorageService();

export const storageMetaReducer = <S, A extends Action = Action>(reducer: ActionReducer<S, A>) => {
    let onInit = true;

    return function (state: S, action: A): S {
        const nextState = reducer(state, action);

        if (onInit) {
            onInit = false;
            const savedState = ls.getItem("theme");
            return merge(nextState, savedState);
        }

        const stateToSave = pick(nextState, ["theme"]);
        ls.setItem("theme", stateToSave);
        return nextState;
    }
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];