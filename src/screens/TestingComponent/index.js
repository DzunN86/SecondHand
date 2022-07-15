import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';

const TestingComponent = () => {
  const bottomSheetRef = useRef(null);
  const [count, setCount] = useState(0);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const emojiContainerStyle = useMemo(
    () => ({
      ...styles.emojiContainer,
      height: 50 * count,
    }),
    [count],
  );
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  // callbacks
  const handleIncreaseContentPress = useCallback(() => {
    setCount(state => state + 1);
  }, []);
  const handleDecreaseContentPress = useCallback(() => {
    setCount(state => Math.max(state - 1, 0));
  }, []);
  return (
    <View style={styles.container}>
      <Button title="Expand" onPress={handleExpandPress} />
      <Button title="Close" onPress={handleClosePress} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose={true}
        animateOnMount={true}>
        <BottomSheetView
          style={styles.contentContainerStyle}
          onLayout={handleContentLayout}>
          <Text>Could this sheet resize to its content height ?</Text>
          <View style={emojiContainerStyle}>
            <Text style={styles.emoji}>😍</Text>
          </View>
          <Button title="Yes" onPress={handleIncreaseContentPress} />
          <Button title="Maybe" onPress={handleDecreaseContentPress} />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default TestingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainerStyle: {
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 24,
  },
  message: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 156,
    textAlign: 'center',
    alignSelf: 'center',
  },
  emojiContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
  },
});
