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

describe('Comments Counter function Test', () => {
  const commentArray = [
    {
      commentID: '01',
      itemName: 'cute item',
      commentDescription: 'This Item looks so good',
    },
    {
      commentID: '02',
      itemName: 'Unique Item',
      commentDescription: 'Nice Item',
    },
  ];
  test('should return comment array length of 2', () => {
    const commentLength = counter.comments(commentArray);
    expect(commentLength).toBe(2);
  });

  test('should return comment array length of 1 ', () => {
    commentArray.push(
      {
        commentID: '03',
        itemName: 'Amazing Item',
        commentDescription: 'This Item looks amazing',
      },
      {
        commentID: '03',
        itemName: 'this is a nice item',
        commentDescription: 'no comment description',
      },
    );
    const commentLength = counter.comments(commentArray);
    expect(commentLength).toBe(4);
  });
});
