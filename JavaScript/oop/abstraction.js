// 추상화로 TV 구현
class TV {
  constructor() {
    this.turn = false;
    this.model = "LG";
    this.size = 40;
    this.channel = 0;
    this.sound = 0;
    console.log("TV가 생성되었습니다.");
  }
  // tv 켜기
  turnOn() {
    if (this.turn === true) {
      console.log("이미 티비가 켜져있습니다.");
    } else {
      this.turn = true;
      console.log("티비가 켜짐");
    }
  }
  // tv 끄기
  turnOff() {
    if (this.turn === false) {
      console.log("이미 티비가 꺼져있습니다.");
    } else {
      this.turn = false;
      console.log("티비가 꺼짐");
    }
  }
  // 소리 키우기
  volumUp() {
    // 티비가 꺼져있으면 작동 안됨
    if (this.turn === false) {
      console.log("티비를 켜주세요.");
    }
    // 최대 음향은 10까지
    else if (this.sound >= 10) {
      this.sound = 10;
      console.log(`최대 음량은 ${this.sound} 입니다.`);
    } else {
      this.sound++;
      console.log(`현재 음량은 ${this.sound} 입니다.`);
    }
  }
  // 소리 끄기
  volumDown() {
    // 티비가 꺼져있으면 작동 안됨
    if (this.turn === false) {
      console.log("티비를 켜주세요.");
    }
    // 최소 음향은 0까지
    else if (this.sound <= 0) {
      this.sound = 0;
      console.log(`최소 음량은 ${this.sound} 입니다.`);
    } else {
      this.sound--;
      console.log(`현재 음량은 ${this.sound} 입니다.`);
    }
  }
}

var myTv = new TV();

$(document).ready(function() {
  // 티비 켜기
  $("#turnOn").click(function() {
    myTv.turnOn();
  });

  // 티비 끄기
  $("#turnOff").click(function() {
    myTv.turnOff();
  });

  // 소리 키우기
  $("#volumUp").click(function() {
    myTv.volumUp();
  });

  // 소리 줄이기
  $("#volumDown").click(function() {
    myTv.volumDown();
  });
});
