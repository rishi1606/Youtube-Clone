
import { HOME_VIDEOS_REQUEST,SEARCHED_VIDEOS_FAIL, SEARCHED_VIDEOS_REQUEST, SEARCHED_VIDEOS_SUCCESS, SELECTED_VIDEOS_FAIL, SELECTED_VIDEOS_REQUEST, SELECTED_VIDEOS_SUCCESS } from "./actionTypes"
import { HOME_VIDEOS_FAIL } from "./actionTypes"
import { HOME_VIDEOS_SUCCESS,COMMENT_LIST_FAIL,COMMENT_LIST_SUCCESS,COMMENT_LIST_REQUEST } from "./actionTypes"

import firebase from 'firebase/app'
import auth from './firebase'
import request from "./api"
export const getPopularVideos=()=>async dispatch=>{//getPopular function 
    try{
        dispatch({
            type:HOME_VIDEOS_REQUEST,//retreive action type:True
        })
        const {data}=await request("/videos",{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                regionCode:"IN",
                maxResults:50,
                
            },
        })
        
        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,

            }
        })

    }catch(error){
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:error.message,
        })
        
    }
    
}


///////////////// CATEGORIES BAR //////////////////////

export const categoriesBar=(keyword)=>async dispatch=>{
    try{
        dispatch({
            type:HOME_VIDEOS_REQUEST,//retreive action type:True
        })
        const {data}=await request("/search",{
            params:{
                part:"snippet",
                maxResults:50,
                q:keyword,
                type:"video",
                
            },
        })

        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                category:keyword,
            }
        })
        
    }
    catch(error)
    {
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:error.message,
        })
    }
}


////SELECTED VIDEO////
export const getVideoById=(id)=>async dispatch=>{
    try{
            dispatch({
                type:SELECTED_VIDEOS_REQUEST,
            })
            const {data}=await request('/videos',{
                params:{
                    part:'snippet,statistics',
                    id:id
                }
            })
            dispatch({
                type:SELECTED_VIDEOS_SUCCESS,
                payload:data.items
            })
    }
    catch(error){
        dispatch({
            type:SELECTED_VIDEOS_FAIL,
            payload:error.message
        })

    }

}


////COMMENTS/////

export const getCommentsOfVideoById=(id)=>async dispatch=>{
    try{
            dispatch({
                type:COMMENT_LIST_REQUEST,
            })
            const {data}=await request('/commentThreads',{
                params:{
                    part:'snippet',
                    videoId:id
                }
            })
            dispatch({
                type:COMMENT_LIST_SUCCESS,
                payload:data.items
            })
    }
    catch(error){
        dispatch({
            type:COMMENT_LIST_FAIL,
            payload:error.message
        })

    }

}

/////SEARCH ////////
export const getVideoBySearch=(keyword)=>async dispatch=>{
    try{
            dispatch({
                type:SEARCHED_VIDEOS_REQUEST,
            })
            const {data}=await request('/search',{
                params:{
                    part:'snippet',
                    maxResults:30,
                    q:keyword,
                    type:'video,channel'
                }
            })
            dispatch({
                type:SEARCHED_VIDEOS_SUCCESS,
                payload:data.items
            })
    }
    catch(error){
        dispatch({
            type:SEARCHED_VIDEOS_FAIL,
            payload:error.message
        })

    }

}



