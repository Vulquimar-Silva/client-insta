import React from "react";
import { Link } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";

import useAuth from "../../../hooks/useAuth"
import ImageNoFound from "../../../assets/images/png/avatar.png"
import "./RightHeader.scss";

export default function RightHeader() {
  const {auth} = useAuth();
  return (
    <div className="right-header">
      <Link to="/">
        <Icon name="home" />
      </Link>
      <Icon name="comments outline" />
      <Icon name="plus square outline" />
      <Link to={`/${auth.username}`}>
        <Image src={ImageNoFound} avatar />
      </Link>
    </div>
  )
}
