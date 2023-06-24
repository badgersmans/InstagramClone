import { FlatList } from 'react-native'
import ListGridItem from './ListGridItem';

const ListGridView = ({data, Header, refetch, loading}) => {
  return (
    <FlatList
        data={data}
        renderItem={({ item }) => item && <ListGridItem post={item} /> }
        numColumns={3}
        contentContainerStyle={{gap: 1}}
        columnWrapperStyle={{gap: 1}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        onRefresh={refetch}
        refreshing={loading}
        // style={{backgroundColor: 'red'}}
      />
  )
}

export default ListGridView