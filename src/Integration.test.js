import nightmare from 'nightmare'

it('should receive a server response', (done) => {
	nightmare()
	.goto('http://0.0.0.0:8000')
	.wait(5000)
	.click('button.send')
	.wait(5000)
	.evaluate(() => document.querySelector('ul li').innerText)
	.end()
	.then((v) => { expect(v).toBe("Hello from obsidian-server!"); done(); })
	.catch((e) => console.error('Click failed:', e));
});
