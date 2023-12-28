import Table from './Table';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () =>
        <th
          className='cursor-pointer hover:bg-gray-100'
          onClick={() => setSortColumn(column.label)}
        >
        <div className='flex items-center'>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <div>
      <GoChevronUp/>
      <GoChevronDown/>
    </div>;
  } else if (sortOrder === 'asc') {
    return <GoChevronUp/>;
  } else {
    return <GoChevronDown/>;
  }
}

export default SortableTable;