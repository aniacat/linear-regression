import test from 'ava';
import linearRegression from './';

test('should pass', t => {
    const data = [
        [43, 99],
        [21, 65],
        [25, 79],
        [42, 75],
        [57, 87],
        [59, 81]
    ];

    const expected = linearRegression(data);

    t.deepEqual(expected, {
        a: 0.38522498321020804,
        b: 65.1415715245131
    });
});