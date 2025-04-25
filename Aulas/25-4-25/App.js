import React, { useState } from 'react';
import { Animated, StyleSheet, View, Text, TextInput, UIManager, LayoutAnimation, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function SwipeList() {  

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newItem = { key: `${items.length}`, text: inputValue, id: Date.now()};
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setItems([...items, newItem]);
      setInputValue('');
      Keyboard.dismiss(); 
    }
  };
  const renderItem = ({ item }) => {
    return (
      <List.Item
        key={item.id}
        title={item.text}
        style={styles.listItem}
        titleStyle={styles.title}
      />
    )
  }
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.hiddenContainer}>
      <IconButton
        icon="trash-can-outline"
        iconColor="#c93c3c"
        size={72}
        onPress={() => {
          deleteItem(data.item)
        }}
        style={[styles.iconButtonDelete]}
      />
    </View>
  );
  const deleteItem = (item) => {
    const newItems = items.filter((i) => i !== item);
    setItems(newItems);
  }
  return (     
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
    >
      <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>My List</Text>
        </View>
        {items.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No items added to My List</Text>
          </View>
        ) : (
        <SwipeListView
          keyExtractor={(item, index) => item.id.toString()}
          data={items}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={100}
          disableLeftSwipe={true}
        /> )}
        <View style={styles.bottomBar}>         
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type here..."
              value={inputValue}
              onChangeText={setInputValue}
            />
            <IconButton
              icon="plus"
              iconColor="#fff"
              size={24}
              onPress={handleAddItem}
              style={{ backgroundColor: '#0067ee', borderRadius: 50 }}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
  
}
const styles = StyleSheet.create({
  topBar: {
    height: 75,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: '#ffffff',
    fontSize: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  listItem: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 25,
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconButtonDelete: {
    marginTop: 10,
    borderRadius: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hiddenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#0067ee',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 24,
    color: '#888',
  }
});