const chkMobile = () => {
  const userAgent = window.navigator.userAgent;
  const mobile = userAgent.indexOf('Android') > -1 || userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1;
  return mobile;
};

export default { chkMobile };
