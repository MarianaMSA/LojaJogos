import { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("/auth/me", config).then((response) => {
        setNotLogged(false);
        setUser(response.data);
      });
    }
  }, [mounted]);

  return (
    <div className="profile container">
      {!notLogged ? (
        <div className="user-logado card-logado">
          <div className="profile-img">
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLTNDWSxPjRimdb7dmPRXSDnciDL3J1Z2CqkqCSU=s900-c-k-c0x00ffffff-no-rj"
              alt="Mario"
            />
          </div>
          <h2>{user.name}</h2>
          <span>E-mail: {user.email}</span>
          <span>Membro desde: {user.createdAt}</span>
        </div>
      ) : (
        <h2>Faça login</h2>
      )}
    </div>
  );
};

export default Profile;
