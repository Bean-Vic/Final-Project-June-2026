import React, { useContext } from 'react';
import { Context } from './context';

export const Consumer = () => {
    const contextValue = useContext(Context);

    return (
        <div>这里是 Consumer 组件，context 的值是：{contextValue}</div>
    )
}

export const ProviderComp = () => {
  return (
      <>
        <h1>这里是提供者组件，Provider Component</h1>

              <h2>
                  第二层
                  <Consumer />
                  <h3>
                      第三层
                      <Context.Provider value="bean">

                          <h4>
                              第四层

                          </h4>
                      </Context.Provider>

                  </h3>
              </h2>
      </>
  );
};

