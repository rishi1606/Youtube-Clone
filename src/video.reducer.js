import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    SELECTED_VIDEOS_FAIL,
    SELECTED_VIDEOS_REQUEST,
    SELECTED_VIDEOS_SUCCESS,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_FAIL,
    COMMENT_LIST_SUCCESS,
    SEARCHED_VIDEOS_SUCCESS,
    SEARCHED_VIDEOS_REQUEST,
    SEARCHED_VIDEOS_FAIL,
    
    
}
from "./actionTypes"

export const homeVideoReducer = (state={       //// reducer(initialstate,action)
    videos:[],
    loading:false,
    activeCategory:"All",
},
action)=>{
    // const {type,payload}=action
    switch(action.type){
        case HOME_VIDEOS_SUCCESS:
        return{
            ...state,                       //previous state
            videos:action.payload.videos,          //Uppdate new state with videos
            loading:false,
            activeCategory:action.payload.category,                 

        }

        case HOME_VIDEOS_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
    
            }
         case HOME_VIDEOS_REQUEST:
            return{
                 ...state,
                 loading:true
        
             }   
        default:
            return state
    }

}

////SELECTED VIDEO/////

export const getSelectedVideoReducer=(state={
    vid:[],
    loading:false

},action)=>{
    switch(action.type)
    {
        case SELECTED_VIDEOS_SUCCESS:
            return{
                ...state,
                vid:action.payload
            }
        case SELECTED_VIDEOS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SELECTED_VIDEOS_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}


////////COMMENTS REDUCER/////////
export const commentListReducer=(state={
   comments:[],
    loading:false

},action)=>{
    switch(action.type)
    {
        case COMMENT_LIST_SUCCESS:
            return{
                ...state,
                comments:action.payload,
                loading:false,
            }
        case COMMENT_LIST_REQUEST:
            return{
                ...state,
                loading:true
            }
        case COMMENT_LIST_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}




/////SEARCH //////

export const searchedVideoReducer=(state={
    videos:[],
     loading:false
 
 },action)=>{
     switch(action.type)
     {
         case SEARCHED_VIDEOS_SUCCESS:
             return{
                 ...state,
                 videos:action.payload,
                 loading:false,
             }
         case SEARCHED_VIDEOS_REQUEST:
             return{
                 ...state,
                 loading:true
             }
         case SEARCHED_VIDEOS_FAIL:
             return{
                 ...state,
                 loading:false,
                 error:action.payload
             }
         default:
             return state
     }
 }
 

 