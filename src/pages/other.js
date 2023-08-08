import Image from 'next/image';
import Art from './/../assets/artdata.json';
import Link from 'next/link';

// import Pic from './/../assets/thecrow.jpg';

// import Pic from './../assets/thecrow.jpg'
const others = Art.filter(it => it.style === 'Other');

function Display(item) {
   

    return(
    

    <div className = 'defaultArt'>
    <Link className='defaultArtTxt' href={`/art/${item.id}`}>{item.name}</Link>
<Image className = 'defaultArtImg'
    key={item.name}
    src={item.pic} // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt={item.name}
  />
  </div>

    )
    
}


export default function Other(props) {


    // console.log(Art)
    return <div>
<div className='defaultArtContainer'>

{others.map(Display)}
</div>
    </div>
  }