import {View, StyleSheet, Button} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {LoadingContext} from '../../Common/contexts/LoadingProvider';
import {useGetCharacterQuery} from '../../Store/Reducers/rickAndMortyApi';
import {useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import CustomInput from '../../Components/CustomInput';

const CharacterEdit = () => {
  const {params} = useRoute<any>();
  const {data, isError, isLoading} = useGetCharacterQuery(params.id);
  const {toggleLoading} = useContext(LoadingContext);

  const {control, handleSubmit, setValue} = useForm();

  useEffect(() => {
    if (isLoading) {
      toggleLoading(true);
    } else {
      toggleLoading(false);
      if (data && data.name) {
        setValue('name', data.name);
        setValue('status', data.status);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      console.log(isError, 'ERROR');
    }
  }, [isError]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      {!isLoading && data && data.name && (
        <>
          <CustomInput
            name="name"
            placeholder="Name"
            control={control}
            rules={{
              required: 'Name is required',
            }}
          />
          <CustomInput
            name="status"
            placeholder="Status"
            control={control}
            rules={{
              required: 'Status is required',
            }}
          />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </>
      )}
    </View>
  );
};

export default CharacterEdit;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
