import React from 'react';
import styled from 'styled-components';

const LabelboxStyles: React.FC<any> = ({ gap, label, suffix, prefix, children, ...props }) => {
  return (
    <Labelbox>
      <Label gap={gap} className="wrap-list" {...props}>
        {prefix && prefix}
        <h2 className="labelbox-label">{label}</h2>
        {suffix && suffix}
      </Label>
      {children}
    </Labelbox>
  );
};

export default LabelboxStyles;

const Labelbox = styled.div`
  h2.labelbox-label {
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.01em;
    color: #000000;
  }
`;

const Label = styled.div<{ gap?: number }>`
  margin-bottom: 12px;
  ${p => p.gap && `gap: ${p.gap}px`};
`;
