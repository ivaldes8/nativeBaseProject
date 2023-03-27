import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {useAppSelector, useAppDispatch} from '../Store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../Store/Reducers/counterSlice';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button onPress={() => dispatch(decrement())} title="-" />
        <Text style={styles.text}>{count}</Text>
        <Button onPress={() => dispatch(increment())} title="+" />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.text}
          keyboardType="numeric"
          placeholder="Set increment aount"
          value={incrementAmount}
          onChangeText={e => setIncrementAmount(e)}
        />
        <Button
          onPress={() => dispatch(incrementByAmount(incrementValue))}
          title="Add Amount"
        />
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => dispatch(incrementAsync(incrementValue))}
          title=" Add Async"
        />

        <Button
          onPress={() => dispatch(incrementIfOdd(incrementValue))}
          title="Add If Odd"
        />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 30,
  },
});
