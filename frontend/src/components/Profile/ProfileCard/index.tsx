import React, { useEffect, useState } from "react";
import { useUserCont, userProfile } from "../../../context/userContext";
import { IoPencilSharp } from "react-icons/io5";

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
    <div className="infoCard">
      <section className="userInfo flex flex-col gap-2">
        <h2 className="textOverflow">
          {userInfo ? userInfo.fullName : "Carregando..."}
        </h2>
        <h2 className="textOverflow">
          {userInfo ? userInfo.username : "Carregando..."}
        </h2>
        <h2 className="textOverflow">
          {userInfo ? userInfo.email : "Carregando..."}
        </h2>
      </section>
      <section className="address flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <h3 className="text-brand-1 font-extrabold">Endereço</h3>
          <button type="button" onClick={() => console.log("edit")} className="btn-brand1 btn-small">
            {<IoPencilSharp />}
          </button>
        </div>
        <div>
          <h3 className="textOverflow">
            {userInfo
              ? `${userInfo.address.street}, ${userInfo.address.number}`
              : "Carregando"}
          </h3>
          <h3 className="textOverflow">
            {userInfo?.address.complement && userInfo.address.complement}
          </h3>
          <h3 className="textOverflow">
            {userInfo
              ? `${userInfo.address.city} - ${userInfo.address.state}`
              : "Carregando"}
          </h3>
          <h3 className="textOverflow">
            {userInfo ? userInfo.address.cep : "Carregando"}
          </h3>
        </div>
      </section>
    </div>
  );
};
