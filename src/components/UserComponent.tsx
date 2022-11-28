import React, {useEffect} from 'react';
import {ActivityIndicator, View, Button, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../store/services/fetchUsers ';
import {UserData} from '../interfaces/UserData';

export const Users = () => {
  const dispatch = useDispatch();
  const {users, loading} = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View>
      <Button title={'Reload'} onPress={() => dispatch(fetchUsers())} />
      {users.map((user: UserData) => {
        return (
          <View style={styles.container} key={user.id}>
            <View>
              <View style={styles.dataContainer}>
                <Text>
                  {user.first_name} {user.last_name}
                </Text>
              </View>
              <View style={styles.dataContainer}>
                <Text>{user.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  dataContainer: {
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
  },
});
