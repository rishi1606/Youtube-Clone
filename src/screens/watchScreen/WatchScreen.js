import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Metadata from '../../components/Metadata/Metadata';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import { getPopularVideos, getVideoById} from '../../videos.action';
import moment from 'moment'
import numeral from 'numeral'
import Comment from "../../screens/comments/Comment"
import './WatchScreen.css';
import request from '../../api';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const WatchScreen = () => {
    
    const {id}=useParams();
    const{videos}=useSelector(state=>state.homeVideos)  
    const{vid}=useSelector(state=>state.selectedVideos)  
    function truncate(str)
    {
        return str.length>10?str.substring(0,28)+"...":str;
    }
    
    const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(getPopularVideos())  
        dispatch(getVideoById(id))

        
        
    },[dispatch])

    
  
    
  return (
      <>
    <div className="watchscreen">
        <div className="watch-video">
            
            <div className="video-play">
                <iframe src={`https://www.youtube.com/embed/${id}`}
                 frameBorder="0"
                 allowFullScreen
                 height="100%"
                 width="100%"
                 
                 >

                </iframe>

                <Metadata vid={vid} videoId={id}/>
            </div>
        </div>
        
        <div className="watch-filter">
               
                
            {
                  [...Array(1)].map(()=><VideoHorizontal/>)
            }
          
        </div>

      <div>
      <div className="allvid">
     
      {
          videos.slice(20,45).map((v,i)=>{
          
              return(
                <div className="sidevideos">
                    <div className="sideimage">
                               <a href={`${v.id && v.id.videoId || v.id}`}>
                              
                               <img src={v.snippet.thumbnails.medium.url}/>
                                
                               </a> 
                    </div>
                    <div className="sidetitle">
                          
                            <h6>{truncate(v.snippet.title)}</h6>
                            <h4>{v.snippet.channelTitle}</h4>
                            <p>{moment(v.snippet.publishedAt).fromNow()}</p>
                    </div>
                </div>

            
              )
          })
      }
      </div>
     
      
       
      </div>  
     
      
    </div>
    <Comment vid={vid} videoId={id}/>
    
      </>
      
  )
}

export default WatchScreen
