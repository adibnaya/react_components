import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    const sortOrderCycle = ['asc', 'desc', null];
    if (label !== sortBy) {
      setSortOrder(sortOrderCycle[0]);
      setSortBy(label);
    } else {
      setSortOrder((currentSortOrder) => {
        const nextIndex = (sortOrderCycle.indexOf(currentSortOrder) + 1) % sortOrderCycle.length;
        const nextSortOrder = sortOrderCycle[nextIndex];

        // If the next sort order is null, reset the sortBy as well
        if (!nextSortOrder) {
          setSortBy(null);
        }

        return nextSortOrder;
      });
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a,b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
}

export default useSort;