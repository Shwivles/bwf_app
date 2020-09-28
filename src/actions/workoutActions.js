//pass on name from document element and use it as an ID to track what to increase
export const increaseRep = (name) => ({
    type: "INCREASE_REP",
    name
});

//pass name to use as ID of element then decrease corresponding state
export const decreaseRep = (name) => ({
    type: "DECREASE_REP",
    name
});

//pass name as param to locate corresponding rexercise rep count
//add to rep counter
//onclick function should get state and display
export const completeRep = (name) => ({
    type: "COMPLETE_REP",
    name
});

//pass name as param to locate which corresponding exercise's rep to delete
export const deleteRep = (name) => ({
    type: "DELETE_REP",
    name
});

