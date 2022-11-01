import React from 'react';
import styled from 'styled-components';

const TagStyles = React.forwardRef((props: any, ref: any) => {
  const btn = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    deleteTag: () => {
      console.log('Custom Blur property is called');
    }
  }));
  return (
    <TagItem ref={btn} {...props}>
      {props.children}
    </TagItem>
  );
});

export default TagStyles;
const TagItem = styled.button``;
