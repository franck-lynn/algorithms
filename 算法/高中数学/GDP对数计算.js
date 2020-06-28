/* 
资料显示: 2018 年美帝的GDP为 A= $20.49 万亿, GDP增速 g1 = 2.86%,
中国GDP为 B = ¥90.03 万亿, GDP增速 g2 = 6.6 % , 名义汇率 e = 6.95,
求需要多长时间可以赶上美帝

B / e * (1 + g2) ** x = A * (1 + g1) **x
两边取对数得:
log(B / e * (1 + g2) ** x) = log(A * (1 + g1) ** x)
log(B/e) + x* log(1+g2) = log(A) + x* log(1+g1)
整理得:
x* (log(1+g2) - log(1+g1)) = log(A) - log(B/e)
x = (log(A) - log(B / e)) / (log(1 + g2) - log(1 + g1))
GDP数据来源:
https: //www.kuaiyilicai.com/stats/global/yearly_per_country/g_gdp/chn.html
汇率来源
http: //www.dollarex.com.sg/cn/currencyconvertor.php
 */


const [A, B, g1, g2, e] = [20.49, 90.03, 0.0286, 0.066, 6.95]
let x = (Math.log(A) - Math.log(B / e)) / (Math.log(1 + g2) - Math.log(1 + g1))

console.log(x)