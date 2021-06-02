const parser = require("@babel/parser");
const template = require("@babel/template").default;
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;
const path = require('path');
const fs = require('fs')

// 引入分离后的方法
const {decryptStr, decryptStrFnName} = require('./descry_v5.js');

const input_file = __dirname + "/v5_src.js"
const jsStr = fs.readFileSync(input_file, {encoding: "utf-8"})

// 使用parse将js转为ast语法树
let ast = parser.parse(jsStr);

let thisUtils = {
    "funToStr": function (path) {
        const curNode = path.node;
        if (curNode.callee.name === decryptStrFnName && curNode.arguments.length === 2) {
            const strC = decryptStr(curNode.arguments[0].value, curNode.arguments[1].value);
            //将匹配到的位置 的 方法调用 使用replaceWith方法 替换为字符串。
            path.replaceWith(t.stringLiteral(strC))
        }
    },
    "replace_unicode": function (path) {
        delete path.node.extra;
    },
    "convParam": function (path) {
        let node = path.node;
        // 判断是否是我们想修改的节点
        if (!t.isCallExpression(node.expression))
            return;
        if (node.expression.arguments == undefined || node.expression.callee.params == undefined || node.expression.arguments.length > node.expression.callee.params.length)
            return;

        // 获取形参和实参
        let argumentList = node.expression.arguments;
        let paramList = node.expression.callee.params;

        // 实参可能会比形参少，所以我们对实参进行遍历， 查看当前作用域内是否有该实参的引用
        for (let i = 0; i < argumentList.length; i++) {
            let argumentName = argumentList[i].name;
            let paramName = paramList[i].name;
            path.traverse({
                MemberExpression: function (_path) {
                    let _node = _path.node;
                    if (!t.isIdentifier(_node.object) || _node.object.name !== paramName)
                        return;
                    // 有对实参的引用则 将形参的名字改为实参的名字
                    _node.object.name = argumentName;
                }
            });

        }
        // 删除实参和形参的列表。
        node.expression.arguments = [];
        node.expression.callee.params = [];
    },
    "convFun": function (path) {
        let node = path.node;
        let paramName = "_0x1ef73f";
        if (node.expression.arguments == undefined || node.expression.callee.params == undefined)
            return;
        path.traverse({
            MemberExpression: function (_path) {
                let _node = _path.node;
                if (!t.isIdentifier(_node.object) || _node.object.name !== paramName)
                    return;
                if (!t.isStringLiteral(_node.property) || !_node.property.hasOwnProperty("value"))
                    return;
                let argumentName = _node.property.value
                let _0x1ef73f = {
                    'stvhT': 'ert',
                    'WOqgb': function _0x332a1c(_0x360f22, _0x49aa4d) {
                        return _0x360f22 !== _0x49aa4d;
                    },
                    'ZdNNS': function _0x247da2(_0x3df0d8, _0x2b45ae) {
                        return _0x3df0d8 === _0x2b45ae;
                    },
                    'dlhZI': "jsjiami.com.v5",
                    'Bwmfy': function _0x75192c(_0x138df4, _0x61d19c) {
                        return _0x138df4 !== _0x61d19c;
                    },
                    'iqVEj': 'vzk',
                    'HjpoY': '删除版本号，js会定期弹窗'
                };
                let strC = _0x1ef73f[argumentName]
                if (typeof strC === "string") {
                    _path.replaceWith(t.StringLiteral(strC))
                }
            }
        });
    },
    "formatMember": function (path) {
        // _0x19882c['removeCookie']['toString']() 应该转换成 _0x19882c.removeCookie.toString() 改变调用方式
        var curNode = path.node;
        if (!t.isStringLziteral(curNode.property)) return;
        if (curNode.computed === undefined || !curNode.computed === true) return;
        curNode.property = t.identifier(curNode.property.value);
        curNode.computed = false;
    },
    "replaceBlockArgFun": function (path) {
        // 替换空参数的自执行方法为顺序语句
        let node = path.node;         // 判断条件是否符合
        if (!t.isCallExpression(node.expression)) return;
        if (node.expression.arguments !== undefined && node.expression.arguments.length > 0)
            return;
        if (!t.isFunctionExpression(node.expression.callee)) return;
        // 替换节点
        path.replaceWith(node.expression.callee.body);
    },
}

let step1 = function (ast) {
    // 使用traverse遍历语法树，因为方法的调用为CallExpression类型，所以我们只对type为CallExpression的节点进行处理。
    traverse(ast, {CallExpression: thisUtils.funToStr})
}

let step2 = function (ast) {
    traverse(ast, {StringLiteral: thisUtils.replace_unicode})
}

let step3 = function (ast) {
    // 去除空函数; ExpressionStatement 为 自执行函数
    traverse(ast, {ExpressionStatement: thisUtils.convParam})
}

let step4 = function (ast) {
    // 参数替换
    traverse(ast, {ExpressionStatement: thisUtils.convFun})
}

let step5 = function (ast) {
    traverse(ast, {MemberExpression: thisUtils.formatMember})
}

let step6 = function (ast) {
    traverse(ast, {ExpressionStatement: thisUtils.replaceBlockArgFun})
}

// 替换方法后的结果
step1(ast)

// unicode 替换， 不过这个好像没有unicode
// step2(ast)

// 空函数替换
step3(ast)

// step4(ast)

step5(ast)

step6(ast)

let {code} = generator(ast, {
    jsescOption: {
        //自动转义中文
        minimal: true
    }
});
// console.log(code);
let output_file = input_file.split(".js")[0] + "_result.js"
fs.writeFile(output_file, code, (err) => {
});
