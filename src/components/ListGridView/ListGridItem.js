import { View } from 'react-native'
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';

const ListGridItem = ({post}) => {
    // console.log(post)
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    return (
        <View style={{flex: 1, aspectRatio: 1, maxWidth: '33.33%' }}>
            <Image
                style={{flex: 1}}
                source={post.image || post.images?.[0]}
                placeholder={blurhash}
                contentFit="cover"
                transition={300}
            />
            {
                post.images && (
                    <MaterialIcons 
                        name="collections" 
                        size={16} 
                        color="white" 
                        style={{position: 'absolute', top: 5, right: 5}}
                    />
                )
            }
        </View>
    )
}

export default ListGridItem