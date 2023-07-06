import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export function useData() {
  const [profileData, setProfileData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const options = {
          method: "GET",
          url: `${process.env.REACT_APP_SERVER}/myprofile`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const response = await axios(options);

        if (response.status === 200 && response.data.length > 0) {
          setProfileData({ ...response.data[0], hasData: true });
        } else {
          setProfileData({ hasData: false });
        }

        setDataLoaded(true);
        // console.log(response.data);

        if (response.data.length > 3) {
          console.log(response.data[3]);
        }
      } catch (error) {
        alert(error.message);
        return;
      }
    };

    loadProfileData();
  }, [getAccessTokenSilently]);

  return { profileData, dataLoaded };
}

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";

// export function useData() {
//   const [profileData, setProfileData] = useState({});
//   const [dataLoaded, setDataLoaded] = useState(false);
//   const { getAccessTokenSilently } = useAuth0();

//   useEffect(() => {
//     const loadProfileData = async () => {
//       try {
//         // const accessToken = await getAccessTokenSilently();
//         const options = {
//           method: "GET",
//           url: `${process.env.REACT_APP_SERVER}/myprofile`,
//           headers: {
//             // Authorization: `Bearer ${accessToken}`,
//             Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
//           },
//         };

//         const response = await axios(options);

//         if (response.status === 200 && response.data.length > 0) {
//           setProfileData({ ...response.data[0], hasData: true });
//         } else {
//           setProfileData({ hasData: false });
//         }

//         setDataLoaded(true);
//         console.log(response.data);

//         if (response.data.length > 3) {
//           console.log(response.data[3]);
//         }
//       } catch (error) {
//         alert(error.message);
//         return;
//       }
//     };

//     loadProfileData();
//   }, [getAccessTokenSilently]);

//   return { profileData, dataLoaded };
// }

// import { useState, useEffect } from "react";
// import axios from "axios";

// export function useData() {
//   const [profileData, setProfileData] = useState({});
//   const [dataLoaded, setDataLoaded] = useState(false);

//   useEffect(() => {
//     const options = {
//       method: "GET",
//       url: "http://localhost:3001/api",
//       headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
//       },
//     };

//     axios(options)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log("Error: ", error);
//       });

//     const loadProfileData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVER}/myprofile`
//         );

//         if (response.status === 200 && response.data.length > 0) {
//           setProfileData({ ...response.data[0], hasData: true });
//         } else {
//           setProfileData({ hasData: false });
//         }

//         setDataLoaded(true);
//         console.log(response.data);

//         if (response.data.length > 3) {
//           console.log(response.data[3]);
//         }
//       } catch (error) {
//         alert(error.message);
//         return;
//       }
//     };

//     loadProfileData();
//   }, []);

//   return { profileData, dataLoaded };
// }

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { useAuth0 } from "@auth0/auth0-react";

// export function useData() {
//   const [profileData, setProfileData] = useState({});
//   const [dataLoaded, setDataLoaded] = useState(false);

//   useEffect(() => {

//     const options = {
//       method: "GET",
//       url: "http://localhost:3001/api",
//       headers:  `authorization: Bearer ${process.env.REACT_APP_TOKEN}`,
//     };

//     axios(options)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log('byeeeeeeeeee');
//       });

//     const loadProfileData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_SERVER}/myprofile`);

//         if (response.status === 200) {
//           setProfileData({ ...response.data[0], hasData: true });
//         } else {
//           setProfileData({ hasData: false });
//         }

//         setDataLoaded(true);
//         console.log(response.data);

//         console.log(response.data[3]);
//       } catch (error) {
//         alert(error.message);
//         return;
//       }
//     };

//     loadProfileData();
//   }, []);

//   return { profileData, dataLoaded };
// }
