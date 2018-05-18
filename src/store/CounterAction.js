

export default class CounterAction {
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    
    static increment() {
        console.log("dispatch incrmnt")
        return {
            type: CounterAction.INCREMENT
        };
    }
    static decrement() {
        console.log("dispatch decrmnt")
        return {
            type: CounterAction.DECREMENT
        }
    }
}