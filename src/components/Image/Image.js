import { Image as ExpoImage } from 'expo-image';

const Image = ({style = {}, source = "", contentFit = "cover"}) => {
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
//   console.log(source)
//   console.log(style)
  return (
    <ExpoImage
        style={style}
        source={source}
        placeholder={blurhash}
        contentFit={contentFit}
        transition={300}
    />
  )
}

export default Image