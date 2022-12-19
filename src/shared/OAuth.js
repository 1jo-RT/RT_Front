const CLIENT_ID = "1bb390131e75b06d3bacd5562df5b3ac";
const REDIRECT_URI = "http://localhost:3000/api/user/kakao/callback";

export const KAKAO_AUTH_URL =`https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`