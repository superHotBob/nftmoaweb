import axios from 'axios';
import cookie from 'js-cookie';

const api = axios.create({ baseURL: 'http://nftmoa-external-api-lb-10363844-7a68af148f42.kr.lb.naverncp.com', timeout: 60 * 1000 });

const tokenIn = () => {
  api.defaults.headers.common['Authorization'] = `Bearer ${cookie.get('accessToken') || ''}`;
};

const errorHandler = (error: any) => {
  // 서버에러로 인한 에러
  // if (error.response.data.code === '__under_maintenance__') {
  // }
};

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response?.status >= 500) errorHandler(error);
    else return Promise.reject(error);
  }
);

class APIService {
  private cache: { [key: string]: { timestamp: number; data: any } } = {};

  async emailCheck(email: any) {
    const { data } = await api.get(`/api/signup?email=${email}`).then(res => res.data);
    return data;
  }

  async signUp(json: any) {
    const data = await api.post('/api/signup', json).then(res => res.data);
    return data;
  }

  async signIn(json: any) {
    const { data } = await api.post('/api/signin', json).then(res => res.data);
    return data;
  }

  async refreshToken(json: any) {
    try {
      const { data } = await api.put('/api/signin/refresh', json).then(res => res.data);

      return data;
    } catch {
      cookie.remove('accessToken');
      cookie.remove('refreshToken');
      cookie.remove('expired');
      window.location.href = window.location.origin;
    }
  }

  async signInRefresh(json: any) {
    const { data } = await api.put('/api/signin/refresh', json).then(res => res.data);
    return data;
  }

  async searchMintable(query: any) {
    const { data } = await api.get(`/api/search/mintable.app?query=${query}`).then(res => res.data);
    return data;
  }

  async getCollection({ name, keyword }: any) {
    const { data } = await api.get(`/api/collection?name=${name ? name : ''}&keyword=${keyword ? keyword : ''}`).then(res => res.data);
    return data;
  }

  async getToken({ page = 1, size = 10, address = '' }) {
    const { data } = await api.get(`/api/token?page=${page}&size=${size}&address=${address}`).then(res => res.data);
    return data;
  }

  async getArticleList({ page = 1, size = 10 }) {
    const { data } = await api.get(`/api/article?page=${page}&size=${size}`).then(res => res.data);
    return data;
  }

  async getArticleDetail({ id }: any) {
    const { data } = await api.get(`/api/article/${id}`).then(res => res.data);
    return data;
  }

  async getFaqCtg() {
    const { data } = await api.get('/api/commonCode?commonCodeUid=2').then(res => res.data);
    return data;
  }

  async getFaqList({ uid, page, size = 10 }: any) {
    const { data } = await api.get(`/api/faq?commonCodeUid=${uid}&page=${page}&size=${size}`).then(res => res.data);
    return data;
  }

  async getCommunityCtg() {
    const { data } = await api.get('/api/commonCode?commonCodeUid=4').then(res => res.data);
    return data;
  }

  async getCommunityList({ uid, page, size = 10 }: any) {
    const { data } = await api.get(`/api/community/board?page=${page}&commonCodeUid=${uid}`).then(res => res.data);
    return data;
  }

  async getCommunityView({ uid }: any) {
    const { data } = await api.get(`/api/community/board/${uid}`).then(res => res.data);
    return data;
  }

  async putCommunityCount({ uid }: any) {
    const { data } = await api.put(`/api/community/board/${uid}/viewCount`).then(res => res.data);
    return data;
  }

  async postCommunity(json: any) {
    await tokenIn();
    const { data } = await api.post('/api/community/board', json).then(res => res.data);
    return data;
  }

  // async exchange(tokens?: TokenProps[]) {
  //   const now = Date.now();
  //   if (!this.cache['exchange'] || (this.cache['exchange'] && now - this.cache['exchange'].timestamp > 20000)) {
  //     const { query, mapping } = tokens?.reduce(
  //       (acc: any, token) => {
  //         acc.query.push(token.coingeckoSymbol);
  //         acc.mapping[token.coingeckoSymbol] = token.symbol;
  //         return acc;
  //       },
  //       { query: [], mapping: {} }
  //     );

  //     const result = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${query.join(',')}&vs_currencies=usd`).then<{ [name: string]: { usd: number } }>(res => res.data);

  //     if (!result.pip.usd) result.pip = { usd: 1.0 }; // PIP 임시 처리

  //     const data = Object.entries(result).reduce<{ [name in string]?: { USD: number } }>((acc: any, [key, amounts]) => {
  //       if (mapping[key]) acc[mapping[key]] = { USD: amounts.usd };
  //       return acc;
  //     }, {});

  //     this.cache['exchange'] = { timestamp: now, data };
  //     return data;
  //   } else {
  //     return this.cache['exchange'].data;
  //   }
  // }

  // async searchTag(piptag: string): Promise<SearchProps[]> {
  //   const { data } = await api.get(`/user/searchTag/${piptag}`).then<{ timestamp: number; data: SearchProps[] }>(res => res.data);
  //   return data;
  // }

  // async profileGet(piptag: string): Promise<UserDataProps> {
  //   const { data } = await api.get(`/user/profile/${piptag}`).then<{ timestamp: number; data: UserDataProps }>(res => res.data);
  //   return data;
  // }

  // async tokenList(): Promise<TokenProps[]> {
  //   const { data } = await api.get('/setting/tokenList').then<{ timestamp: number; data: TokenProps[] }>(res => res.data);
  //   return data;
  // }

  // async sendByTag(json: any) {
  //   const { data } = await api.post('/money/sendByTag', json).then(res => res.data);
  //   return data;
  // }
}

export default APIService;
