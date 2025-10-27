---
sidebar_position: 1
---

# Một số thứ liên quan đến bài thi giữa kỳ

## Quy ước/Ký hiệu cho bài viết này
- Tổng (nếu chuỗi hội tụ đến $S$): $S = \displaystyle \sum_{n = 1}^\infty a_n$.
- Tổng riêng: $S_n = \displaystyle \sum_{k = 1}^n a_k$.
- Phần dư: $R_n = S - S_n = \displaystyle \sum_{k = n + 1}^\infty a_k = a_{n + 1} + a_{n + 2} + \cdots$

## Định lý: Ước tính phần dư cho tiêu chuẩn tích phân
**Phát biểu:** $f(x) = a_k$, trong đó $f$ là một hàm số liên tục, dương và nghịch biến $\forall \; x \ge n$ và chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ hội tụ đến giá trị $S$.

**Kết luận:** $\boxed{\displaystyle \int_{n + 1}^{+\infty} f(x) \; \text{d}x \le R_n \le \displaystyle \int_{n}^{+\infty} f(x) \; \text{d}x}$

## Định lý: Ước lượng tổng của chuỗi đan dấu
**Phát biểu:** Cho chuỗi đan dấu hội tụ có dạng: $S = \displaystyle \sum_{n = 1}^\infty (-1)^{n} \cdot a_n$. Tức chuỗi đan dấu này thỏa mãn hai điều kiện:
$\begin{cases}
a_{n + 1} \le a_n \; \forall \; n \le 1 \\
\displaystyle \lim_{n \to \infty} a_n = 0
\end{cases}$

**Kết luận:** Khi đó, phần dư (sai số) khi xấp xỉ $S$ bằng tổng riêng $S_n$ thứ $n^{\text{th}}$ được ước lượng bởi: $\boxed{\left|S - S_n \right| \le a_{n + 1}}$.

## Điều kiện cần của chuỗi hội tụ
Nếu chuỗi số $\displaystyle \sum_{n = 1}^\infty a_n$ hội tụ thì $\displaystyle \lim_{n \to \infty} a_n = 0$.

## Tiêu chuẩn hội tụ Cauchy của chuỗi số
Chuỗi số $\displaystyle \sum_{n = 1}^\infty a_n$ hội tụ khi và chỉ khi:

  $$\forall \; \varepsilon > 0, \exists \; N = N(\varepsilon), \forall \; n > N, \forall \; p \in \mathbb{Z}^+:$$

  $\boxed{| a_{n + 1} + a_{n + 2} + \cdots + a_{n + p} < \varepsilon}$.

## Dấu hiệu so sánh cho sự hội tụ của chuỗi dương
Cho hai chuỗi dương $\displaystyle \sum_{n = 1}^\infty a_n$ và $\displaystyle \sum_{n = 1}^\infty b_n$

### Dấu hiệu so sánh 1
Giả sử rằng tồn tại một số $N$ sao cho: $0 \le a_n \le b_n \; \forall \; n \ge N$.

Khi đó:
- Nếu $\displaystyle \sum_{n = 1}^\infty b_n$ hội tụ thì $\displaystyle \sum_{n = 1}^\infty a_n$ cũng hội tụ.
- Nếu $\displaystyle \sum_{n = 1}^\infty a_n$ phân kỳ thì $\displaystyle \sum_{n = 1}^\infty b_n$ cũng phân kỳ.

### Dấu hiệu so sánh 2
Giả sử tồn tại giới hạn: $\displaystyle \lim_{n \to \infty} \dfrac{a_n}{b_n} = k, 0 < k < +\infty$.

Khi đó hai chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ và $\displaystyle \sum_{n = 1}^\infty b_n$ cùng hội tụ hoặc cùng phân kỳ.

Chú ý:
- Nếu $a_n$ và $b_n$ là hai vô cùng bé tương đương khi $n \to \infty$ thì chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ và $\displaystyle \sum_{n = 1}^\infty b_n$ cùng hội tụ hoặc cùng phân kỳ.
- Nếu $\displaystyle \lim_{n \to \infty} \dfrac{a_n}{b_n} = 0$ và chuỗi $\displaystyle \sum_{n = 1}^\infty b_n$ hội tụ thì chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ cũng hội tụ.
- Nếu $\displaystyle \lim_{n \to \infty} \dfrac{a_n}{b_n} = +\infty$ và chuỗi $\displaystyle \sum_{n = 1}^\infty b_n$ phân kỳ thì chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ cũng phân kỳ.

## Dấu hiệu căn Cauchy
Cho chuỗi dương $\displaystyle \sum_{n = 1}^\infty a_n$.

Giả sử $\displaystyle \lim_{n \to \infty} \sqrt[n]{a_n} = C$.

Khi đó:
  - $C < 1$: Chuỗi đó hội tụ.
  - $C > 1$: Chuỗi đó phân kỳ.
  - $C = 1$: Chưa kết luận được.

## Dấu hiệu D'Alembert
Cho chuỗi dương $\displaystyle \sum_{n = 1}^\infty a_n$.

Giả sử $\displaystyle \lim_{n \to \infty} \dfrac{a_{n + 1}}{a_n} = D$.

Khi đó:
  - $D < 1$: Chuỗi đó hội tụ.
  - $D > 1$: Chuỗi đó phân kỳ.
  - $D = 1$: Chưa kết luận được.

## Dấu hiệu Raabe
Cho chuỗi dương $\displaystyle \sum_{n = 1}^\infty a_n$.

Giả sử tồn tại giới hạn: $\displaystyle \lim_{n \to \infty} n \left(1 - \dfrac{a_{n + 1}}{a_n} \right) = R$ hay $\displaystyle \lim_{n \to \infty} n \left(\dfrac{a_n}{a_{n + 1}} - 1 \right) = R$.

Khi đó:
  - $R > 1$: Chuỗi đó hội tụ.
  - $R < 1$: Chuỗi đó phân kỳ.

## Dấu hiệu tích phân Cauchy
Giả sử ta có một chuỗi số dương dạng $\displaystyle \sum_{n = 1}^\infty a_n = \displaystyle \sum_{n = 1}^\infty f(n)$.

Trong đó $f(n)$ là giá trị tại $x = n$ của một hàm $f(x)$ xác định với $x \ge 1$, liên tục và đơn điệu giảm.

Đặt $L = \displaystyle \lim_{x \to +\infty} \int_1^x f(x) \, \text{d}x$. Nếu:
- $L < +\infty$ thì chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ hội tụ.
- $L = +\infty$ thì chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ phân kỳ.

## Hội tụ tuyệt đối - Bán hội tụ
Chuỗi số $\displaystyle \sum_{n = 1}^\infty a_n$ được gọi là hội tụ tuyệt đối nếu chuỗi $\displaystyle \sum_{n = 1}^\infty |a_n|$ hội tụ.
- Khi đó chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ cũng hội tụ.

Nếu chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ hội tụ nhưng chuỗi $\displaystyle \sum_{n = 1}^\infty |a_n|$ phân kỳ thì chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ được gọi là bán hội tụ.

## Dấu hiệu Leibniz
Chuỗi đan dấu $\displaystyle \sum_{n = 1}^\infty (-1)^{n - 1} a_n$ hội tụ nếu:
$\begin{cases}
a_{n + 1} \le a_n \; \forall \; n \le 1 \\
\displaystyle \lim_{n \to \infty} a_n = 0
\end{cases}$

Trong trường hợp này, $|r_n| \le a_{n + 1}$, trong đó $r_n = \displaystyle \sum_{k = n + 1}^\infty (-1)^{k - 1} a_k$, là phần dư thứ $n^{\text{th}}$ của chuỗi.

## Dấu hiệu Abel
Chuỗi $\displaystyle \sum_{n = 1}^\infty a_n \cdot b_n$ hội tụ nếu:
1. Chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ hội tụ.
2. Dãy số $\{b_n\}_{n = 1}^\infty$ tạo thành một dãy đơn điệu và bị chặn.

## Dấu hiệu Dirichlet
Chuỗi $\displaystyle \sum_{n = 1}^\infty a_n \cdot b_n$ hội tụ nếu:
1. Dãy tổng riêng $A_n = \displaystyle \sum_{k = 1}^n a_k$ của chuỗi $\displaystyle \sum_{n = 1}^\infty a_n$ bị chặn.
2. Dãy số $\{b_n\}_{n = 1}^\infty$ đơn điệu dần về $0$ khi $n \to \infty$ $\left( \displaystyle \lim_{n \to \infty} b_n = 0 \right)$.

## Tiêu chuẩn Cauchy cho sự hội tụ đều
Chuỗi hàm $\displaystyle \sum_{k = 1}^\infty a_k(x)$ hội tụ đều trên tập $\mathbb{X}_0$ khi và chỉ khi:

$\forall \; \varepsilon > 0, \exists \; N = N(\varepsilon), \forall \; n > N, \forall \; p \in \mathbb{Z}^+$, ta có:

$|u_{n + 1}(x) + u_{n + 2}(x) + \cdots + u_{n + p}(x)| < \varepsilon \; \forall \; x \in \mathbb{X}_0$.

<hr />

Dãy hàm $\{ f_n(x) \}_{n = 1}^\infty$ hội tụ đều trên tập $\mathbb{X}_0$ khi và chỉ khi:

$\forall \; \varepsilon > 0, \exists \; N = N(\varepsilon), \forall \; n > N, \forall \; p \in \mathbb{Z}^+$, ta có:

$|f_{n + p}(x) - f_n(x)| < \varepsilon \; \forall \; x \in \mathbb{X}_0$.

## Dấu hiệu Weierstrass
Chuỗi hàm $\displaystyle \sum_{k = 1}^\infty a_k(x)$ hội tụ đều trên tập $\mathbb{X}_0$ nếu tồn tại một chuỗi dương hội tụ $\displaystyle \sum_{k = 1}^\infty c_k$ sao cho:

$|u_k(x)| \le c_k \; \forall \; x \in \mathbb{X}_0, k = 1, 2, 3, \dots$.

## Dấu hiệu Abel
Chuỗi hàm $\displaystyle \sum_{n = 1}^\infty a_n(x) \cdot b_n(x)$ hội tụ đều trên tập $\mathbb{X}_0$ nếu:
1) Chuỗi $\displaystyle \sum_{n = 1}^\infty a_n(x)$ hội tụ đều trên tập $\mathbb{X}_0$.
2) Dãy $\{ b_n(x) \}_{n = 1}^\infty$ đơn điệu với mỗi $x \in \mathbb{X}_0$ và bị chặn đều trên $\mathbb{X}_0$, tức là tồn tại hằng số $M > 0$ sao cho: $|b_n(x)| \le M \; \forall \; x \in \mathbb{X}_0, n = 1, 2, 3, \dots$.

## Dấu hiệu Dirichlet
Chuỗi hàm $\displaystyle \sum_{n = 1}^\infty a_n(x) \cdot b_n(x)$ hội tụ đều trên tập $\mathbb{X}_0$ nếu:
1) Dãy tổng riêng $\{ s_n(x) \}_{n = 1}^\infty$ của chuỗi $\displaystyle \sum_{n = 1}^\infty a_n(x)$ bị chặn đều trên $\mathbb{X}_0$, tức là tồn tại hằng số $M > 0$ sao cho:

$|s_n(x)| = |a_1(x) + a_2(x) + \cdots + a_n(x)| \le M, \forall \; x \in \mathbb{X}_0, n = 1, 2, 3, \dots$.

2) Dãy $\{ b_n(x) \}_{n = 1}^\infty$ đơn điệu với mỗi $x \in \mathbb{X}_0$ và hội tụ đều về $0$ khi $n \to \infty$ trên tập $\mathbb{X}_0$.

## Dấu hiệu "limsup"
Dãy hàm $\{ f_n(x) \}_{n = 1}^\infty$ hội tụ đến hàm $f(x)$ khi $n \to \infty$ trên $\mathbb{X}_0$ là hội tụ đều trên tập đó khi và chỉ khi:

$\boxed{\displaystyle \lim_{n \to \infty} \sup_{\mathbb{X}_0} |f_n(x) - f(x)| = 0}$.

## Công thức Cauchy - Hadamard
Cho chuỗi lũy thừa có dạng: $\displaystyle \sum_{n = 1}^\infty a_n (x - a)^n$.

Bán kính hội tụ có thể được xác định theo công thức:

$\dfrac{1}{R} = \displaystyle \overline{\lim} \sqrt[n]{|a_n|}$

## Một số công thức khác để tính bán kính hội tụ
Cho chuỗi lũy thừa có dạng: $\displaystyle \sum_{n = 1}^\infty a_n (x - a)^n$.

Bán kính hội tụ có thể được xác định theo công thức:

$R = \displaystyle \lim_{n \to \infty} \left| \dfrac{a_n}{a_{n + 1}} \right|$ hay $R = \displaystyle \lim_{n \to \infty} \dfrac{1}{\sqrt[n]{|a_n|}}$

nếu các giới hạn ở vế phải tồn tại.

<hr />

### Chú ý
Nếu chuỗi lũy thừa không có dạng $\displaystyle \sum_{n = 1}^\infty a_n(x - a)^n$ (có mũ $\ne n$) thì ta xét:

$\displaystyle \lim_{n \to \infty} \left| \dfrac{u_{n + 1}(x)}{u_n(x)} \right| = D$

Khi đó:
- $D < 1$: Chuỗi lũy thừa hội tụ.
- $D > 1$: Chuỗi lũy thừa phân kỳ.

(Dựa vào điều kiện của $D < 1$ để xác định bán kính hội tụ của chuỗi lũy thừa)

## Một số khai triển Taylor cơ bản
| Biểu thức            | Điều kiện của $x$    | Khai triển rút gọn                                                            | Khai triển đầy đủ                                                                               |
|:--------------------:|:--------------------:|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| $e^x$                | $(-\infty; +\infty)$ | $\displaystyle \sum_{n = 0}^\infty \dfrac{x^n}{n!}$                           | $1 + x + \dfrac{x^2}{2!} + \cdots + \dfrac{x^n}{n!} + \cdots$                                   |
| $\sin x$             | $(-\infty; +\infty)$ | $\displaystyle \sum_{n = 0}^\infty \dfrac{(-1)^n}{(2n + 1)!}x^{2n + 1}$       | $x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \cdots + \dfrac{(-1)^n}{(2n + 1)!}x^{2n + 1} + \cdots$ |
| $\cos x$             | $(-\infty; +\infty)$ | $\displaystyle \sum_{n = 0}^\infty \dfrac{(-1)^n}{(2n)!}x^{2n}$               | $1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \cdots + \dfrac{(-1)^n}{(2n)!}x^{2n} + \cdots$         |
| $\ln(1 + x)$         | $(-1; 1]$            | $\displaystyle \sum_{n = 1}^\infty \dfrac{(-1)^{n - 1}}{n}x^n$                | $x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \cdots + \dfrac{(-1)^{n - 1}}{n}x^n + \cdots$            |
| $\dfrac{1}{1 + x}$   | $(-1; 1)$            | $\displaystyle \sum_{n = 0}^\infty (-1)^{n}x^{n}$                             | $1 - x + x^2 - \cdots + (-1)^{n}x^{n} + \cdots$                                                 |
| $\dfrac{1}{1 - x}$   | $(-1; 1)$            | $\displaystyle \sum_{n = 0}^\infty x^{n}$                                     | $1 + x + x^2 + \cdots + x^n + \cdots$                                                           |
| $\dfrac{1}{1 + x^2}$ | $(-1; 1)$            | $\displaystyle \sum_{n = 0}^\infty (-1)^{n}x^{2n}$                            | $1 - x^2 + x^4 - \cdots + (-1)^{n}x^{2n} + \cdots$                                              |

| Biểu thức               | Khai triển rút gọn                                                            | Khai triển đầy đủ                                                                               |
|:-----------------------:|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| $(1 + x)^m \\ (-1; 1)$  | $\displaystyle \sum_{n = 0}^\infty \dfrac{m(m - 1) \cdots(m - n + 1)}{n!}x^n$ | $1 + mx + \dfrac{m(m - 1)}{2!}x^2 + \cdots + \dfrac{m(m - 1) \cdots (m - n - 1)}{n!} + \cdots$  |