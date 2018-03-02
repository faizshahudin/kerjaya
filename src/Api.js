
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
