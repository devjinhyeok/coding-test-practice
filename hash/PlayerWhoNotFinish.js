function solution(participant, completion) {
  var answer = '';
  var map = new Map();
  for(var i=0; i<participant.length; i++) { 
    if(map.has(participant[i])) { 
      map.set(participant[i], map.get(participant[i]) + 1);
      continue;
    } 
    map.set(participant[i], 1);
  }
  for(var i=0; i<completion.length; i++) {
    if(map.has(completion[i])) {
      map.set(completion[i], map.get(completion[i]) - 1);
    } else {
      answer = completion[i];
      continue;
    }
  }
  if(answer === '') {
    map.forEach((value, key) => {
      if(value != 0) {
        answer = key;
      }
    })
  }
  return answer;
}
