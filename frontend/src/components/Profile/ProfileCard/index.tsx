import React, { useEffect, useState } from "react";
import { useUserCont, userProfile } from "../../../context/userContext";

export const ProfileCard = () => {
  const { getUserInfo } = useUserCont();
  const [userInfo, setUserInfo] = useState<userProfile | undefined>();
  useEffect(() => {
    const getData = async () => {
      const data = await getUserInfo();
      setUserInfo(data);
    };

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>{userInfo ? userInfo.fullName : "Carregando..."}</h2>
      <h2>{userInfo ? userInfo.username : "Carregando..."}</h2>
      <h2>{userInfo ? userInfo.email : "Carregando..."}</h2>
      <section className="address">
        <div className="flex flex-row">
          <h3>Endereço</h3>
          <button type="button">Pen</button>
        </div>
        <div>
          <h3>
            {userInfo
              ? `${userInfo.address.street}, ${userInfo.address.number}`
              : "Carregando"}
          </h3>
          <h3>{userInfo?.address.complement && userInfo.address.complement}</h3>
          <h3>
            {userInfo
              ? `${userInfo.address.city} - ${userInfo.address.state}`
              : "Carregando"}
          </h3>
          <h3>{userInfo ? userInfo.address.cep : "Carregando"}</h3>
        </div>
      </section>
    </div>
  );
};
