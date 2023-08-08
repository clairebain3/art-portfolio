import Image from 'next/image';
import Art from './/../assets/artdata.json';
import Link from 'next/link';
import React, {useState}  from 'react';
import Infomodal from '../components/infoModal'

// import Pic from './/../assets/thecrow.jpg';

// import Pic from './../assets/thecrow.jpg'

// function handleClick(){
//     <Link href={`/blog/${post.slug}`}>{post.title}</Link>

// }







function Display(item) {

    let [show, setShow] = useState(false); 
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(

    <div className = 'defaultArt'>
    <Link className='defaultArtTxt' href={`/art/${item.id}`}>{item.name}</Link>
<Image className = 'defaultArtImg' style={{cursor:'pointer'}} onClick={handleShow}
    key={item.name}
    src={item.pic} // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt={item.name}
    // onClick={handleClick}
  />

<Infomodal
      // let [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
                // buttonName="btn"
                handleClose ={handleClose}
                show={show}
                modalTitle={item.name}
                // modalFunction="add"
                modalInformation={item.desc}
                // onClickInfo="onclick"
              />

  </div>


    )
}

export default function Homepage(props) {


    console.log(Art)
    return <div>
<div className='defaultArtContainer'>

{Art.map(Display)}
</div>
    </div>
  }