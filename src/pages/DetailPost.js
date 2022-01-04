import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../parts/Comments";
import Navbar from "../parts/Navbar";
import Username from "../parts/Username";
import {
  selectedPost,
  selectedProduct,
} from "../redux/actions/productsActions";
import { getDataDetailPost } from "../services/DetailsPost";

const Detailpost = (props) => {
  // const [dataDetailPost, setDataDetailPost] = useState([]);

  // const getDataPostList = useCallback(async () => {
  //   const data = await getDataDetailPost(props.match.params.id);
  //   setDataDetailPost(data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getDataDetailPost]);

  // useEffect(() => {
  //   getDataPostList();
  // }, [getDataPostList]);
  const post = useSelector((state) => state.post);
  const postId = props.location.params.id;
  const dispatch = useDispatch();
  console.log("params ", props);

  const fetchPostDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedPost(response.data));
  };
  useEffect(() => {
    if (postId && postId !== "") fetchPostDetail();
  }, [postId]);
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <div className="text-center">
          <h1>{dataDetailPost?.title}</h1>
        </div>
        <Username userId={dataDetailPost?.userId} />
        <p>{dataDetailPost?.body}</p>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="headings d-flex justify-content-between align-items-center mb-3">
              <h5>Comments</h5>
            </div>
            <Comments id={dataDetailPost.id} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Detailpost;
