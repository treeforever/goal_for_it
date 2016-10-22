export default function reducer(state={
    goals: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_GOALS": {
        return {...state, fetching: true}
      }
      case "FETCH_GOALS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_GOALS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          goals: action.payload,
        }
      }
      case "ADD_GOAL": {
        return {
          ...state,
          goals: [...state.goals, action.payload],
        }
      }
      case "UPDATE_GOAL": {
        const { id, text } = action.payload
        const newGoals = [...state.goals]
        const goalToUpdate = newGoals.findIndex(goal => goal.id === id)
        newGoals[goalToUpdate] = action.payload;

        return {
          ...state,
          goals: newGoals,
        }
      }
      case "DELETE_GOAL": {
        return {
          ...state,
          goals: state.goals.filter(goal => goal.id !== action.payload),
        }
      }
    }

    return state
}