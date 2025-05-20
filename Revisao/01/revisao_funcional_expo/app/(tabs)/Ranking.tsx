import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface RankingItem {
  username: string;
  score: number;
  position: number;
  date?: Date;  // Add date to the interface

}

const generateFakeData = (): RankingItem[] => {
  const names = ['Player', 'Gamer', 'Winner', 'Champion', 'Master'];
  const data: RankingItem[] = [];

  for (let i = 0; i < 50; i++) {
    const randomDate = new Date();
    randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 365));

    data.push({
      username: `${names[Math.floor(Math.random() * names.length)]}${Math.floor(Math.random() * 1000)}`,
      score: Math.floor(Math.random() * 10000),
      position: 0, // We'll set this after sorting
      date: randomDate
    });
  }

  // Sort by score and assign positions
  return data
    .sort((a, b) => b.score - a.score)
    .map((item, index) => ({
      ...item,
      position: index + 1
    }));
};

export const Ranking: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<RankingItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [rankingData, setRankingData] = useState<RankingItem[]>(() => generateFakeData());

  const handleSort = () => {
    const sortedData = [...rankingData]
      .sort((a, b) => b.score - a.score)
      .map((item, index) => ({
        ...item,
        position: index + 1
      }));
    setRankingData(sortedData);
  };
  const handleItemPress = (item: RankingItem) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Ranking</Text>
    
    <View style={styles.header}>
<TouchableOpacity 
          style={styles.headerCell} 
          onPress={handleSort}
        >
          <Text style={styles.headerText}>#</Text>
        </TouchableOpacity>
              <Text style={[styles.headerText, styles.usernameHeader]}>Username</Text>
      <Text style={styles.headerText}>Score</Text>
    </View>

    <ScrollView style={styles.scrollView}>
      {rankingData.map((item) => (
        <TouchableOpacity 
          key={item.position} 
          style={styles.rankingItem}
          onPress={() => handleItemPress(item)}
        >
          <Text style={[styles.position, item.position <= 3 ? styles.topThree : null]}>
            {item.position}
          </Text>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.score}>{item.score.toLocaleString()}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableOpacity 
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          {selectedItem && (
            <>
              <Text style={styles.modalTitle}>{selectedItem.username}</Text>
              <Text style={styles.modalText}>Score: {selectedItem.score.toLocaleString()}</Text>
              <Text style={styles.modalText}>
                Recorde estabelecido em: {selectedItem.date?.toLocaleDateString()}
              </Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  usernameHeader: {
    flex: 2,
  },
  headerCell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  rankingItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  position: {
    flex: 1,
    fontSize: 16,
  },
  topThree: {
    fontWeight: 'bold',
    color: '#FFD700',
  },
  username: {
    flex: 2,
    fontSize: 16,
  },
  score: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});