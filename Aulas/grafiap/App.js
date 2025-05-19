import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { G, Text as SVGText } from 'react-native-svg';

export default function App() {
  const data = [14, 80, 100, 55, 34, 120, 90];

  const CUT_OFF = 20;

  const Labels = ({ x, y, bandwidth, data }) => (
    <G>
      {data.map((value, index) => (
        <SVGText
          key={index}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={12}
          fill={value < CUT_OFF ? 'black' : 'white'}
          alignmentBaseline={'middle'}
          textAnchor={'middle'}
        >
          {value}
        </SVGText>
      ))}
    </G>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Bar Chart Example</Text>
      <BarChart
        style={{ height: 200, width: '90%' }}
        data={data}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 30, bottom: 10 }}
        spacingInner={0.2}
      >
        <Grid />
        <Labels />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10, width: '90%' }}
        data={data}
        formatLabel={(value, index) => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
        contentInset={{ left: 30, right: 30 }}
        svg={{ fontSize: 12, fill: 'black' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  }
});
