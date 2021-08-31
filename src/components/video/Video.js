import React, { useEffect ,useState} from 'react'
import './video.css'
import moment from 'moment'
import numeral from 'numeral'
import { AiFillEye } from 'react-icons/ai'
import request from "../../api"
import { Link } from 'react-router-dom'

//Function for Truncating - line clamp
function Truncate(str){
      return str.length > 10 ? str.substring(0, 24) + "..." : str;
  
}

const Video = ({video}) => {
   const {                       // API FORMAT
      id,                        //
      snippet: {                 //
         channelId,              //
         channelTitle,           //
         title,                  //
         publishedAt,
         thumbnails: { medium },
      },
      contentDetails,
   } = video
   const [views, setViews] = useState(null);//VIEWS STATE
   const [duration, setDuration] = useState(null);//DURATION STATE
   const [channelIcon, setChannelIcon] = useState(null); // CHANNEL ICON STATE
   // CODE FOR DURATION & VIEWS
   const seconds = moment.duration(duration).asSeconds();
   const _duration = moment.utc(seconds * 1000).format('mm:ss');

   const videoId =id?.videoId || id;//if id is object then grab videoID else  grab id for popular videos

   console.log(id)
   useEffect(() => {
      const get_video_details = async () => {
         const {                                //const data=await
            data: { items },
         } = await request('/videos', {
            params: {
               part: 'contentDetails,statistics',
               id: videoId,
            },
         })
         setDuration(items[0].contentDetails.duration)
         setViews(items[0].statistics.viewCount)
      }
      get_video_details()
   }, [videoId])
// Retreiving channel icon
   useEffect(() => {
      const get_channel_icon = async () => {
         const {
            data: { items },
         } = await request('/channels', {
            params: {
               part: 'snippet',
               id: channelId,
            },
         })
         setChannelIcon(items[0].snippet.thumbnails.default)
      }
      get_channel_icon()
   }, [channelId])
   return (
      <div className='video'>
         <div className='video__top'>
          <Link to ={`/watch/${id.videoId||video.id}`}>
               <img
               src={medium.url}
               alt=''
            />
          
          </Link> 
            <span></span>
         </div>
         <div className='video__title'>
         {Truncate(video.snippet.title)}
         </div>
         <div className='video__details'>
            <span>
               <AiFillEye />  {numeral(views).format('0.a')} Views •{' '} 
            </span>
            <span style={{marginLeft:"3px"}}>{moment(publishedAt).fromNow()}</span>
         </div>
         <div className='video__channel'>
            <img
               src={channelIcon?.url}
               alt=''
            />
            <p>{video.snippet.channelTitle}</p>
         </div>
      </div>
   )
}

export default Video
