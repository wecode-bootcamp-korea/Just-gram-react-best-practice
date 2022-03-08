# just gram 과제 모범 답안

## 1. 구성
해당 프로젝트는 저스트 코드의 리액트 과제 Just gram 과제의 모범 답안입니다.
Just gram 프로젝트 과제의 한 기능마다 commit이 기록되어 있습니다.

## 2. 이용 방법

### 2-1. 로컬 컴퓨터에서 활용

1. 해당 레포지토리를 clone 받습니다.
2. 깃 로그를 확인합니다.
	```sh
	git log
	```
3. 원하는 과제의 답인이 작성되어 있는 commit number를 확인합니다.
	```js
	commit 8030664160d4f97eee47a6103d2e4f9278485aed (HEAD -> main, origin/main)
	Author: just-code <code@justcoder.co.kr>
	Date:   Thu Mar 3 00:38:06 2022 +0900

			Mission 2: fix typo into checkAvailability

	commit 1d1f63dd1f78304542fb8aa205e8e92add51786d
	Author: just-code <code@justcoder.co.kr>
	Date:   Wed Mar 2 23:48:21 2022 +0900

			Mission1: just gram login page layout
	
	```
4. 원하는 과제의 답안이 진행되어있는 commit으로 이동합니다.
	```sh
	git checkout 8030664
	```
5. 해당 과정을 반복하며 best practice 답안을 확인합니다.
### 2-2. 깃허브 저장소에서 활용

## 3. Commit Message 규칙
```
[Mission number]: 기능 이름
```
- Mission number
	- 기능 별로 미션 1부터 순차적으로 commit log가 남아있습니다.
