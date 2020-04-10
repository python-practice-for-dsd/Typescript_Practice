/*
3-5. undefinedな引数
以下のコードで定義されている型Func<A, R>は、A型の引数をひとつ受け取ってR型の値を返すような関数の型です。JavaScriptでは与えられなかった引数はundefinedが入ることが知られていますから、f2のようにAがundefined型のときは引数無しで呼べるようにしたいです。一応、v3のように明示的にundefinedを渡して呼び出すのもOKとしたいです。一方、v4のように、引数がundefined以外のときは引数の省略は許しません。

以上の動作をするように、型Func<A, R>を定義しなおしてください。


type Func<A, R> = (arg: A) => R;

// 使用例
const f1: Func<number, number> = num => num + 10;
const v1: number = f1(10);

const f2: Func<undefined, number> = () => 0;
const v2: number = f2();
const v3: number = f2(undefined);

const f3: Func<number | undefined, number> = num => (num || 0) + 10;
const v4: number = f3(123);
const v5: number = f3();

// エラー例
const v6: number = f1();
*/

// conditional type
// Aがundefinedなら(arg?: A) => R、そうでなければ(arg: A) => R
type Func<A, R> = undefined extends A ? (arg?: A) => R : (arg: A) => R;

// 使用例
const f1: Func<number, number> = num => num + 10;
const v1: number = f1(10);

// 下記2つが可能
// 明示的にundefinedを指定する
// 引数無し
const f2: Func<undefined, number> = () => 0;
const v2: number = f2();
const v3: number = f2(undefined);

// 下記3つが可能
// numberを明示的に指定する
// undefinedを明示的に指定する
// 引数無し
const f3: Func<number | undefined, number> = num => (num || 0) + 10;
const v4: number = f3(123);
const v5: number = f3();
const v7: number = f3(undefined); // 追加

// エラー例
// Aがundefined以外のときは引数の省略は許さない
const v6: number = f1();
