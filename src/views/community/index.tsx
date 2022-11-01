import { BOARD_LIST, CHANNEL_CTG, CHANNEL_LIST, SEARCH_TAG_LIST } from 'api/mock/community';
import BoardItem from 'components/boardItem';
import Section from 'components/common/section';
import React from 'react';
import styled from 'styled-components';
import { Button, FilterSearch, Input, Label, WrapIcon, Link, Pagination, Filter, Textarea } from 'styles';
import { ReactComponent as ChannelIcon } from 'assets/svg/explore.svg';
import { ReactComponent as SelectPictureIcon } from 'assets/svg/select_picture.svg';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as PlusIcon } from 'assets/svg/plus.svg';
import APIService from 'api/index';
import bg_search from 'assets/bg/search.png';
import { BottomSheet } from 'react-spring-bottom-sheet';
import ChannelCtgItem from 'components/walletItem';
import SubHeader from 'components/Header/SubHeader';
import { Upload } from 'antd';
import { getBase64 } from 'utils';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import DefaultLayout from './layout/Default';

const apiService = new APIService();
const CommunityView: React.FC<any> = () => {
  const navigate = useNavigate();
  const nameRef: any = React.useRef();
  const descRef: any = React.useRef();
  const hashRef: any = React.useRef();
  const [searchResult, setSearchResult] = React.useState([]);
  const [tagList, setTagList] = React.useState(['3,000 ETH', 'Art']);
  const [categories, setCategories] = React.useState({ art: false, music: false, games: false, photography: false, domains: false });
  const [saleType, setSaleType] = React.useState({ timedAuction: false, userOnly: false, fixedPrice: false, openFor: false });
  const [isUploading, setIsUploading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState({ filter: 0, text: '' });
  const [resultData, setResultData]: any = React.useState({ ctg: '', profile: '', name: '', desc: '', hash: '' });
  const [community, setCommunity] = React.useState([]);

  const getCommunity = async () => {
    const communityData = await apiService.getCommunityList({ uid: 17, page: 1 });

    setCommunity(communityData.list);
  };

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setIsUploading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl: React.SetStateAction<null>) => {
        setResultData({ ...resultData, profile: imageUrl });
        setIsUploading(false);
      });
    }
  };

  const uploadButton = isUploading ? <LoadingOutlined /> : <SelectPictureIcon />;

  const handleCreate = () => {
    console.log(resultData, 'data');
    navigate(`/community/${resultData.name}`);
  };

  const handleOpen = () => {
    setOpen(true);
    setResultData({ ctg: '', profile: '', name: '' });
  };

  const handleClose = () => {
    setOpen(false);
    setResultData({ ctg: '', profile: '', name: '' });
  };

  React.useEffect(() => {
    getCommunity();
    if (query.text !== '') {
      console.log(query, 'query');
    }
  }, [query]);

  return (
    <DefaultLayout>
      <Wrap>
        <StyledSearch>
          <h2>Find your community</h2>
          <FilterSearch className="search" placeholder={'MOA_'} query={query} setQuery={setQuery} />
          {SEARCH_TAG_LIST.map((item: any, idx: number) => (
            <a className={'link-tag'} key={idx} href="#">
              #{item.tag}
            </a>
          ))}
        </StyledSearch>

        <Section title={searchResult.length > 0 ? `${searchResult.length} communities for ${query.text}` : 'Hot Communities'} className="wrap-board-list">
          {searchResult.length > 0 && (
            <Filter
              tagList={tagList}
              setTagList={setTagList}
              categories={categories}
              setCategories={setCategories}
              saleType={saleType}
              setSaleType={setSaleType}
              filterList={{ price: true, category: true, sale: true }}
            />
          )}

          {BOARD_LIST.data.map((item, idx) => (
            <BoardItem key={idx} {...item} />
          ))}
        </Section>

        {open && (
          <BottomSheet
            open={open}
            onDismiss={handleClose}
            header={
              <Header>
                <dt>Create Channel</dt>
                <dd>Your channel is where you and your friends hang out. make yours and start talking</dd>
              </Header>
            }
            footer={<Button rect color={'border'} full={true} text={'NEXT'} />}
            snapPoints={({ minHeight }) => minHeight}
          >
            <StyledChannelCtg>
              {CHANNEL_CTG.map((item: any, idx: number) => (
                <ChannelCtgItem key={idx} name={item.name} iconUrl={item.thumbnail} onClick={() => setResultData({ ...resultData, ctg: item.name })} />
              ))}
            </StyledChannelCtg>
          </BottomSheet>
        )}

        {resultData.ctg && (
          <BottomSheet
            open={!!resultData.ctg}
            onDismiss={handleClose}
            header={
              <Header>
                <dt>Customize Your Channel </dt>
                <dd>Give your new channel a personality with a name and an icon, You can always change it later.</dd>
              </Header>
            }
            footer={<Button rect color={'border'} full={true} text={'CREATE'} onClick={handleCreate} />}
            snapPoints={({ minHeight }) => minHeight}
          >
            <StyledForm>
              <Label label={'channel profile icon'}>
                <Upload
                  className="avatar-uploader"
                  name={'avatar'}
                  listType={'picture-card'}
                  showUploadList={false}
                  action={'https://www.mocky.io/v2/5cc8019d300000980a055e76'}
                  onChange={(info: any) => handleChange(info)}
                >
                  {resultData.profile ? <img src={resultData.profile} /> : uploadButton}
                </Upload>
              </Label>
              <Input ref={nameRef} label={'channel name'} placeholder={'NFT World by justin'} onChange={() => setResultData({ ...resultData, name: nameRef?.current.getValue() })} />
              <Link className={'link-notice'} to={'/'}>
                By creating a group, you agree to nftmoa’s Community guidelines.
              </Link>
              <Textarea ref={descRef} label={'description'} placeholder={'justin@justin.com'} bar={true} onChange={() => setResultData({ ...resultData, desc: descRef?.current.getValue() })} />
              <Textarea ref={hashRef} label={'hash tags'} placeholder={'#'} bar={true} onChange={() => setResultData({ ...resultData, hash: hashRef?.current.getValue() })} />
            </StyledForm>
          </BottomSheet>
        )}

        <Pagination total={BOARD_LIST.total} />
      </Wrap>
    </DefaultLayout>
  );
};

export default CommunityView;

const Wrap = styled.div`
  padding-bottom: 30px;

  .search {
    margin: 22px 0 16px 0;
    & > div {
      border-radius: 8px;
    }
  }

  .wrap-board-list {
    padding: 0;
    margin-bottom: 30px;

    & > h2 {
      padding: 0 18px;
      margin-bottom: 0;
    }
  }

  .nftmoa-filter-container {
    margin-top: 18px;

    & > div {
      border-top: 1px solid #eaeaea;
      background-color: #f9f9f9;
    }
  }
`;

const Header = styled.dl`
  text-align: left;
  margin-bottom: 28px;

  dt {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 5px;
    color: #000000;
  }

  dd {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: #6f6f6f;
  }
`;

const FixedHeader = styled.div`
  background: transparent;
  position: fixed;
  top: 5px;
  right: 20px;
  z-index: 99;
`;

const StyledChannel = styled.div`
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;

  ul {
    display: flex;
    flex: 1;
    height: 39px;
    border-right: 1px solid #eaeaea;
    margin-right: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 17px;

    & > li {
      img {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
      }
    }
  }

  svg.active {
    rect {
      fill: #000;
      fill-opacity: 1;
    }
  }
`;

const StyledChannelCtg = styled.div`
  padding: 20px;
`;

const StyledForm = styled.div`
  padding: 0 20px;
  margin-bottom: 36px;

  .link-notice {
    padding: 5px 20px;
  }

  .avatar-uploader {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 20px;

    .ant-upload.ant-upload-select-picture-card {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;

      &:hover {
        border: none;
      }
    }
  }
`;

const StyledSearch = styled.div`
  margin-bottom: 20px;
  position: relative;
  height: 170px;
  padding: 0 20px;
  background: url(${bg_search}) no-repeat center center;
  background-size: cover;

  h2 {
    padding-top: 22px;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #fff;
  }

  .link-tag {
    display: inline-block;
    padding-right: 10px;
    font-weight: 700;
    font-size: 12px;
    line-height: 26px;
    color: #fff;
  }
`;

const ChannelItem = styled.li<{ msgCount?: number }>`
  position: relative;

  &::after {
    content: '${p => p.msgCount}';
    position: absolute;
    right: 0;
    top: 0;
    background: #000;
    border-radius: 50%;
    padding: 4px;
    font-weight: 700;
    font-size: 10px;
    color: #ffffff;

    ${p => !p.msgCount && `display: none;`}
  }
`;

const HexagonLabel = styled.div`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);

  .hexagon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    padding: 4px 10px 5px 5px;
    background-color: #f900d4;
    font-weight: 600;
    font-size: 10px;
    letter-spacing: -0.02em;
    white-space: wrap;
    text-align: left;

    &::after {
      content: '';
      position: absolute;
      border-top: 14px solid transparent;
      border-bottom: 14px solid transparent;
      left: 100%;
      border-left: 8px solid #f900d4;
    }
  }
`;
