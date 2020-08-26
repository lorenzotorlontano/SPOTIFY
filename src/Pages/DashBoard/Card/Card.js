// import React, { useState, useEffect } from "react";
// import { getPlaylist } from "../../../Api/Api";
// import { useLocation } from 'react-router-dom';
// import DashBoard from '../../../Pages/DashBoard/DashBoard'

// function Card() {
//   const [user, setUser] = useState();
//   const location = useLocation();

//   useEffect(() => {
//     const resp = getPlaylist().then((re) => {
//       setUser(re.data.items[0])
//     })
//   }, []);

//   console.log(user)


//   return <div>
//     <DashBoard
//       userData={user}
//     />
//   </div>;
// }

// export default Card;
