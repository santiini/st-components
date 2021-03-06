import React, { FC } from 'react';

interface MinuButtonProps {
  name?: string;
}
const MinuButton: FC<MinuButtonProps> = ({ name = 'test' }) => {
  return (
    <div>
      <h4>Button: {name}</h4>
    </div>
  );
};

export default MinuButton;
