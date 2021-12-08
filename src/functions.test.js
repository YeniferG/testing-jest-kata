import { createEvent } from './functions'

beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2021-12-07T10:20:30Z').getTime())
})

const NUM_DAY = { 'mon': 1, 'tue': 2, 'wed': 3, 'thu': 4, 'fri': 5, 'sat': 6, 'sun': 7 };

const weekday = "mon";
const week = 1;
const openHour=8;
const closeHour=14

const numDay = NUM_DAY[weekday];
    const currentDay = new Date().getDay();
    const hour = new Date().getHours();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };   

    function addDays(days) {
        return new Date(new Date().setDate(new Date().getDate() + days));
    }

    function getDateCalendar(numDay, currentDay) {
        if (numDay >= currentDay && parseInt(closeHour) >= hour) {//posterior a dia de la semana
            return addDays((numDay - currentDay) + 7 * (week - 1));
        }
        return addDays((numDay - currentDay) + 7 * (week - 1));
    }

test('Validation a event title and content basic', () => {
    //TODO: hacer las verificaciones
    const result = createEvent(weekday, week, openHour, closeHour);

    expect(result.title).toBe("[SOFKA U] Meeting Room");
    expect(result.description).toBe("Mentoring and Practice");
    expect(result.duration).toEqual([6, 'hour']);
});

test('Validation start date', () => {
    //TODO: hacer las verificaciones
    const date = getDateCalendar(numDay, currentDay);
    
    const result = createEvent(weekday,week,openHour,closeHour);

    expect(result.start.toUTCString).toEqual(date.toUTCString);
});

test('Validation date', () => {
   //TODO: hacer las verificaciones
});


test('Validation illegal arguments', () => {
    //TODO: hacer las verificaciones
});


test('create an event list of at least 10 events', () => {
    //TODO: hacer las verificaciones
});