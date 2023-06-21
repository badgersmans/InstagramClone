import { FlatList } from 'react-native'
import ListGridItem from './ListGridItem';

const ListGridView = ({data, Header}) => {
  return (
    <FlatList
        data={data}
        renderItem={({ item }) => <ListGridItem post={item} /> }
        numColumns={3}
        contentContainerStyle={{gap: 1}}
        columnWrapperStyle={{gap: 1}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        // style={{backgroundColor: 'red'}}
      />
  )
}

export default ListGridView