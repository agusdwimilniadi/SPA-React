import React, { useCallback, useEffect } from "react";
import Card from "../parts/Card";
import Navbar from "../parts/Navbar";
import { useState } from "react";
import { getDataPost } from "../services/BerandaPost";

const Home = () => {
  const [dataPost, setDataPost] = useState([]);

  const getDataPostList = useCallback(async () => {
    const data = await getDataPost();
    setDataPost(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataPost]);

  useEffect(() => {
    getDataPostList();
  }, [getDataPostList]);
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="text-center mb-5">Post</h1>
        <div className="row">
          {dataPost.map((item) => {
            return (
              <div className="col-md-12">
                <Card
                  key={item.id}
                  userId={item.userId}
                  title={item.title}
                  body={item.body}
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
