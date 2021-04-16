const compareFnFactory = (sortBy) => {
  switch (sortBy) {
    case 'date':
      return (a, b) => {
        if (a.createdAt < b.createdAt) {
          return -1;
        } else if (a.createdAt > b.createdAt) {
          return +1;
        } else {
          return 0;
        }
      }
    case 'amount':
      return (a, b) => {
        if (a.amount < b.amount) {
          return -1;
        } else if (a.amount > b.amount) {
          return +1;
        } else {
          return 0;
        }
      }
    default:
      return undefined;
  }
}

const selectExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

  const compareFn = compareFnFactory(sortBy);

  return expenses.filter((expense) => {
    console.log(`matching ${text}`);

    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    return compareFn(a, b);
  });
};

export default selectExpenses;
