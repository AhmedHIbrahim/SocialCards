import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

import {Card, Header, Footer, Separator} from './components';

const App = () => {
  const [confState, setConfState] = useState({
    seed: 'a019ea8a',
    page: 1,
    resultsCount: 20,
    loading: false,
    error: null,
    refreshing: false,
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsersDataRequest();
  }, [confState.page, confState.seed]);

  fetchUsersDataRequest = () => {
    const url = `https://randomuser.me/api/?seed=${confState.seed}&page=${confState.page}&results=${confState.resultsCount}`;
    setConfState({...confState, loading: true});
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setData(res.results);
        setConfState({
          ...confState,
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch((error) => {
        setConfState({...confState, error: error, loading: false});
      });
  };

  const renderUserCard = ({item}) => <Card user={item} />;

  const updatePageNo = (pageNo) => {
    setConfState({...confState, page: pageNo});
  };

  const getAnotherFriendList = () => {
    setConfState({
      ...confState,
      refreshing: true,
      page: 1,
      seed: Math.random().toString(36).substring(7),
    });
  };

  return (
    <View>
      <View style={styles.seedContainer}>
        <Text style={styles.seedLabel}> Current Seed: {confState.seed}</Text>
      </View>
      {confState.loading ? (
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.loadingLabel}>Loading Data ...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.login.uuid}
          renderItem={renderUserCard}
          numColumns={2}
          ListHeaderComponent={
            <Header pageNo={confState.page} onPageNoChange={updatePageNo} />
          }
          ListFooterComponent={<Footer />}
          refreshing={confState.refreshing}
          onRefresh={getAnotherFriendList}
          ItemSeparatorComponent={Separator}

        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingLabel: {
    marginVertical: 10,
    color: '#169eff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  seedContainer: {
    backgroundColor: '#1b2440',
    padding: 5,
    marginBottom: 5,
  },
  seedLabel: {
    color: '#ff5252',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default App;
