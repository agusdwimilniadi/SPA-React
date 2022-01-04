import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Comments = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${props.id}`
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
    console.log("data come ", props);
  }, []);

  return (
    <>
      <div className="card p-3 shadow-md">
        <div className="d-flex justify-content-between align-items-center">
          <div className="user d-flex flex-row align-items-center">
            {/*  eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              src="https://i.imgur.com/hczKIze.jpg"
              width={30}
              className="user-img rounded-circle mr-2"
            />
            <span>
              <small className="font-weight-bold text-primary">
                james_olesen {props.id} n
              </small>
              <small className="font-weight-bold">
                Hmm, This poster looks cool
              </small>
            </span>
          </div>
          <small>2 days ago</small>
        </div>
        <div className="action d-flex justify-content-between mt-2 align-items-center">
          <div className="reply px-4">
            <small>Remove</small> <span className="dots" />
            <small>Reply</small> <span className="dots" />
            <small>Translate</small>
          </div>
          <div className="icons align-items-center">
            <i className="fa fa-star text-warning" />
            <i className="fa fa-check-circle-o check-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
