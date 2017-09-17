export default function (
    state={
        index: ""
    },action)
{
    switch(action.type){
        case "INITIALISE_STATE":
            state = {...state, index: index.home}
            break;
    }
    return state;
}