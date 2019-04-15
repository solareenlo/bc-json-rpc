const request = require('request');

const doRequest = options => {
  return new Promise((resolve, reject) => {
    request(options, (error, res, body) => {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}

const dispatch = async (host, rpcport, user, pass, method, ...params) => {
  const URL = `http://${host}:${rpcport}`;
  const requestOptions = {
    url: URL,
    method: 'POST',
    body: JSON.stringify({ method, params }),
    auth: { user, pass }
  }
  try {
    const json = JSON.parse(await doRequest(requestOptions));
    return json;
    // json.data.txs = json.data.txs.map((tx) => {tx.value=Math.floor(100000000*tx.value); return tx});
    // let balance = json.data.txs.reduce((a, b) => a+b.value, 0);
  }
  catch(e) {
    console.log(e);
    if (e.statusCode) {
      return JSON.stringify({ error: JSON.parse(e.error).error })
    } else {
      return JSON.stringify({ error: e.error })
    }
  }
}

const getBlock = async (num) => {
  const hash = await dispatch('localhost', 8332, 'solareenlo', 'solareenlo', 'getblockhash', num);
  const { result } = await dispatch('localhost', 8332, 'solareenlo', 'solareenlo', 'getblock', `${hash.result}`);
  console.log({result});
}

getBlock(10);
