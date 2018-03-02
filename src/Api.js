import axios from 'axios';

export const addContact = (body) =>
fetch(`https://api.getresponse.com/v3/contacts`, {
  method: 'POST',
  headers: {
    "X-Auth-Token": "api-key 5501a515b2f4be47d95baaa8541a6658",
    "Content-Type": "application/json"
  },
  body: {
    email: JSON.stringify(body),
    campaign: {
          "campaignId": "6nAvF"
      }
  },
}).then(res => res.json())

/*
const header = '-H X-Auth-Token: api-key 5501a515b2f4be47d95baaa8541a6658';
const ROOT_URL = 'http://api.getresponse.com/v3/accounts';

export const addContact = (body) => {
  return axios.get(header, ROOT_URL)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Erro', error.message);
      }
      console.log(error.config);
    })
}
*/