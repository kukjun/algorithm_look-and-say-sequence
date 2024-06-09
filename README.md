# Algorithm - Look And Say Sequence

# 문제

---
**look and say sequence** 
읽고 말하는 대로 다음 항을 도출하는 수열이다. 보고 말하기 수열이라고도 하며, 프랑스의 유명 소설가 베르나르 베르베르의 소설<개미>에 등장하여 한국에서는 개미 수열이라고도 불린다.

설명

첫 번째 항이 Ln= 1 이라고 할 때, 이전 항의 이웃한 같은 숫자들을 묶는다. 


# 문제 분석

---
먼저 규칙성을 찾기 위해, 순서대로 써보면서 규칙성을 찾아보면 다음과 같다.

수열을 순차적으로 계산해보면 다음과 같다.
![find_sequence.jpeg](resource%2Ffind_sequence.jpeg)

이러한 값이 나오게 된 이유를 그림으로 표현하면 다음과 같다. 
![find_sequence_detail.jpeg](resource%2Ffind_sequence_detail.jpeg)

11
# 문제 해결 방법

## Brute Force

### N번째 수열까지 그냥 계산

N번째 수열의 값을 찾는다면, 1번째부터 순차적으로 계산한 뒤 계산한 결과를 출력하는 방법이 있다. (Brute Force)

N번째 수열을 찾기 위한 방법은 N번 수열을 계산 해야 하고, 각 수열 계산은 이전 문자열 만큼 반복하므로,
N번째 수열에서 연산 횟수는 이전 수열에서의 문자열 갯수만큼 이라고 할 수 있다.

이 것을 식으로 표기하면 `f(n)을 구하기 위한 수열 반복은 f(n-1)번째 수열의 문자열 갯수 만큼 연산.`라고 할 수 있다. n-1번째 수열의 문자열 길이를 `a(n-1)`이라고 하면,

n번째 수열을 구하기 위한 연산 횟수 는 다음과 같다. `f(n) = a(n-1) + a(n-2) + a(n-3) + ... + a(1)`

그러면 a(n-1)을 구하는 공식을 알아내면 n번째 연산 횟수를 알아낼 수 있다.
![index_size.jpeg](resource%2Findex_size.jpeg)

a 값의 증가는 일관되어 있지 않지만, 이전 값에 비해 증가율이 1보다 크거나 같고 2보다 작거나 같다고 추론해볼 수 있다.

그렇다면, a(n) = a(n-1) * (n번째 수열 증가율) 이라고 할 수 있고, 이 수열 증가율은 1이상 2이하의 값 사이이다. 증가율을 r이라고 표현하면, 다음과 같다.

f(n) = (1 + r + r^2 + r^3 + r^4 ... + r^(n-2))

시간 복잡도는 O(n) = r^n 이라고 할 수 있으므로, n이 증가합에 따라 연산횟수가 기하급수적으로 증가한다.


## 다른 방법 파악을 위한 규칙성 찾기

각 수열은 이전 수열에만 의존하고, 수열을 구하는 방식은 숫자를 읽고 말하기 방식입니다. 즉, n번째 수열은 n-1번째 수열의 `읽고 말하기` 방식을 따르는데, 여기서 규칙성이 보이지 않는다.

각 내용이 중복되는지 파악해보려고 해도, 유의미한 중복이 보이지 않는다.
![sequece_duplication.jpeg](resource%2Fsequece_duplication.jpeg)

해당 중복을 찾기 위해서 이전 문자열을 순회하는 것은 동일하므로 저장하는 의미가 없다.


## 개선하기

- [x] 문자열 연산 최적화

현재 코드에서는 매번 문자열을 새로 생성하고 있다. 문자열 대신 문자의 배열을 사용하고, 나중에 하나의 문자열로 결합해서 문자열 생성 비용을 아낀다.


---
# 실행하기




