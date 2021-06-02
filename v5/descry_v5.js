var encode_version = 'jsjiami.com.v5', pqhlf = '__0xc0905',
    __0xc0905 = ['54uR5p2A5YyV77+1M8OI5Lyy5ayq5pys5b2i56q977+/6L+26K6C5pSl5o245oi75LmL55uZ5ba+5L6H', '5YqT6Zif54qt5p6x5Y6q77+rwqNW5L+/5a6Q5p+v5b2Y56iC', 'a18bw6sn', '5aSe5pys5oG755i2wqjClOmGgeW0h+WnueS7kHhDwrfvvKvCmXor5qGY566277yn56+e566d5YWa5Lqb6Z+gH8K3G8KawoxBwpVJw7gY55qX5Lmj56Kd77yF6K2J5o2J5YyD5YeM5p+q5YWC5YmC5ayc44Gc6Lyd5Lmp5bWD5YeN5Lup6IKu5YqZ5aynVhvCtOODg8KvWMK656+x5qi654if5YWs5a2U', '5p+D5bSK5Ya255erFzs8ZkkqwrN7UsKkwpvCvsK0LMOIwq7DtOaMqeS/hOaPteWNseOAjw==', '6L2A5piL5Lu/5LmE5Lix57K45YqSwptm5pKl5L+n44OQ', 'fcOswqdPVwU4', 'w5TCpkzDu8K8', 'wrPCvcO3wp5zw6ANw73DsMORecO1wpob', 'w78xMgl4', 'w4FhdcOkGQ==', 'XMO3LcKBw7s=', 'GXV0BcOL'];
(function (_0x37a90c, _0x5c8ca7) {
    var _0x306743 = function (_0x43df20) {
        while (--_0x43df20) {
            _0x37a90c['push'](_0x37a90c['shift']());
        }
    };
    _0x306743(++_0x5c8ca7);
}
(__0xc0905, 0x1a3));
var _0x27f6 = function (_0x12cb81, _0x3add57) {
    _0x12cb81 = _0x12cb81 - 0x0;
    var _0x5d3077 = __0xc0905[_0x12cb81];
    if (_0x27f6['initialized'] === undefined) {
        (function () {
            var _0x20187f = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x36388d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x20187f['atob'] || (_0x20187f['atob'] = function (_0x245963) {
                var _0x108aca = String(_0x245963)['replace'](/=+$/, '');
                for (var _0x2b404c = 0x0, _0x4e3f18, _0x137d2f, _0x5f400a = 0x0, _0x590a50 = ''; _0x137d2f = _0x108aca['charAt'](_0x5f400a++); ~_0x137d2f && (_0x4e3f18 = _0x2b404c % 0x4 ? _0x4e3f18 * 0x40 + _0x137d2f : _0x137d2f, _0x2b404c++ % 0x4) ? _0x590a50 += String['fromCharCode'](0xff & _0x4e3f18 >> (-0x2 * _0x2b404c & 0x6)) : 0x0) {
                    _0x137d2f = _0x36388d['indexOf'](_0x137d2f);
                }
                return _0x590a50;
            });
        }
        ());
        var _0x409885 = function (_0x975dfa, _0x56731e) {
            var _0x4cc410 = [],
                _0x3d0c48 = 0x0,
                _0x465ea9,
                _0x4957f9 = '',
                _0x3cd959 = '';
            _0x975dfa = atob(_0x975dfa);
            for (var _0x2c94b5 = 0x0, _0x96acda = _0x975dfa['length']; _0x2c94b5 < _0x96acda; _0x2c94b5++) {
                _0x3cd959 += '%' + ('00' + _0x975dfa['charCodeAt'](_0x2c94b5)['toString'](0x10))['slice'](-0x2);
            }
            _0x975dfa = decodeURIComponent(_0x3cd959);
            for (var _0x26d668 = 0x0; _0x26d668 < 0x100; _0x26d668++) {
                _0x4cc410[_0x26d668] = _0x26d668;
            }
            for (_0x26d668 = 0x0; _0x26d668 < 0x100; _0x26d668++) {
                _0x3d0c48 = (_0x3d0c48 + _0x4cc410[_0x26d668] + _0x56731e['charCodeAt'](_0x26d668 % _0x56731e['length'])) % 0x100;
                _0x465ea9 = _0x4cc410[_0x26d668];
                _0x4cc410[_0x26d668] = _0x4cc410[_0x3d0c48];
                _0x4cc410[_0x3d0c48] = _0x465ea9;
            }
            _0x26d668 = 0x0;
            _0x3d0c48 = 0x0;
            for (var _0x4f9fee = 0x0; _0x4f9fee < _0x975dfa['length']; _0x4f9fee++) {
                _0x26d668 = (_0x26d668 + 0x1) % 0x100;
                _0x3d0c48 = (_0x3d0c48 + _0x4cc410[_0x26d668]) % 0x100;
                _0x465ea9 = _0x4cc410[_0x26d668];
                _0x4cc410[_0x26d668] = _0x4cc410[_0x3d0c48];
                _0x4cc410[_0x3d0c48] = _0x465ea9;
                _0x4957f9 += String['fromCharCode'](_0x975dfa['charCodeAt'](_0x4f9fee) ^ _0x4cc410[(_0x4cc410[_0x26d668] + _0x4cc410[_0x3d0c48]) % 0x100]);
            }
            return _0x4957f9;
        };
        _0x27f6['rc4'] = _0x409885;
        _0x27f6['data'] = {};
        _0x27f6['initialized'] = !![];
    }
    var _0xa1ba5f = _0x27f6['data'][_0x12cb81];
    if (_0xa1ba5f === undefined) {
        if (_0x27f6['once'] === undefined) {
            _0x27f6['once'] = !![];
        }
        _0x5d3077 = _0x27f6['rc4'](_0x5d3077, _0x3add57);
        _0x27f6['data'][_0x12cb81] = _0x5d3077;
    } else {
        _0x5d3077 = _0xa1ba5f;
    }
    return _0x5d3077;
};

exports.decryptStr = _0x27f6;
exports.decryptStrFnName = "_0x27f6";
