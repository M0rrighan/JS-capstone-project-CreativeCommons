import counter from './counter';

describe('#loadedItems is returning the correct value', () => {
  test('if it returns the correct number of items in array', () => {
    // Arrange
    const arrayofItems1 = [
      {
        id: '01',
      },
    ];

    const arrayofItems2 = [
      { id: '01' }, { id: '02' }, { id: '03' },
    ];

    // Act
    const res1 = counter.loadedItems(arrayofItems1);
    const res2 = counter.loadedItems(arrayofItems2);

    // Assert
    expect(res1).toBe(1);
    expect(res2).toBe(3);
  });
});
