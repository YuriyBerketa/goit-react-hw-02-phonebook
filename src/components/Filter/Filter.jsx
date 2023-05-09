import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <Wrapper>
            <Label htmlFor='filter'>Find contacts by name</Label>
            <Input type='text' value={value} onChange={onChange}></Input>
        </Wrapper>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};