// PartialはTypeScriptの標準ライブラリに定義されている型で、オブジェクトの型を渡されると、
// その各プロパティを全部省略可能にするものです。MyPartialという名前でこれを実装してください。

// type MyPartial<T> = Partial<T>
// Maped Type
// type MyPartial<T> = {
//     [P in keyof T]: T[P] | undefined;
// }

// 上とは意味が変わる
// 正解はこっち
type MyPartial<T> = {
    [P in keyof T]?: T[P];
}

// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */
type T1 = MyPartial<{
    foo: number;
    bar: string;
}>;
/*
 * T2は { hoge?: { piyo: number; } } となる
 */
type T2 = MyPartial<{
    hoge: {
        piyo: number;
    };
}>;


// 以下は勉強会での議論結果
// type MyPartial<T> = {
//     [P in keyof T]: T[P] | undefined;
// }
// このPartialだとfoo,barは必須で、その値としてundefinedがOK

// type MyPartial<T> = {
//     [P in keyof T]?: T[P];
// }
// このPartialだとfoo,barは未定義でもOK
const abc: T3 = {
    foo: 'abc',
    bar: undefined
}


type NewTest = {
    foo: string,
    bar: number
}

type T3 = MyPartial<NewTest>