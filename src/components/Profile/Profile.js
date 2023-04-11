import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/user"
import "./Profile.scss";


export default function Profile(props) {
  const {username} = props;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    }
  });

  if(loading) return null;
  if(error) return <h1>Usuário não encontrado.</h1>;

  const { getUser } = data;
  return (
    <div>
      <h1>Usuário logado</h1>
    </div>
  )
}
