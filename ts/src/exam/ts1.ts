// type : 원하는 타입을 하나 만든 후 이름을 붙일 때 사용()

// 주소 변수 선언 : 문자,숫자 허용
// let userAddr:string|number
type Addr = string | number;
let userAddr: Addr;

// | (union)
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "loading";

type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

type PointTuple = { number; number };
let tuple2: PointTuple = [10, 20];
// tuple2 = [10, "20"];

type Name = {
  firstName: string;
  lastName: string;
};

// Employee => firstName,lastName,employeeId

// & : 이미 선언된 타입 사용시
type Employee = Name & {
  emplyeeId: number;
};

let employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  emplyeeId: 1234,
};

// type 선언시 모든 키(어떤 key가 들어올지 모르는 객체)에 대한 value string 일 때
// index signature
type Member = {
  [key: string]: string;
};

let Member: Member = {
  id: "user01",
  name: "alice",
};

let Member2: Member = {
  id: "user01",
  name: "alice",
  addr: "seoul",
};

// 선언된 타입에서 특정 키만 제거하고 사용 : Omit
type Menu = {
  name: string;
  category: string;
  price: string;
};

// BestMenu => name,category 만 필요
type BestMenu = Omit<Menu, "price">;
let menu: Menu = {
  name: "피자",
  category: "",
  price: "35000",
};
let best: BestMenu = {
  name: "피자",
  category: "",
};

// 선언된 타입에서 특정 키만 가져오기 : Pick
type MenuOnlyCategory = Pick<Menu, "category">;

// interface : 객체 타입 지정 시 주로 사용
// let user1 = { name: "Alice", age: 25 };
let user1: object;
user1 = { name: "Alice", age: 25 };
console.log(user1);
// console.log(user1.name);

interface User {
  name: string;
  age: number;
}
let user: User = { name: "David", age: 30 };
console.log(user.name);

// gender => 선택적 속성
// ? : 들어올수도 있고 아닐수도 있음()
interface User2 {
  name: string;
  age: number;
  gender?: string;
}
let User2: User2 = { name: "David", age: 30 };
let User3: User2 = { name: "David", age: 30, gender: "남" };
User3.name = "Teddy";

interface Car {
  readonly model: string;
  year: Number;
}
let car1: car = { model: "Toypta", year: 2026 };
// car1.model = "현대";

interface Member2 {
  [key: string]: string;
}

interface Student {
  name: string;
  id: number;
  [key: number]: string;
}
let Student: Student = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
  3: "C",
};

//  type + interface
type Score = "A+" | "A" | "B" | "C" | "D" | "F";
interface Student2 {
  name: string;
  id: number;
  [key: number]: Score;
}

// 함수 타입 정의
type Func1 = {
  name: string;
  (a: number, b: number): number;
};

interface Add {
  (a: number, b: number): number;
}

const add: Add = function (a, b) {
  return a + b;
};
console.log(add(5, 7));

// 인라인 지정
function sub(a: number, b: number): number {
  return a - b;
}

// 인터페이스 확장(type & )
interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

// Car2 속성 그대로 구현
class Truck implements Car2 {
  color: string;
  wheels: number;
  constructor(color: string, wheels: number) {
    this.color = color;
    this.wheels = wheels;
  }
  start(): void {
    console.log("Truck started");
  }
  // 본인만의 메서드 추가 가능
  drive(): void {
    console.log("Truck is driving");
  }
}

const myTruck = new Truck("red", 6);
myTruck.start();

interface Person {
  name: string;
  age: number;
}
interface Employee2 extends Person {
  employeeId: number;
  department: string;
}
let employee2: Employee2 = {
  name: "",
  age: 30,
  employeeId: 1001,
  department: "HR",
};

// type 도 extends 가능
interface BestMenu2 extends Menu {
  rank: number;
}

const best2: BestMenu2 = {
  name: "아메리카노",
  category: "coffee",
  price: "4500",
  rank: 3,
};

interface Menu2 {
  name: string;
  category: string;
  price: string;
}

// type에서 interface 사용
type BestMenu3 = Menu2 & { rank: number };

// as 타입 : type assertion
let someValue: unknown = "This is a string";
let someValueLength = (someValue as string).length;
