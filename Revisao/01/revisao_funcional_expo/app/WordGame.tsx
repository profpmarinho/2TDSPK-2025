import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Props {
  word: string;
  smallHint: string;
  bigHint: string;
}

export const WordGame: React.FC<Props> = ({ word, smallHint, bigHint }) => {
  // ...existing states...
  const [stars, setStars] = useState<number>(10);
  const [currentHint, setCurrentHint] = useState<string>('');
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Shuffle the word letters
    const letters = word.split('').sort(() => Math.random() - 0.5);
    setShuffledLetters(letters);
    setSelectedLetters(new Array(word.length).fill(''));
  }, [word]);

  const handleLetterPress = (letter: string, index: number) => {
    const emptyIndex = selectedLetters.findIndex(l => l === '');
    if (emptyIndex !== -1) {
      const newSelected = [...selectedLetters];
      newSelected[emptyIndex] = letter;
      setSelectedLetters(newSelected);
      
      const newShuffled = [...shuffledLetters];
      newShuffled[index] = '';
      setShuffledLetters(newShuffled);

      checkWin(newSelected.join(''));
    }
  };

  const handleSmallHint = () => {
    if (stars >= 1) {
      setStars(prev => prev - 1);
      setCurrentHint(smallHint);
    } else {
      setCurrentHint('Você não tem estrelas suficientes!');
    }
  };

  const handleBigHint = () => {
    if (stars >= 2) {
      setStars(prev => prev - 2);
      setCurrentHint(bigHint);
    } else {
      setCurrentHint('Você não tem estrelas suficientes!');
    }
  };
  const handleSquarePress = (index: number) => {
    if (selectedLetters[index] !== '') {
      const letter = selectedLetters[index];
      const newSelected = [...selectedLetters];
      newSelected[index] = '';
      setSelectedLetters(newSelected);

      const emptyIndex = shuffledLetters.findIndex(l => l === '');
      const newShuffled = [...shuffledLetters];
      newShuffled[emptyIndex] = letter;
      setShuffledLetters(newShuffled);
    }
  };

  const checkWin = (attempt: string) => {
    if (attempt === word) {
      setMessage('Parabéns! Você acertou!');
    }
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === word.toLowerCase()) {
      setMessage('Parabéns! Você acertou!');
    } else {
      setMessage('Tente novamente!');
    }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo de Palavras</Text>

      <View style={styles.guessContainer}>
        <TextInput
          style={styles.input}
          value={guess}
          onChangeText={setGuess}
          placeholder="Tente adivinhar a palavra"
        />
        <TouchableOpacity style={styles.guessButton} onPress={handleGuess}>
          <Text style={styles.buttonText}>Tentar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.squares}>
        {selectedLetters.map((letter, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.square}
            onPress={() => handleSquarePress(index)}
          >
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.letters}>
        {shuffledLetters.map((letter, index) => (
          letter && (
            <TouchableOpacity
              key={index}
              style={styles.letter}
              onPress={() => handleLetterPress(letter, index)}
            >
              <Text style={styles.letterText}>{letter}</Text>
            </TouchableOpacity>
          )
        ))}
      </View>

      <Text style={styles.message}>{message}</Text>
      <View style={styles.hintsContainer}>
        <Text style={styles.starsText}>Estrelas: {stars}</Text>
        <TouchableOpacity 
          style={[styles.hintButton, styles.smallHint]} 
          onPress={handleSmallHint}
        >
          <Text style={styles.buttonText}>Dica Pequena (1★)</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.hintButton, styles.bigHint]} 
          onPress={handleBigHint}
        >
          <Text style={styles.buttonText}>Dica Grande (2★)</Text>
        </TouchableOpacity>
      </View>
      
      {currentHint ? (
        <Text style={styles.hintText}>{currentHint}</Text>
      ) : null}

      <Text style={styles.message}>{message}</Text>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  guessContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 200,
    marginRight: 10,
  },
  guessButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  squares: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  square: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  letter: {
    width: 40,
    height: 40,
    backgroundColor: '#E0E0E0',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  letterText: {
    fontSize: 20,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: '#007AFF',
  },
  hintsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  starsText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  hintButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: 200,
    alignItems: 'center',
  },
  smallHint: {
    backgroundColor: '#4CAF50',
  },
  bigHint: {
    backgroundColor: '#2196F3',
  },
  hintText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 10,
  },
});