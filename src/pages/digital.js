import Image from 'next/image';
import Art from './/../assets/artdata.json';
import Link from 'next/link';
import React, {useState}  from 'react';
import Infomodal from '../components/infoModal'

// import Pic from './/../assets/thecrow.jpg';

// import Pic from './../assets/thecrow.jpg'
const digitals = Art.filter(it => it.style === 'Digital');

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
  />

<Infomodal

                handleClose ={handleClose}
                show={show}
                modalTitle={item.name}
                modalInformation={item.desc}
              />

  </div>


    )
}

export default function Digital(props) {


    console.log(Art)
    return <div>
<div className='defaultArtContainer'>

{digitals.map(Display)}
</div>
    </div>
  }