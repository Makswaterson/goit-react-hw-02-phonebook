import PropTypes from 'prop-types';
import { StyledItem, StyledBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <StyledItem>
      {name} : {number}
      <StyledBtn onClick={() => onDelete(id)} type="button">
        Delete
      </StyledBtn>
    </StyledItem>
  );
};
