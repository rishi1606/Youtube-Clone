import React, { useEffect ,useState} from 'react'
import "../../components/Metadata/Metadata.css"
import Button from '@material-ui/core/button'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import moment from 'moment'
import numeral from 'numeral'
import request from '../../api';
import { useParams } from 'react-router';
function Truncate(str){
        return str.length > 10 ? str.substring(0, 200) + "..." : str;
    
  }

const Metadata = ({vid,videoId}) => {
        const red="#CC0000"
        const text1="Subscribe"
        const text2="white"
        const[subs,subsColor]=useState(red)
        const[text,subsText]=useState(text1)
        const[textis,subsText2]=useState(text2)
        const btnClick=()=>{
             let newBg="#ECECEC";
             subsColor(newBg)
             let newText="Subscribed";
             subsText(newText)
             let newText2="#000000"
             subsText2(newText2)
        
        }  
        const {id}=useParams();
     
        const [views, setViews] = useState(null);//VIEWS STATE
        const [duration, setDuration] = useState(null);//DURATION STATE
        const [channelIcon, setChannelIcon] = useState(null); // CHANNEL ICON STATE 
        // CODE FOR DURATION & VIEWS
        const seconds = moment.duration(duration).asSeconds();
        const _duration = moment.utc(seconds * 1000).format('mm:ss');
        const channelId=vid[0]?.snippet?.channelId;
        console.log(channelId)
     useEffect(() => {
        const get_channel_icon=async()=>{
                const {
                        data: { items },
                     } = await request('/channels', {
                        params: {
                           part: 'snippet',
                           id: channelId,
                        },
                     }
                     )
                     setChannelIcon(items[0].snippet.thumbnails.default)
                  
                  }
                  get_channel_icon()
                 
     }, [channelId])
  return (
          
    <div className="metadata">
    {
            vid.map(v=>{
                    return(
                        <>
                        
                        <div className="title">
                         <h1>{v.snippet.title}</h1>
                        </div>
                        <div className="Meta-details">
                        <div className="views">
                                <p> {numeral(v.statistics.viewCount).format('0.a')} views • {moment(v.snippet.publishedAt).fromNow()}</p>
                        </div>
                        <div className="likes">
                                <p><ThumbUpIcon className="up"/>  {numeral(v.statistics.likeCount).format('0.a')}&nbsp;&nbsp;&nbsp;&nbsp;<ThumbDownIcon className="down"/>  {numeral(v.statistics.dislikeCount).format('0.a')}</p>
                        </div>
                         
                         
                    </div>
         <div className="titleMeta">
                    <div className="Meta_icon">
                            <img src={channelIcon?.url}/>
                    </div>
                    <div className="Meta_details">
                            <h6>{v.snippet.channelTitle}</h6>
                            <h3>10k Subscribers</h3>
                            <p> {Truncate(v.snippet.description)} </p>
    
                            
                                 
                    </div>
                    <div className="Meta_Subscribe">
                    <Button style={{backgroundColor:subs,color:textis}} onClick={btnClick} className="subs" variant="contained">{text}</Button>
                    </div>
            </div>

                        </>
                    
                    )})
    }
  
    </div>
  )
}

export default Metadata
