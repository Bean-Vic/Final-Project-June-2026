// 将用户的 user Event 变成 Redux 可以理解的 action -> action 本质上是一个 object
export const userIncrementActionCreator = () => {
    return {
        type: 'Redux执行+1',
    }
};

export const userDecrementActionCreator = () => {
    return {
        type: 'Redux执行-1',
    }
};