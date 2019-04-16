# bc-json-rpc
ビットコインのフルノードへJSON-PRCで情報を取得する.  
ローカルからアクセスします.

## Requirement
- ポート8332でbitcoindが動いていること.
- .bitcoinの中のbitcoin.confの設定が`rpcuser: solareenlo`, `rpcpassword: solareenlo`になっていること.
- ローカルホストから接続すること.

## Usage
```bash
git clone git@github.com:solareenlo/bc-json-rpc.git
cd bc-json-rpc
npm install or yarn
node index.js
```

## References
- [ブロックチェーン入門 ─ JavaScriptで学ぶブロックチェーンとBitcoinウォレットの仕組みと実装](https://employment.en-japan.com/engineerhub/entry/2018/11/30/110000)
- [Bitcoin JSON-RPCを叩く](https://qiita.com/erukiti/items/4c97da8f4b979dc6f31a)
