import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useGetCharacterListQuery} from '../../Store/Reducers/rickAndMortyApi';
import {LoadingContext} from '../../Common/contexts/LoadingProvider';
import {Character, User} from '../../Common/types/Api';
import {useNavigation} from '@react-navigation/native';
import {CHARACTER_EDIT_SCREEN} from '../../Common/constants/navigation';
import {CharacterStackProps} from '../../Common/types/Navigation';
import {useAppSelector} from '../../Store/hooks';
import {selectUser} from '../../Store/Reducers/loginSlice';

type ItemProps = {
  character: Character;
};

const RenderItem = ({character}: ItemProps) => {
  const navigation = useNavigation<CharacterStackProps>();

  const user: User = useAppSelector(selectUser);

  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: `${character.image}`,
        }}
        style={styles.itemImage}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemContentHeader}>{character.name}</Text>
        <Text style={styles.itemContentText}>{character.status}</Text>
        <Text style={styles.itemContentText}>{character.type}</Text>
      </View>
      <View style={styles.itemButton}>
        <Button
          onPress={() => {
            navigation.navigate(CHARACTER_EDIT_SCREEN, {
              id: character.id,
            });
          }}
          disabled={user && user.name === ''}
          color="#f194ff"
          title="Edit"
        />
      </View>
    </View>
  );
};

const CharacterList = () => {
  const {data, isError, isLoading} = useGetCharacterListQuery();
  const {toggleLoading} = useContext(LoadingContext);

  useEffect(() => {
    if (isLoading) {
      toggleLoading(true);
    } else {
      toggleLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      console.log(isError, 'ERROR');
    }
  }, [isError]);

  return (
    <SafeAreaView>
      {!isLoading && data && data.results && (
        <FlatList
          style={styles.flatList}
          data={data.results}
          renderItem={({item}) => {
            return <RenderItem character={item} />;
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  flatList: {
    marginTop: 10,
  },
  item: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  itemContent: {
    alignItems: 'center',
    marginHorizontal: 5,
    flex: 1,
  },
  itemContentHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemContentText: {
    textAlign: 'center',
  },
  itemButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
