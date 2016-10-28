export default function reducer(state={
    goals: { milestones: [] },
    error: null,
    text: '',
  }, action) {

//state argument is not application state, only the state this reducer is
// responsible for
    switch (action.type) {
      case "FETCH_GOALS_REJECTED": {
        return {...state, error: action.payload}
      }
      case "FETCH_GOALS_FULFILLED": {
        return {
          ...state,
          goals: action.payload.data
        }
      }
      case "ADD_GOAL": {
        return {
          ...state,
          goal: action.payload.goal,
          goalText: ''
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

      case "OPEN_ADD_GOAL_DIALOG": {
        return {
          ...state,
          openGoalDialog: {},
        }
      }

      case "CLOSE_ADD_GOAL_DIALOG": {
        return {
          ...state,
          openGoalDialog: null,
        }
      }

      case "HANDLE_GOAL_INPUT": {
        return {
          ...state,
          goalText: action.payload
        }
      }
    }

    return state
}
