# multiple-sidebar-gas

## Node.js 何それな人

1. src フォルダに移動する
   https://github.com/sinsky/multiple-sidebar-gas/tree/main/src
2. 各ファイルをスプレッドシートに紐づく GoogleAppsScript のところにファイルを作ってコピペ
   - code.js(コード.gs でいい)
   - sidebar-about.html
   - sidebar-contact.html
   - sidebar-home.html
3. スプレッドシートを開いて試してみる

## Node.js 利用者

1. Repo のクローン

```bash
git clone https://github.com/sinsky/multiple-sidebar-gas
cd multiple-sidebar-gas
```

2. `.clasp.json`の書き換え
   > スプレッドシートに紐づいている GoogleAppsScript の ID を使うこと

```json
{ "scriptId": "<自分のスクリプトのIDに書き換える>", "rootDir": "./src" }
```

3. GAS に push

```bash
clasp push
```

4. スプレッドシートを開いて試してみる
