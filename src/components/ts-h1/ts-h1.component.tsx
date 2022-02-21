import React from 'react';
import { MainProps } from './index.model';

const TsH1 = (props: MainProps) => {
  const { value = 'TSH1' } = props;
  return (
        <div>
            <h1>{value}</h1>
        </div>
  );
};

export default TsH1;
