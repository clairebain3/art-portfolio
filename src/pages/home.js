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



// constructor(){
//     super();
//     this.state = {
//         isHovered: false
//     };
//     this.handleHover = this.handleHover.bind(this);
// }
// handleHover(){
//     this.setState(prevState => ({
//         isHovered: !prevState.isHovered
//     }));
// }
function Display(item) {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    let [show, setShow] = useState(false); 
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    let [active, setActive] = useState(false);
const setActiveImg = () => setActive(true);
// const imgClass = this.state.isHovered ? "pulse animated" : "";
    return(



    <div className = 'defaultArt'>
    <Link className='defaultArtTxt' href={`/art/${item.id}`}>{item.name}</Link>
<Image className={hovered ? 'activeArtImg' : 'defaultArtImg'} style={{cursor:'pointer'}} onClick={handleShow} onMouseEnter={toggleHover} onMouseLeave={toggleHover}
    key={item.name}
    src={item.pic} // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt={item.name}
    // onClick={handleClick}
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

export default function Homepage(props) {


    console.log(Art)
    return <div>
<div className='defaultArtContainer'>

{Art.map(Display)}
</div>
    </div>
  }