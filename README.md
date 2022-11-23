# JBNU ChatBot

전북대학교 컴퓨터공학부 : 김세현, 유성진, 천세준

## 이 프로그램은 전북대학교 학생들은 위한 챗봇 프로그램으로 학생들의 질문에 대한 여러 정보를 제공합니다.
------
## 기능 소개
1. 인삿말 출력

    '안녕'이라고 입력하면 '안녕하세요!', '좋은 하루입니다!' '반가워요!' 중의 하나의 인사말을 출력합니다.
   
    <img src = "https://user-images.githubusercontent.com/102170468/203549366-eece8303-dbbb-4f8c-9cee-33252fb5fea3.png" width = "50%" height = "50%" >


2. 질문한 학과 사무실 위치 출력

    한글이나 영어로 정확한 학과 이름을 입력하면 학과 사무실 위치를 출력합니다.
    (단, 한글 이름은 '부'로 끝나야합니다.)
    
    <img src = "https://user-images.githubusercontent.com/102170468/203550275-7e6d6f19-3877-438b-b871-6bb712bf7c03.png" width = "50%" height = "50%">

    
 3. 질문한 요일에 대한 학사 일정 출력
 
    '학사일정'을 입력하고 '안내 받을 날짜를 입력해주세요.'라는 메세지가 뜨면 날짜를 입력하고, 입력받은 날짜에 대한 학사일정을 출력합니다.
    (단 날짜는 달(month)/일(day) 형태로 입력해야 합니다.)
    
    <img src = "https://user-images.githubusercontent.com/102170468/203550652-e1cac153-9830-4aab-83a8-8ab093312f70.png" width = "50%" height = "50%">

    

## 개발 환경 설정
```
git clone github_주소
sudo apt-get install nodejs npm
sudo npm install -g  eslint eslint-config-airbnb-base eslint-plugin-import
sudo npm install @slack/rtm-api dotenv
eslint --init
sudo npm install mocha -g
npx husky -init && npm install
```
## 챗봇 실행 방법
```
node Index.js
```

## 주요 파일 설명
- Index.js : 챗봇 프로그램을 실행시키는 메인 파일
- greeting.js : 인삿말을 출력하는 모듈
- searchPlace.js : 학과 사무실 위치를 알려주는 모듈
- schedule.js : 학사일정을 앙려주는 모듈
- dept.txt : 학과 사무시 위치 정보 파일
- haksa.txt : 학사일정 정보 파일
- unit_test.js : 각 기능 유닛테스트 코드

## 기여 방법
1. 이슈 생성 시
    - 제목은 되도록 문제를 직관적으로 이해 할 수 있게 적어주세요.
    - 이미지를 첨부해서 문제 상황을 정확히 알려주세요.
    - Label 과 Milestones를 이슈 생성 시 꼭 지정해주세요.
2. 커밋 시
    - 커밋 메세지는 '#(이슈번호) (커밋 형태) : 한글로 변경된 사항을 간략히' 와 같은 형식으로 적어주세요.
    - 커밋 형태 예시 : feat(기능 구현), fix(문제점 수정), merge(머지), add(파일 추가)
3. Pull Request 시
    - pull request 제목 또한 커밋 메세지와 같은 형식으로 적어주세요.
    - 내용에는 수정한 내용을 자세하게 적어주세요.
    
## License
MIT license
