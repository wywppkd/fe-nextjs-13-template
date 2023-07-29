import React, { PropsWithChildren } from 'react';

const MyButton = ({ children }: PropsWithChildren) => {
  return <button>{children}</button>;
};

export default MyButton;
