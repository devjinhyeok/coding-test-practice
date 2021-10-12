# Algorithm, Data Structure
## Algorithm
Algorithm = 여러 개의 지시사항
ex: 길찾기, 암호 등
## Data Structure
data를 어디서든 다룬다. frontend든 backend든
data를 어떻게 다루냐에 따라 속도가 달라진다.
data 구조에 맞는 각각의 작업들이 다르다. (검색, 수정, 추가 등)
적재적소에 쓰는 것이 중요하다.
보통 CRUD 4가지 상황으로 나뉜다.

# Array
가장 쉽게 접하는 데이터 구조는 Array
## Time Complexity(시간 복잡도)
데이터 구조의 오퍼레이션이나 알고리즘의 속도를 측정하는 방법
실제 시간이 아닌 단계(steps)의 수로 측정 > 적을 수록 빠르다
## 메모리(RAM) 관점에서 배열 오퍼레이션
배열의 길이만큼 메모리를 먼저 할당 받는다.
### Reading
index로 바로 값에 접근, 즉 배열의 요소의 수의 상관이 없이 바로 접근한다.
### Searching
배열의 값을 찾으려면 하나 하나 다 접근해서 비교해야함
= Linear Searching
### Insert (Add)
맨 뒤에 데이터를 추가할 경우 바로 추가할 경우 index를 당길 필요가 없음
중간에 추가하거나, 맨 앞에 추가할 경우 index를 밀어야 하므로 오래 걸림
배열 할당 길이를 벗어날 경우 더 큰 메모리를 할당해서 배열을 복사함.
### Delete
insert와 마찬가지로 맨 뒤를 지울 경우 가장 빠르고,
요소들의 이동이 있는 경우 느리다.
### 결론
배열은 Reading이 빠르다.
Insert나 Delete의 작업은 맨 뒤에서 하는 것을 권장한다.

# 검색 알고리즘(Search Algorithm)
상황에 맞는 적절한 데이터 구조와 알고리즘을 사용하는 것이 중요하다.
## Linear Search
하나 하나 비교하는 하여 목표값을 찾음.
최악의 경우 배열의 모든 요소를 살펴볼 수 있다.
input의 수에 따라 시간이 증가하는 Linear Time Complexity 를 가진다.
## Binary Search
이미 정렬된 배열(Sorted Array)에서만 사용할 수 있다는 조건이 있다.
여기서 binary은 반으로 쪼갠다는 뜻이다.
거대한 배열(많은 요소)에 대한 검색에 유리하다.

# Big O
시간복잡도의 표현 방법
이를 이용해 알고리즘을 쉽게 분석 비교 할 수 있다.
## Constant Time 상수 시간
input의 수의 관계 없는 step을 가질 때
Big O는 상수의 수는 상관이 없다. 예를 들어 항상 200개의 step이 필요하다면 O(200)이 아닌 O(1)
러프하게 해석할 필요가 있다.
## Linear Time 선형 시간
Linear Search => O(n)
## Quadratic Time 이차 시간
nested loop의 경우 발생
O(n^2)
## Logarithmic Time 로그 시간
binary search algorithm
O(log n)
## Comparing Big O
![](https://i.imgur.com/b1q2NZr.png)

# Sorting Algorithm
Sorting = 정렬
## Bubble Sort 버블 정렬
인접한 두 요소를 비교하고 사이클 반복
사실 느려서 자주 안쓰이지만 이해하기 좋다.
![bubblesort](https://res.cloudinary.com/practicaldev/image/fetch/s--AXL0Lmqr--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://miro.medium.com/max/388/1%2A7QsZkfrRGhAu5yxxeDdzsA.png)
## Selection Sort 선택 정렬
요소들을 순회하고 최소값을 찾아(Selection) 앞으로 당긴다.
사이클 당 1번의 swap을 진행
![selectionsort](https://gmlwjd9405.github.io/images/algorithm-selection-sort/selection-sort.png)
## Insertion Sort 삽입 정렬
요소들 앞에서부터 차례대로 정렬된 부분과 비교하여 자기 자리를 찾아 삽입하는 정렬
![insertionsort](https://blog.kakaocdn.net/dn/buodfM/btqGY7Q9INs/XCjG7kqRKLyKeVmSZBYaQ0/img.png)
## Case에 따른 시간 복잡도 차이
![sortcase](https://mblogthumb-phinf.pstatic.net/MjAyMDA3MThfMjQy/MDAxNTk1MDczMjU0MTYx.pcjqvEiYhQO-89UTke6AxOVGJdBShe_YVefRv23NN-Ag.aJUGHKJRHsMPQfCS-qsC5l6CotPtTIvfhoPZ0M3S8Zsg.PNG.yoochansong/image.png?type=w800)

# Hash Table
해시테이블은 Key Value System을 사용한다. (like object in js, dictionary is python, map in java, go)
## Array와 Hash table의 비교 예시
```js
menu = [ // array
  { name: "coffee", price: 10 },
  { name: "burger", price: 15 },
  { name: "tea", price: 5 },
];
```
검색 시 선형탐색을 하므로 O(n) > 느림
```js
menu = { // hash table
  coffee: 10,
  burger: 15,
  tea, 5
}
```
검색 시 메뉴명으로 바로 접근하므로 O(1) > 빠름
수정, 삭제도 마찬가지
## Hash table의 원리
내부적으로는 Array로 이뤄져있다. 그런데 이게 왜 Array보다 빠른 것인가?
### Hash Function
해시 함수는 키를 숫자, 즉 인덱스로 바꿔버린다.

# Queue & Stack
큐와 스택은 ADT(Abstract Data Type)인데, 구체적으로 코드로 작성 된 것이 아닌, 구조의 행동 양식만 정의한 데이터 구조를 말한다.
## Stack
이름 그대로 쌓인 형태이다. 가장 위의 요소만 읽기, 추가, 삭제가 가능하다.
LiFo, Last in First out
### 사용 예시 
브라우저의 히스토리, 프로그램의 Undo 기능
## Queue
대기열을 생각하면 된다. 맨 앞 요소만 읽기, 삭제가 가능하고, 추가는 맨 뒤에서 일어난다.
FiFo, First in First out
### 사용 예시
푸쉬 알림, OS의 프로세스 스케줄링, 전화상담 대기열
