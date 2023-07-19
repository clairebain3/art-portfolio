import Image from 'next/image';
import Art from './/../assets/artdata.json';
import Link from 'next/link';

// import Pic from './/../assets/thecrow.jpg';

// import Pic from './../assets/thecrow.jpg'

// function handleClick(){
//     <Link href={`/blog/${post.slug}`}>{post.title}</Link>

// }

function Display(item) {
    return(

    <div className = 'defaultArt'>
    <Link className='defaultArtTxt' href={`/art/${item.id}`}>{item.name}</Link>
<Image className = 'defaultArtImg'
    src={item.pic} // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt={item.name}
    // onClick={handleClick}
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