import * as React from "react";
import axios from 'axios';


export function App() {

  const get_review_list = () => {
    const token =
      "AQV5c7gK8YUl9VXSl4D1qYV0p8DkXZAoutdSlTGJqi0sQ6fQdlczVx81quhLM89_FAiyPv8irAywCUlJCk7W9ecDVI11ILU9zBFBRL_UbT7oHfwoDTncVfOmRmirI9fV423hJ0uHLSEmbAgGChAdQrMGITpXg_yh7vU3g3GcokwCUdmjWWRO5FL9fBvNRDYdN_aSzz7l2WrH30EUBbQCRWhJCjpm0J-i4USxKS7kbxJ4c1YgFTs8r-eW-aGRt4Kdb9c6CCewYCBf5YHd-w71RQxqeGsxnBQ3D2vJEBbHUovbLEctf0hBYdwTfbl75zn2I0QRxc0IFOdyQ71eshP_P1UHSPyljA";

      //const url = `https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/me`;
      const url = "https://api.linkedin.com/v2/me";

    console.log("linkedinUrl->", url);

    // fetch(url, {
    //   method: "GET",
    //   mode: "no-cors",
    //   headers: {
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Request-Method": "POST",
    //     "Cache-Control": "no-cache",
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    axios.get(url, {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Authorization': `Basic ${token}`
      }
    })
      .then(function (response) {
        console.log("responseLinkedin->", response);
        //const data = response.json(); console.log(data);
      })
      .catch(function (error) {
        console.log("linkedinErr->", error);
      });
  };

  React.useEffect(() => {
    get_review_list();
  }, [])
  return (<>
    <div>Hello</div>
    <div id="displayUpdates">In App </div>
    <div id="profiles">In App</div>
  </>);
}

export default App;
