import Image from 'next/image';
import Art from './/../assets/artdata.json';


// import Pic from './/../assets/thecrow.jpg';

// import Pic from './../assets/thecrow.jpg'

function Display(item) {
    return(
<div>
    <div className = 'defaultArt'>
    <h4 className='defaultArtTxt'>{item.name}</h4>
<Image className = 'defaultArtImg'
    src={item.pic} // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt={item.name}
  />
  </div>
</div>

    )
}

export default function Homepage(props) {


    console.log(Art)
    return <div>


{Art.map(Display)}
    </div>
  }