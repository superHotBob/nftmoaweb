import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import styled, { css } from 'styled-components';
import '../sheet.css';

const SheetHeader: React.FC<any> = ({ icon, title }) => {
  return (
    <Header className="wrap-list">
      {icon}
      <h2>{title}</h2>
    </Header>
  );
};

const FilterSheetStyles: React.FC<any> = ({ icon, padding = true, snapTo, open, setOpen, title, footer, children, ...props }) => {
  return (
    <BottomSheet open={open} onDismiss={() => setOpen(false)} header={<SheetHeader icon={icon} title={title} />} snapPoints={({ minHeight }) => minHeight} footer={footer}>
      <Inner padding={padding}>{children}</Inner>
      <p style={{ display: 'none' }}>empty</p>
    </BottomSheet>
  );
};

export default FilterSheetStyles;

const padding = css`
  padding: 0 20px;
`;
const Header = styled.div`
  align-items: baseline !important;
  h2 {
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    margin-left: 9px;
  }
`;

const Inner = styled.div<{ padding?: boolean }>`
  ${p => p.padding && padding}
`;
