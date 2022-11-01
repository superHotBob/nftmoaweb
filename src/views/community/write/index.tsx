import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/deleteCircle.svg';
import { Button, FixedButton, Input, Textarea } from 'styles';
import { useNavigate } from 'react-router-dom';

import APIService from 'api/index';

const apiService = new APIService();

import Quill from 'quill';
import 'styles/Quill/light.css';

let quill: Quill | null | false;

const CommunityWriteView: React.FC<any> = ({ mode = 'write', title = '', content = '' }) => {
  const navigate = useNavigate();
  const titleRef: any = React.useRef(null);
  const contentRef: any = React.useRef(null);
  const [inputs, setInputs] = React.useState({ title: '' });

  const theme = 'snow';

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['image', 'link']
    ]
  };

  const placeholder = 'Enter the content.';

  const handleConfirm = async () => {
    const quillEditor = document.getElementById('quill-editor');
    const originContent = quillEditor?.childNodes[0] as HTMLElement;
    const content = originContent.innerHTML;
    const postData = {
      commonCodeUid: 17,
      title: inputs.title,
      content
    };

    console.log(postData, 'postData');

    const confirm = await apiService.postCommunity(postData);

    console.log(confirm, 'confirm');
  };

  React.useEffect(() => {
    const quillEditor = document.getElementById('quill-editor');
    const formats = ['link', 'image', 'video'];
    if (quillEditor && !quill) {
      quill = new Quill('#quill-editor', {
        modules: {
          ...modules
        },
        formats,
        placeholder,
        theme
      });
    }

    return () => {
      quill = null;
    };
  }, []);

  return (
    <Wrap>
      <Header>
        <h2>{mode === 'write' ? 'Write' : 'Edit'}</h2>
        <CancelIcon onClick={() => navigate(-1)} />
      </Header>

      <Content>
        <Title>
          <Textarea
            ref={titleRef}
            placeholder={'Enter the title'}
            label={'title'}
            rows={2}
            h={30}
            bar={false}
            border={false}
            value={inputs.title}
            onChange={() => setInputs({ ...inputs, title: titleRef?.current?.getValue() })}
          />
        </Title>
        <QuillWrap>
          <div id={'quill-editor'} />
        </QuillWrap>
        {/* 
        <Textarea
          ref={contentRef}
          placeholder={'Enter the content.'}
          bar={false}
          border={false}
          value={inputs.content}
          onChange={() => setInputs({ ...inputs, content: contentRef?.current?.getValue() })}
        /> */}
        <Button full text="OK" h={52} rect color="border" onClick={handleConfirm} />
      </Content>
    </Wrap>
  );
};

export default CommunityWriteView;

const Wrap = styled.div`
  background: #f8fafc;
  height: 100vh;

  & > div {
    padding: 0 20px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 20px;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
  }
`;

const Title = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding: 20px 0;
  margin-bottom: 20px;

  & > h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 18px;
  }
`;

const Content = styled.div<{ height?: number }>`
  padding: 20px 0;
  ${p => p.height && 'min-height:' + p.height + 'px'};
`;

const QuillWrap = styled.div`
  min-height: 200px;
  max-height: 390px;
  margin-bottom: 10px;

  #quill-editor {
    min-height: 200px;
    max-height: 340px;
    overflow-y: auto;
  }
`;
