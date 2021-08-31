import React, { useEffect, useState} from "react"
import { Col, Container, Row } from "react-bootstrap"
import Video from "../../components/video/Video"
import CategoriesBar from "../../components/categoriesBar/CategoriesBar"
import { getPopularVideos } from "../../videos.action"
import {useDispatch, useSelector} from "react-redux"


const HomeScreen = () => {
   const dispatch=useDispatch();//Hooks
   useEffect(()=>{
        dispatch(getPopularVideos());//get or retreive /call getPopular videos 
   },[dispatch])

   const {videos} = useSelector(state=>state.homeVideos)
   return (
      <Container>
         <CategoriesBar />
         <Row>
            {videos.map((video) => (
               <Col key={video.id} lg={3} md={4}>
                  <Video video={video}/>
               </Col>
            ))}
         </Row>
      </Container>
   )
}

export default HomeScreen
