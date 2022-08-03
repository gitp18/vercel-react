import * as contentful from "contentful";
//const dotenv = require ('dotenv');if(process.env.NODE_ENV !== 'production') dotenv.config();



const connectContentful = contentful.createClient({
  space: 'ur53vvcipt43',
  accessToken: 'pNdIiHgcvwRwwznr_uiDt5nkl6jyja1Wc3VZGJG7o5Q'
});

// const connectContentful = contentful.createClient({
//   space: process.env.SPACE_ID,
//   accessToken: process.env.DELIVERY_API_ACCESS_TOKEN
// });

export default connectContentful;