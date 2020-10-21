//pass on name from document element and use it as an ID to track what to increase
export const increaseRep = (id) => ({
    type: "INCREASE_REP",
    id
});

//pass name to use as ID of element then decrease corresponding state
export const decreaseRep = (id) => ({
    type: "DECREASE_REP",
    id
});

//pass name as param to locate corresponding rexercise rep count
//add to rep counter
//onclick function should get state and display
export const completeRep = (id, idx) => ({
    type: "COMPLETE_REP",
    id,
    idx
});

//pass name as param to locate which corresponding exercise's rep to delete
export const deleteRep = (id, idx) => ({
    type: "DELETE_REP",
    id,
    idx
});

