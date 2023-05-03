function solution(number, n, m) {
    if (number % n === 0 && number % m === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  // -------------------------------------------
//  정수가 담긴 리스트 num_list가 주어질 때,
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을
 // return 하도록 solution 함수를 완성해보세요.

 function solution(num_list) {
    var evenCount = 0;
    var oddCount = 0;
    
    for (var i = 0; i < num_list.length; i++) {
      if (num_list[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    
    return [evenCount, oddCount];
  }

  // -----------------------------------------
//  문자들이 담겨있는 배열 arr가 주어집니다.
  // arr의 원소들을 순서대로 이어 붙인 문자열을 
  // return 하는 solution함수를 작성해 주세요.

  function solution(arr) {
    return arr.join('')
  }


  // ------------------------------
  //정수 배열 arr와 자연수 k가 주어집니다.

//만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고,
// k가 짝수라면 arr의 모든 원소에 k를 더합니다.

//이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

function solution(arr, k) {
    for (var i = 0; i < arr.length; i++) {
    if (k % 2 === 1) {
    arr[i] *= k;
    } else {
    arr[i] += k;
    }
    }
    
    return arr;
    }

    // -------------------------
    //정수 n이 주어질 때, 
    //n을 문자열로 변환하여 return하도록 
    //solution 함수를 완성해주세요.


     // 😫
    // 숫자를 문자열로 변환하는 함수는 tostring()이다. json.parse()는 json
    // 형태의 문자열을 자바스크립트 객체로 변환하는 함수이다.
    // 문자열에서 일부 문자를 추출하는 기능을 하는 substr() 또는 substring()
    // 😫

    // json은 데이터를 교환하는데 사용되는 경량의 데이터 형식이다.
    // javascript에서 객체를 만들 때 사용하는 문법과 유사하게 
    // 키-값 쌍의 집합으로 이루어져 있으며 다른 프로그래밍 언어에서도 쉽게 이용가능
    // 예를들어 서버에서 데이터를 json 형태로 제공하고
    // 클라이언트에서는 이를 javascript 객체로 변환하여 사용가능하다.



    function solution(n) {
        return n.toString();
      }
    // -------------------------
   
    // 😫splice() 메서드는 원본 배열에서 요소를 제거하고 해당 요소를 반환하는 메서드
    // 😫😫첫번째 매개변수는 제거를 시작할 인덱스를 나타내며 두번 째 매개변수는 제거할 요소의 개수를 나타낸다
    function solution(num_list) {
        num_list.sort((a,b)=>a-b);
          num_list.splice(0,5);
          return num_list;
          
      }

    // (a,b)=>a,b는 배열의 정렬 순서를 결정하는 함수로 사용
    // num_list.sort((a,b)=>a - b)에서 a와 b는 배열 num_list의 원소를 가리키며
    // 두 원소의 차이 a - b 를 기준으로 정렬된다.
    // 예를들어 [3,1,4,2]가 주어졌을 경우 num_list.sotr((a,b)=> a- b)를 수행하면
    // [1,2,3,4]가 된다.

     // -------------------------
     
     // for하고 if문은 함께 사용하는 경우가 많다.
     // for 문은 반복적인 작업을 하기 위해 사용하며 if 문은 특정 조건을 만족하는 경우에
     // 코드를 실행하기 위해 사용한다.

     // 문제: 
     //정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
      //array에 n이 몇 개 있는 지를 return 하도록
      // solution 함수를 완성해보세요.

      function solution(array, n) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
          if (array[i] === n) {
            count++;
          }
        }
        return count;
      }

      // 해설:
      // 함수 내부에서는 count 변수를 초기화한후에 array 배열을 처음부터
      // 끝까지 순회하며 각 원소가 n과 같은지 비교하고 같으면 count 값을
      // 1씩 증가시킨다.

      // ------------------------------------
      
      // 문제 : 문자열 my_string과 정수 n이 매개변수로 주어질때
      // my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를
      // 작성해 주세요.

      // 제한사항 : my_string은 숫자와 알파벳으로 되어있다
      // 1<=my_string의 길이 <= 1000
      // 1<= n <= mystring 의 길이

      function solution(my_string, n) {
        const strLength = my_string.length;
        if (n >= strLength) {
          return my_string; // 문자열 길이보다 큰 경우 전체 문자열을 반환
        } else {
          return my_string.substring(strLength - n, strLength); // 뒤에서 n번째 문자부터 끝까지 잘라서 반환
        }
      }

      // 문제:개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 
      //병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때,
      // 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 
       //사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

//제한사항
//hp는 자연수입니다.
//0 ≤ hp ≤ 1000

function solution(hp) {
    let antCount = 0;
    antCount += Math.floor(hp / 5); // 장군개미 사용
    hp %= 5;
    antCount += Math.floor(hp / 3); // 병정개미 사용
    hp %= 3;
    antCount += hp; // 일개미 사용
    
    return antCount;
  }