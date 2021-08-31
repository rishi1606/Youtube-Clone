import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {commentListReducer, getSelectedVideoReducer, homeVideoReducer,searchedVideoReducer} from "./video.reducer"

//reducer to combine all reducers
const rootReducer = combineReducers({
      homeVideos:homeVideoReducer,
      selectedVideos: getSelectedVideoReducer,
      commentsList:commentListReducer,
      searchedVideos:searchedVideoReducer,
      
})


const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store