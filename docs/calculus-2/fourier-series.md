---
sidebar_position: 3
---

# Lý thuyết về chuỗi Fourier

## Khái niệm

### Nội dung
Chuỗi hàm $\dfrac{a_0}{2} + \displaystyle \sum_{n = 1}^\infty [a_n \cos(nx) + b_n \sin(nx)]$

$(a_0, a_n, b_n = \text{const}; n = 1, 2, 3, \dots)$

được gọi là chuỗi lượng giác.

<hr />

Giả sử $f(x)$ là hàm liên tục trong $(-\infty; +\infty)$, tuần hoàn với chu kỳ $2\pi$. Ta xác định các hệ số $a_0, a_n, b_n$ theo công thức:
- $a_0 = \dfrac{1}{\pi} \displaystyle \int_{-\pi}^\pi f(x) \, \text{d}x$
- $a_n = \dfrac{1}{\pi} \displaystyle \int_{-\pi}^\pi f(x) \cos(nx) \, \text{d}x \;\;\; (n = 1, 2, 3, \dots)$
- $b_n = \dfrac{1}{\pi} \displaystyle \int_{-\pi}^\pi f(x) \sin(nx) \, \text{d}x$

Khi đó, chuỗi lượng giác với các hệ số xác định như trên được gọi là chuỗi Fourier của hàm $f(x)$ và được ký hiệu là:

$f(x) \sim \dfrac{a_0}{2} + \displaystyle \sum_{n = 1}^\infty [a_n \cos(nx) + b_n \sin(nx)]$.

### Chú ý
- Vì $f(x)$ là hàm tuần hoàn với chu kỳ $2\pi$ nên ta có thể thay các cận $ \displaystyle \int_{-\pi}^\pi$ thành các tích phân trên đoạn có độ dài $2\pi$ bất kỳ.
- Nếu $f(x)$ là hàm chẵn:
  - $a_0 = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \, \text{d}x$
  - $a_n = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \cos(nx) \, \text{d}x$
  - $b_n = 0$
  - Như vậy: $f(x) \sim \dfrac{a_0}{2} + \displaystyle \sum_{n = 1}^\infty a_n \cos(nx)$.
- Nếu $f(x)$ là hàm lẻ:
  - $a_0 = 0$
  - $a_n = 0$
  - $b_n = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \sin(nx) \, \text{d}x$
  - Như vậy: $f(x) \sim \displaystyle \sum_{n = 1}^\infty b_n \sin(nx)$.

## Sự hội tụ của chuỗi Fourier
### Định nghĩa khả vi từng khúc
$f(x)$ được xác định trên $[-\pi; \pi]$ được gọi là khả vi từng khúc nếu:

$[a; b] = \displaystyle \bigcup_{i = 1}^k \; [a_i; b_i]$

sao cho trên $(a_i; b_i) (i = 1, 2, 3, \dots, k)$ hàm số $f(x)$ khả vi và có thể xác định giá trị của hàm $f(x)$ tại các điểm đầu mút $a_i, b_i$ sao cho hàm số khả vi phải tại $a_i$, khả vi trái tại $b_i$.

### Định lý
Nếu hàm số $f(x)$ tuần hoàn với chu kỳ $2\pi$, khả vi từng khúc trên $[-\pi; \pi]$ thì chuỗi Fourier của nó hội tụ tại mỗi điểm $x = x_0$ và có tổng là:

$S(x_0) = \dfrac{f(x_0 + 0) + f(x_0 - 0)}{2}$

Đặc biệt, tại các điểm liên tục chuỗi Fourier của hàm $f(x)$ hội tụ và chính giá trị của hàm số tại điểm đó.

## Khai triển Fourier trong $[-\pi; \pi]$

Giả sử $f(x)$ xác định và liên tục từng khúc trong $[-\pi; \pi]$. Ta có các hệ số:
- $a_0 =\displaystyle \int_{-\pi}^\pi f(x) \, \text{d}x$
- $a_n =\displaystyle \int_{-\pi}^\pi f(x) \cos(nx) \, \text{d}x \;\;\; (n = 1, 2, 3, \dots)$
- $b_n =\displaystyle \int_{-\pi}^\pi f(x) \sin(nx) \, \text{d}x$

$f(x) \sim \dfrac{a_0}{2} + \displaystyle \sum_{n = 1}^\infty [a_n \cos(nx) + b_n \sin(nx)]$.

Chuỗi trên hội tụ trong $(-\pi; \pi)$ về hàm số $f(x)$ tại những điểm liên tục của nó.

**Đặc biệt:** $S(\pm \pi) = \dfrac{1}{2}[f(\pi - 0) + f(\pi + 0)]$.

## Khai triển chẵn và khai triển lẻ
Giả sử hàm $f(x)$ xác định và khả vi từng khúc trên $[0; \pi]$.

<table style={{textAlign: 'center', display: 'table', width: '100%', maxWidth: '100%'}}>
  <tr>
    <th>Khai triển chẵn</th>
    <th>Khai triển lẻ</th>
  </tr>
  <tr>
    <td>$a_0 = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \, \text{d}x$</td>
    <td rowspan="2">$b_n = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \sin(nx) \, \text{d}x$</td>
  </tr>
  <tr>
    <td>$a_n = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \cos(nx) \, \text{d}x$</td>
  </tr>
  <tr>
    <td>$f(x) \sim \dfrac{a_0}{2} + \displaystyle \sum_{n = 1}^\infty a_n \cos(nx) \\ x \in [0; \pi]$</td>
    <td>$f(x) \sim \displaystyle \sum_{n = 1}^\infty b_n \sin(nx) \\ x \in [0; \pi]$</td>
  </tr>
  <tr>
    <td>Gọi $S_1(x)$ là tổng của chuỗi số trên thì: $\begin{cases} S_1(0) = f(0) \\ S_1(\pi) = f(\pi) \end{cases}$.</td>
    <td>Gọi $S_2(x)$ là tổng của chuỗi số trên thì: $S_2(0) = S_2(\pi) = 0$.</td>
  </tr>
  <tr>
    <td colspan="2">Ngoài ra, tại các điểm $x \in (0; \pi)$ thì: $S_1(x) = S_2(x) = \dfrac{1}{2}[f(x + 0) + f(x - 0)]$.</td>
  </tr>
</table>