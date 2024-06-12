import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

import documentsReducer from './reducers/documentsReducer';
import cartReducer from './reducers/cartReducer';

export default configureStore({
    reducer: {
        documents: documentsReducer,
        cart: cartReducer,
    }
});