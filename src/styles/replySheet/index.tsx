import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import styled, { css } from 'styled-components';
import { ReactComponent as CancleIcon } from 'assets/svg/deleteCircle.svg';
import '../sheet.css';

const SheetHeader: React.FC<any> = ({ setOpen }) => {
  return (
    <Header className="wrap-list">
      <div>
        Replying to <strong>gracewhitmore</strong>
      </div>
      <CancleIcon onClick={() => setOpen(false)} />
    </Header>
  );
};

const ReplySheetStyles: React.FC<any> = ({ padding = true, snapTo, open, setOpen, footer, children, ...props }) => {
  return (
    <BottomSheet open={open} onDismiss={() => setOpen(false)} header={<SheetHeader setOpen={setOpen} />} snapPoints={({ minHeight }) => minHeight} footer={footer}>
      <Inner padding={padding}>{children}</Inner>
      <p style={{ display: 'none' }}>empty</p>
    </BottomSheet>
  );
};

export default ReplySheetStyles;

const padding = css`
  padding: 0 20px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 10px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.5);

  strong {
    color: #000;
  }
`;

const Inner = styled.div<{ padding?: boolean }>`
  ${p => p.padding && padding}
`;
