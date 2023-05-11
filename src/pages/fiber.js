import Image from 'next/image';
import Art from './/../assets/artdata.json';


// import Pic from './/../assets/thecrow.jpg';

// import Pic from './../assets/thecrow.jpg'
const fibers = Art.filter(it => it.style === 'Fiber');

function Display(item) {
   

    return(
    

    <div className = 'defaultArt'>
    <h3 className='defaultArtTxt'>{item.name}</h3>
<Image className = 'defaultArtImg'
    src={item.pic} // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt={item.name}
  />
  </div>

    )
    
}


export default function Fiber(props) {


    // console.log(Art)
    return <div>
<div className='defaultArtContainer'>

{fibers.map(Display)}
</div>
    </div>
  }