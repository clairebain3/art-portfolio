// import { useRouter } from 'next/router';
// import React, {useState}  from 'react';
import { useParams } from 'react-router-dom';
import Art from './/../../assets/artdata.json';
//  console.log(Art)
export default function Page() {
    const { myId } = useParams()
//     const router = useRouter();
    // let [myId, setMyId] = useState(router.query.id); 

    const myArt = Art.find(it => it.id ==  myId)
    console.log(myArt)
//     console.log(router.query.id)
//     // console.log(myArt.id)

  return <p>Post: {myArt.id}</p>;
}