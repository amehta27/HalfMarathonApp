const initialState = {
    isAuthenticated: false
  }
  


const reducer = (state = initialState, action) => {
  
    switch(action.type) {
        case 'ON_AUTHENTICATED':

          return {
            ...state, // spread operator
            isAuthenticated: true
          }
        }
    return state
}

export default reducer;