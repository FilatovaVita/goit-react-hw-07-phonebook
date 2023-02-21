import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { FilterContainer, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterContainer>
      <label>Find contacts by name</label>
      <FilterInput
        type="text"
        name="filter"
        filter={filter}
        onChange={onFilter}
      />
    </FilterContainer>
  );
};
