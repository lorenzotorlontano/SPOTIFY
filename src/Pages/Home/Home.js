import React from "react";
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes,
} from "../../../src/Config/Config";

function Home() {
  return (
    <div>
      <a
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`}
      >
        Login
      </a>
    </div>
  );
}

export default Home;
