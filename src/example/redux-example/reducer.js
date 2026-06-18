// reducer 他一定是一个纯函数，不能有其他的操作
// 两个传入的参数，一个是当前的 state， 一个是 action
// 返回的是下一个 state
const initialState = 0;
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Redux执行+1':
            return state + 1;
        case 'Redux执行-1':
            return state - 1;
        default:
            return state;
    }
}

export const countSelector = (state) => state;