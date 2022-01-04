import React, { useCallback, useEffect, useState } from "react";
import Button from "../elements/button";
import { getDataUserDetail } from "../services/BerandaPost";

const Username = (props) => {
  const [dataDetail, setDataDetail] = useState([]);
  const [idUser, setIdUser] = useState("");

  const getDataUserList = useCallback(async () => {
    const data = await getDataUserDetail(props.userId);
    setDataDetail(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataUserDetail]);

  useEffect(() => {
    setTimeout(() => {
      getDataUserList();
    }, 2500);
    getDataUserList();
  }, [getDataUserList]);
  return (
    <>
      <Button className="nav-link" type="link" href="/detail/">
        Written By : {console.log(dataDetail)}
      </Button>
    </>
  );
};

export default Username;
