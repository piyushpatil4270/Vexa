import {configureStore,combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit"
import {
persistStore,
persistReducer,
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./userSlice"

const persistConfig={
    key:"root",
    version:1,
    storage
}

const rootReducer=combineReducers({
    user1:userReducer
    //state name:reducername
})


const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
})

export const persistor=persistStore(store)