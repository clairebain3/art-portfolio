
// import { GetStaticProps, GetStaticPaths  } from 'next';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs/promises';
import { Artifika } from 'next/font/google';
import Header from '../header';

async function getData() {
    const filePath = path.join(process.cwd(), 'src/assets', 'artdata.json');
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData.toString());

    return data;
  }

  export const getStaticProps = async (context) => {
    const itemID = context.params?.id;
    const data = await getData();
    console.log(data, "here is the data", itemID)
    const foundItem = data.find((item) => item.id == itemID);
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
     
  }
  
  return {
    props: {
      specificArtData: foundItem
    }
  }
}

export const getStaticPaths = async () => {
    const data = await getData();
    const pathsWithParams = data.map((foundItem) => ({ params: { id: toString(foundItem.id) }}))
// console.log(foundItem.name)
    return {
        paths: pathsWithParams,
        fallback: true
    }
  }

  function projectPage(props) {
      const router = useRouter();
    
      if (props.hasError) {
        console.log(props)
        return <h1>Error - please try another parameter</h1>
      }
    
      if (router.isFallback) {
          return <h1>Loading...</h1>
      }
    
      return (
        
        <div>
          <Header/>
          <h1>{props.specificArtData.name}</h1>
          <p>{props.specificArtData.desc}</p>
        </div>
      )
    }
    
    export default projectPage;