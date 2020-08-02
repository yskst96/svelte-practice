# Svelte 勉強用

## アプリ

Github の人気リポジトリ検索

### 機能

- フリーワードで検索
- トピック指定して検索
- トピックは [featured](https://github.com/topics)のものから選択できる
- リポジトリがスター順で表示される
- リポジトリ情報にはフル名称,description,スター数,言語,リポジトリの URL,クローン URL が表示される

- キー情報は yskst96 個人用を使うができれば github ユーザーごとに OAuth 認証して発行したやつを
  使いたい。
  **※現状は.env ファイルから読み込まれたトークンがクライアントのソース上にそのまま入るためアプリをどこかにホスティングしてインターネット公開しないよう注意(ソース自体を公開することは問題なし)**

### 使用する API

Github API(REST の方)

- リポジトリ検索
  https://api.github.com/search/repositories?q=vue+in:readme,description+topic:javascript&sort=stars
- トピック検索
  https://api.github.com/search/topics?q=is:featured+java

## 参考にしたサイト

https://svelte.dev/
https://note.com/kawa1228/n/n3a45fab21f99
https://tech.smartcamp.co.jp/entry/svelte-feature-for-vuejs-engineer
https://developer.github.com/v3/search/#search-repositories
https://developer.github.com/v3/search/#search-topics
