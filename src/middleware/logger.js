const logger = (store) => (next) => (action) => {

    console.group("ACTION: ", action.type);
    console.log("CURR STATE: ", store.getState());
    const returnVal = next(action);
    console.log("NEW STATE: ", store.getState());
    console.groupEnd();

    return returnVal;//the action
};

export default logger;
