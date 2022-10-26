import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import { Label, Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const searchId = nanoid();
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Label htmlFor={searchId}>Find contacts by name</Label>
      <Input
        id={searchId}
        type="text"
        name="filter"
        value={filter}
        placeholder="Search..."
        onChange={changeFilter}
      />
    </>
  );
};
