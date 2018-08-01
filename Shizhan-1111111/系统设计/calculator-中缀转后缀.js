// 中缀表达式转换成后缀表达式，这里假设数字都只有1位且没有空格，例如：'1+2*3-(4+5)'
function houzhui(str) {
	let input = str.split(''), output = [], temp = []; // output表示输出，temp表示临时存放操作符的堆栈
	let yxj = {'+': 1, '-': 1, '*': 2, '/': 2}; // 优先级
	input.forEach(current => {
		if(/\d/g.test(current)) output.push(current); // 如果是数字，直接输出
		else if(current == '(') temp.push(current); // 如果左括号，放入堆栈
		else if(current == ')') { // 如果是右括号，循环输出，直至匹配到左括号才停止
			while(temp.length > 0) {
				let op = temp.pop();
				if(op == '(') break;
				output.push(op);
			}
		} else { // 否则，如果是加减乘除，需要针对优先级做不同处理
			while(temp.length >= 0) {
				let op = temp[temp.length-1];
				// 如果堆栈为空，或者上一个操作符是(，或者当前操作符优先级比栈顶操作符优先级要高
				if(!temp.length || op == '(' || yxj[current] > yxj[op]) {
					temp.push(current);
					break;
				} else output.push(temp.pop());
			}
		}
	});
	// 输入循环结束后，如果操作符堆栈不为空，还要循环输出
	while(temp.length > 0) output.push(temp.pop());
	return output;
}

str = '1+2*3-(5+6)'
houzhui(str).join('');
