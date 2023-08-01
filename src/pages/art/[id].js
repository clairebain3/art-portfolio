// // import { useRouter } from 'next/router';
// // import React, {useState}  from 'react';
// import { useParams } from 'react-router-dom';
// import Art from './/../../assets/artdata.json';
// //  console.log(Art)
// export default function Page() {
//     const { myId } = useParams()
// //     const router = useRouter();
//     // let [myId, setMyId] = useState(router.query.id); 

//     const myArt = Art.find(it => it.id ==  myId)
//     console.log(myArt & "here it is")
// //     console.log(router.query.id)
//     console.log(myArt.id)

//   return <p>Post: {myArt.myId}</p>;
// }


export async function generateStaticParams() {
  const posts = await fetch('https://...').then((res) => res.json())
 
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default function Page({ params }) {
  return <div>My Post: {params.id}</div>
}