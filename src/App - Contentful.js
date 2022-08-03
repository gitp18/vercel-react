import * as React from "react";
import connectContentful from './connectContentful';



export function App() {

  const getData = async () => {
    const response = await connectContentful.getEntries({content_type: 'homeBanner'}, {content_type: 'howWeWorkList'});
    const res = response.items;
    if(res){
      console.log(res);
      const data = res.map((slide) => {
        const {sys, fields} = slide;
        const {id} = sys;
        return {id: id, title: fields.bannerTitle, desc: fields.bannerDescription}
      });
      //console.log(data)
    }
  } 

  React.useEffect(() => {
    getData();
  }, [])
  return (<>
    <div>Hello</div>
    <div id="displayUpdates">In App </div>
    <div id="profiles">In App</div>
  </>);
}

export default App;
