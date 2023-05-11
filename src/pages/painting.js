import Image from 'next/image';
import Art from './/../assets/artdata.json';


// import Pic from './/../assets/thecrow.jpg';

// import Pic from './../assets/thecrow.jpg'
const paintings = Art.filter(it => it.style === 'Painting');

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

export default function Painting(props) {


    console.log(Art)
    return <div>
<div className='defaultArtContainer'>

{paintings.map(Display)}
</div>
    </div>
  }