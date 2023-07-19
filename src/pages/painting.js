import Image from 'next/image';
import Art from './/../assets/artdata.json';
import Link from 'next/link';

// import Pic from './/../assets/thecrow.jpg';

// import Pic from './../assets/thecrow.jpg'
const paintings = Art.filter(it => it.style === 'Painting');

function Display(item) {


    return(

    <div className = 'defaultArt'>
    <Link className='defaultArtTxt' href={`/art/${item.id}`}>{item.name}</Link>
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