import { EntriesState } from './';
import { Entry } from '../../interfaces';


type EntriesActionType = 
    | { type: '[Entriy] - Add-Entry', payload: Entry }
    | { type: '[Entriy] - Entry-Updated', payload: Entry }
    | { type: '[Entriy] - Refresh-Data', payload: Entry[] }

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

    switch (action.type) {
        case '[Entriy] - Add-Entry':
            return {
                ...state,
                entries: [ ...state.entries, action.payload ]
            }
        case '[Entriy] - Entry-Updated':
            return {
                ...state,
                entries: state.entries.map( entry => {
                    if ( entry._id === action.payload._id ) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            }

        case '[Entriy] - Refresh-Data':
            return {
                ...state,
                entries: [ ...action.payload ]
            }

        default:
            return state;
    }

}