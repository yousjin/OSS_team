# JBNU ChatBot 
![Generic badge](https://img.shields.io/badge/Node.js-18.12.1-green.svg) ![Generic badge](https://img.shields.io/badge/NPM-8.19.2-orange.svg)

- [개요](#개요)
- [기능 소개](#기능-소개)
- [개발 환경 설정](#개발-환경-설정-)
- [챗봇 실행 방법](#챗봇-실행-방법-)
- [주요 파일 설명](#주요-파일-설명)
- [브랜치 설명](#브랜치-설명)
- [기여 방법](#기여-방법)
- [기여자](#기여자)
- [Licence](#licence)

------

## 개요

![image](https://user-images.githubusercontent.com/104759146/205476422-bbfefdbc-8909-4ffb-a6e8-2dfc3313a471.png)

이는 전북대학교 오픈소스 소프트웨어 개발 수업 팀 프로젝트 과제입니다.  
해당 프로그램은 전북대학교 학생들은 위한 챗봇 프로그램으로 아래의 기능을 제공합니다.  


## 기능 소개
1. 인삿말 출력

    '안녕'이라고 입력하면 '안녕하세요!', '좋은 하루입니다!' '반가워요!' 중의 하나의 인사말을 출력합니다.
   
    <img src = "https://user-images.githubusercontent.com/102170468/203549366-eece8303-dbbb-4f8c-9cee-33252fb5fea3.png" width = "50%" height = "50%" >


2. 질문한 학과 사무실 위치 출력

    '학과 안내'를 입력하면 영문 학과 검색이 가능합니다.
    대/소문자와 띄어쓰기를 허용하며 4글자 미만의 오타를 허용합니다.  
    (단, 오타는 대/소문자를 허용하지 않습니다. 띄어쓰기는 허용합니다.)
    
    ![image](https://user-images.githubusercontent.com/104759146/205444904-09017e35-4317-4ab9-9813-218bc6bcd045.png)

    
 3. 질문한 요일에 대한 학사 일정 출력
 
    '학사일정'을 입력하면 '안내 받을 날짜를 입력해주세요.'라는 메세지가 출력됩니다.   
    이 때 날짜를 입력할 시 해당 학사 일정을 출력합니다. (단, 날짜는 달(month)/일(day) 형태로 입력해야 합니다.)
    
    <img src = "https://user-images.githubusercontent.com/102170468/203550652-e1cac153-9830-4aab-83a8-8ab093312f70.png" width = "50%" height = "50%">


 4. 오늘 진수원 중식 메뉴 출력
    '오늘 밥 뭐야'를 입력하면 오늘의 진수원 중식 메뉴와 평점을 출력합니다. (주말은 '오늘은 주말입니다.' 출력)   
    '이번주 뭐 나와'를 검색하면 이번주 진수원 중식 식단 평점이 출력됩니다.
    
    
    

## 개발 환경 설정 ![OS](https://img.shields.io/badge/OS-Linux-red?style=flat&logo=linux)
```
sudo apt-get install nodejs npm
npm init
sudo npm install -g  eslint eslint-config-airbnb-base eslint-plugin-import
sudo npm install @slack/rtm-api dotenv
eslint --init
apt-get install git
git clone <Github URL> //이 저장소를 fork한 후 자신의 저장소 URL을 사용하시면 됩니다.
sudo npm install mocha -g
npx husky -init && npm install

//기능 3 실행시 필요합니다
npm install axios 
npm install cheerio 

//기능 4 실행시 필요합니다
npm install --save js-levenshtein
```

<details><summary><b>npm 오류 발생시</b></summary>   
아래의 코드를 따라하세요.

```
npm cache clean –f 
npm install –g n 
n stable
npm i -g npm
```
</details>


## 챗봇 실행 방법 <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>
```
node Index.js
```
혹은
```
nodejs Index.js
```

## 주요 파일 설명
- Index.js : 챗봇 프로그램을 실행시키는 메인 파일
- greeting.js : 인삿말을 출력하는 모듈
- searchPlace.js : 학과 사무실 위치를 알려주는 모듈
- schedule.js : 학사 일정을 알려주는 모듈
- todayMenu.js : 진수당 중식 메뉴와 별점을 출력하는 모듈
- dept.txt : 학과 사무실 위치 정보 파일
- haksa.txt : 학사일정 정보 파일
- unit_test.js : 각 기능 유닛테스트 코드


## 브랜치 설명
`아래의 브랜치로는 PR을 진행할 수 없습니다.`   
    - main: 기본 브랜치, Develop에서 테스트를 마친 코드가 올라옵니다.  
    - Develop: 각 기능들이 merge됩니다.  

 
`실제 작업 브랜치 (PR가능)`   
    - feature: 기능 외 Readme.md 등의 파일  
    - feature1: 인사 기능   
    - feature2: 전북대 학사일정   
    - feature3: 진수원 중식 메뉴 안내  
    - feature4: 학과 사무실 안내  


## 기여 방법   
먼저 현재 저장소를 fork를 한 뒤 위의 [개발 환경 설정](#개발-환경-설정-)을 마쳐주세요.   
그 다음 브랜치를 확인합니다. OSS_team 의 브랜치는 기능별로 나뉘어져 있으므로 개발은 해당 feature 브랜치에서 진행해주세요.   
만약 새로운 브랜치가 필요하다면  

```
git checkout -b <브랜치명>
```

형식으로 브랜치 생성 후 작업하시길 바랍니다.   
작업을 완료하면

```
git add <파일명.확장자>
git commit -m "commit은 아래의 커밋규칙을 참고하여 작성해주세요."
git push origin <브랜치명>
```

위의 작업을 수행하면 본인의 저장소에서 `Compare & pull request` 버튼을 볼 수 있습니다.
해당 버튼을 눌러 PR을 진행해주세요.

또한 아래의 규칙을 지켜주세요!
1. 이슈 생성 시
    - 제목은 되도록 문제를 직관적으로 이해 할 수 있게 적어주세요.
    - 버그와 관련된 이슈는 해당 문제 이미지를 첨부하여 상황을 정확히 알려주세요.
    - Label 과 Milestones를 이슈 생성 시 꼭 지정해주세요.
    - 커밋과 PR을 하기 전에 먼저 이슈를 생성해주세요.
2. 커밋 시
    - 커밋 메세지는 '#(이슈번호) (커밋 형태) : 한글로 변경된 사항을 간략히' 와 같은 형식으로 적어주세요.
    - 커밋 형태 예시 : feat(기능 구현), fix(코드 수정), merge(머지), add(파일 추가), error(에러 수정)
3. Pull Request 시
    - pull request 제목 또한 커밋 메세지와 같은 형식으로 적어주세요.
    - 내용에는 수정한 내용을 자세하게 적어주세요.


## 기여자
<a href="https://github.com/yousjin/OSS_team/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yousjin/OSS_team" />
</a>

 &nbsp;&nbsp;[천세준](https://github.com/blackligt)&nbsp;&nbsp;&nbsp;&nbsp;[유성진](https://github.com/yousjin)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[김세현](https://github.com/Seheyon)


## Licence
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
