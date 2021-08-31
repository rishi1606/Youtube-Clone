import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import "../../screens/SearchScreen/SearchScreen.css"
import { getVideoBySearch } from '../../videos.action'
import moment from 'moment'
import numeral from 'numeral'
function Truncate(str){
    return str.length > 10 ? str.substring(0, 70) + "..." : str;

}
const SearchScren = () => {
    const {query}=useParams()
    const dispatch=useDispatch()
    
    const history=useHistory()
    useEffect(()=>{
            dispatch(getVideoBySearch(query))
    },[query,dispatch])
    const {videos}=useSelector(state=>state.searchedVideos)
   console.log(videos);
   
    return (
        <>
        {videos.map((v,i)=>{
            const refresh=()=>{
                history.push(`/watch/${v.id?.videoId}`)
            }
            return(
                <div className="search">
                <div className="search_img">
                        <img src={v.snippet.thumbnails.medium.url} onClick={refresh}></img>
    
                </div>
                <div className="search_details">
                        <h1> {Truncate(v.snippet.title)}</h1>
                        <p> Uploaded <span>{moment(v.snippet.publishedAt).fromNow()}</span></p>
                </div>
                <div className="searchicon">
                        <div className="icon">
                            <img src="https://yt3.ggpht.com/iaLYDUaM_984UNS0JhU2Md6BLlalG7wnJcX4V5JzsavZBOKsA3A7NaBrnV4wdzGhn9ZU41gIjA=s68-c-k-c0x00ffffff-no-rj"></img>
                        </div>
                        <div className="icon_title">
                                <h6>{v.snippet.channelTitle}</h6>
                                <p> {Truncate(v.snippet.description)}</p>
                        </div>
                </div>
                
            </div>
            )
        })}
        </>
    )
   
}

export default SearchScren
