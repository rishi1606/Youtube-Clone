import React from 'react'
import "../../screens/comments/comment.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { getCommentsOfVideoById } from '../../videos.action';
import { useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment'
import numeral from 'numeral'
const Comment = ({videoId}) => {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId));
    }, [videoId,dispatch])

    const {comments}=useSelector(state=>state.commentsList);

    console.log();
    return (
        <div className="comment">
            <div className="comment-number">
                <p>20</p>
                <h6>Comments</h6>
            </div>
            <div className="comment-type">
                <div className="comment-img">
                <img src="https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s48-c-k-c0x00ffffff-no-rj"></img>
                </div>
                <div className="allcomment">
                    <input type="text" name="t" placeholder="Add a public comment"></input>
                </div>
            </div>
            {comments.map((com,i)=>{
                return(<>
                    <div className="public-comments">
                    <div className="channelIc">
                        <img src={com.snippet?.topLevelComment.snippet.authorProfileImageUrl}></img>
                    </div>
                    <div className="comment-detail">
                            <p>{com.snippet?.topLevelComment.snippet.authorDisplayName}<span> 5 days ago</span></p>
                            <h6>
                            {com.snippet?.topLevelComment.snippet.textDisplay}</h6>
                            <p><ThumbUpIcon className="up"/> <span className="like">{numeral(com.snippet.topLevelComment.snippet.likeCount).format("0.a")}</span> &nbsp;<ThumbDownIcon className="down"/><span className="like"> {numeral(com.snippet.topLevelComment.snippet.dislikeCount).format("0.a")}</span> </p>
                    </div>
                </div>


                    </>)
               
            })}
            
        </div>
    )
}

export default Comment
