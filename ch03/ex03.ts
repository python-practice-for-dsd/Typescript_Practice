// 以下のコードで定義されるEventDischargerクラスは、emitメソッドを呼び出すことでイベントを発生させる機能を持っています。
// イベントは"start", "stop", "end"の3種類であり、それぞれのイベントを発生させるときはイベントに合ったデータをemitメソッドに渡す必要があります。
// 具体的には、"start"イベントに対しては{ user: string }型のデータを、"stop"イベントに対しては{ user: string; after: number }型のデータを、
// そして"end"イベントに対しては{}型のデータを渡さなくてはなりません。
// 各イベント名に対して必要なデータの型は、EventPayloads型にイベント名: データの型の形でまとめて定義してあります。

// いま、emitメソッドが間違ったイベント名やデータに対しては型エラーを出すようにしたいです。emitメソッドに適切な型を付けてください。
// ただし、EventDischargerの汎用性を上げるために、EventDischargerはイベントを定義する型であるEventPayloadsを型引数Eとして受け取るようになっています。
// emitは、Eに定義されたイベントを適切に受け付ける必要があります。

interface EventPayloads {
    start: {
        user: string;
    };
    stop: {
        user: string;
        after: number;
    };
    end: {};
}

class EventDischarger<E> {
    emit<T extends keyof E>(eventName: T, payload: E[T]) {
        // 省略
    }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();
ed.emit("start", {
    user: "user1"
});
ed.emit("stop", {
    user: "user1",
    after: 3
});
ed.emit("end", {});

// エラー例
// ed.emit("start", {
//     user: "user2",
//     after: 0
// });
// ed.emit("stop", {
//     user: "user2"
// });
// ed.emit("foobar", {
//     foo: 123
// });