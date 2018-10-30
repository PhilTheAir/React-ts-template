import * as React from 'react';

interface IAppContext {
  name: string,
  author: string,
  url: string
}

export const stateObj: IAppContext = {
  name: "name",
  author: "author",
  url: "url"
}

const appContext = React.createContext<IAppContext>(stateObj);

export const {
  Provider: ContextProvider, 
  Consumer: ContextConsumer
} = appContext;
