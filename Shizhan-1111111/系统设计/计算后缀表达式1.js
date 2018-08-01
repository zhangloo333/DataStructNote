function countHouzhui(input) {
	let output = [];
	input.forEach(item => {
		if(/\d/g.test(item)) output.push(item);
		else {
			let n2 = output.pop();
			let n1 = output.pop();
			output.push(count(n1, n2, item));
		}
	});
	// 这里偷懒，直接使用eval
	function count(n1, n2, op) {return eval(n1+op+n2);}
	return output[0];
}
countHouzhui(houzhui('1+2*3-(4+5)')); // 输出 -2
