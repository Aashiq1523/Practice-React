let events = [];

const emit = (eventName, ...data) => {

    const event = events[eventName];
    if(event) {
        event.forEach(fn => {
            fn.call(null, ...data);
        });
    }
}

const subscribe = (eventName, fn) => {

    if(!evnts[eventName]) {
        events[eventName] = [];
    }
    events[eventName].push(fn);
}

export default {emit, subscribe};