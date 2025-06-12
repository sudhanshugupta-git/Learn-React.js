
// store, next, action
// every middleware has access to store, next-middleware, action which is implemented in cascading manner using currying in js
// steps: receive --> perform operation --> pass data to next middleware

export const loggerMiddleware = (store)=>{
    return function(next){
        return function(action){
            // log actions
            console.log("[LOG]: "+action.type+ " "+ new Date().toString());
            // call next middleware in pipeline.
            next(action);
            // log the modified state of app.
            console.log(store.getState());
        }
    }
}