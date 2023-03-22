<img src="https://i.imgur.com/KPCcbOm.png" alt="Fitness homepage">
<img src="https://i.imgur.com/njtjrUv.png" alt="Fitness login">
<img src="https://i.imgur.com/SaB4QHg.png" alt="Fitness login">

# Fitness Login & Setup
這是一個健身網站，你可以選擇用Google帳號登入，或是註冊一個新帳號，開啟專屬於你的健身課程。

此專案是在[Node.js](https://nodejs.org/en/)的環境下開發，利用[Mongoose](https://www.npmjs.com/package/mongoose)連接[MongoDB Atlas](https://www.mongodb.com/atlas/database)線上資料庫，以便儲存使用者登入資訊，搭配[Passport.js](https://www.passportjs.org/)與Google的server做溝通，讓使用者能夠直接用Google帳戶登入。

## Features - 功能列表
* 使用Google帳號登入

![image](https://github.com/KuoJoy/Fitness-Login-Page/blob/0625ec6e0d406205d2b2b671f10bb023ae6d7c7c/login%20google.gif)

* 自行註冊新帳號、密碼

![image](https://github.com/KuoJoy/Fitness-Login-Page/blob/0625ec6e0d406205d2b2b671f10bb023ae6d7c7c/signup.gif)

* 密碼加密
<img src="https://i.imgur.com/R1zAF3N.gif" alt="signup" width="600">

* 登入即可觀看自己的健身課程

## Environment Setup - 環境建置
* [Node.js](https://nodejs.org/en/)

## Installing - 安裝流程
1. 開啟終端機(terminal)並複製(clone)此專案至本機電腦
```javascript
git clone https://github.com/KuoJoy/Fitness-Login-Page.git
```
2. 在終端機(terminal)中進入此專案資料夾
```javascript
cd Fitness-Login-Page
```
3. 安裝npm套件以及nodemon套件
```javascript
npm install // 安裝npm套件
npm install -g nodemon // 安裝nodemon套件
```
4. 執行app.js啟動伺服器
```javascript
nodemon index.js
```
5. 開啟瀏覽器輸入 [http://localhost:8080](http://localhost:8080) 即可進入Fitness網站

## Using Tools - 使用工具
* 開發環境 - [Visual Studio Code](https://code.visualstudio.com/)
* 開發框架 
  * [Express](http://expressjs.com/)
  * [Mongoose](https://www.npmjs.com/package/mongoose)
  * [Passport.js](https://www.passportjs.org/)
  * [bcrypt](https://www.npmjs.com/package/bcrypt)
  * connect-flash
  * cookie-session
  * dotenv
* 模板引擎 - [EJS](https://ejs.co/)

## Contributor - 專案開發人員
> [Joy Kuo](https://github.com/KuoJoy)
