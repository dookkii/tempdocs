---
sidebar_position: 2
---

# Đề thi giữa kỳ Giải tích 2 - MAT2502

## Đề thi
**Đề thi gốc:** [datuan5pdes - bomongiaitich.wordpress.com](https://datuan5pdes.wordpress.com/wp-content/uploads/2025/03/gkgt2khmt2025.pdf).

## Câu 1
Cho chuỗi số sau: $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{(-1)^n}{n!}$
1) Phát biểu dấu hiệu Leibniz cho chuỗi số đan dấu. Chứng minh chuỗi số trên hội tụ.
2) Tìm tổng của chuỗi số trên chính xác đến $3$ chữ số thập phân.

### Câu 1.1
Chuỗi đan dấu $\displaystyle \sum_{n = 1}^\infty (-1)^{n - 1} a_n$ hội tụ nếu:
$\begin{cases}
a_{n + 1} \le a_n \; \forall \; n \le 1 \\
\displaystyle \lim_{n \to \infty} a_n = 0
\end{cases}$.

<hr />

Ta có: $1 \cdot 2 \cdots n \le 1 \cdot 2 \cdots n \cdot (n + 1)$
$\Rightarrow n! \le (n + 1)! \Rightarrow \dfrac{1}{n!} \ge \dfrac{1}{(n + 1)!}$.

Ta có: $\displaystyle \lim_{n \to \infty} \dfrac{1}{n!} = \lim_{n \to \infty} \dfrac{1}{1 \cdot 2 \cdots n} = 0$.

Như vậy, chuỗi số $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{(-1)^n}{n!}$ hội tụ theo dấu hiệu Leibniz.

### Câu 1.2
Phần dư thứ $n$ của chuỗi số: $r_n = \displaystyle \sum_{k = n + 1}^\infty (-1)^{k} \dfrac{1}{k!}$.

Theo định lý *Ước lượng tổng của chuỗi đan dấu*: $|r_n| \le \dfrac{1}{(n + 1)!}$.

Để tổng của chuỗi số trên chính xác đến $3$ chữ số thập phân thì: $|r_n| \le \dfrac{1}{(n + 1)!} \le 10^{-3} = 0.001$

Xét với các giá trị của $n$:
  - $n = 3$: $\dfrac{1}{(n + 1)!} = 0.041(6) > 0.001$
  - $n = 4$: $\dfrac{1}{(n + 1)!} = 0.008(3) > 0.001$
  - $n = 5$: $\dfrac{1}{(n + 1)!} = 0.0013(8) > 0.001$
  - $n = 6$: $\dfrac{1}{(n + 1)!} \approx 0.0001 < 0.001$

Như vậy, với $n = 6$ thì tổng của chuỗi số trên chính xác đến $3$ chữ số thập phân.

$S_6 = \displaystyle \sum_{n = 0}^{6} \dfrac{(-1)^n}{n!} = \dfrac{1}{0!} + \dfrac{1}{1!} + \dfrac{1}{2!} + \dfrac{1}{3!} + \dfrac{1}{4!} + \dfrac{1}{5!} + \dfrac{1}{6!} = \dfrac{53}{144} \approx 0.368$.

## Câu 2
Trong các chuỗi số sau, khảo sát sự hội tụ của nó và trong trường hợp hội tụ, hãy chỉ rõ chuỗi số nào hội tụ tuyệt đối, chuỗi số nào bán hội tụ?
1) $\displaystyle \sum_{n = 0}^{+\infty} \left( \sqrt{n + \frac{1}{2}} - \sqrt[4]{n^2 + n + 2025} \right)$.
2) $\displaystyle \sum_{n = 0}^{+\infty} (-1)^n \left( \dfrac{2n + 100}{3n^2 + n} \right)$.

### Câu 2.1
$\displaystyle \sum_{n = 0}^{+\infty} \left( \sqrt{n + \frac{1}{2}} - \sqrt[4]{n^2 + n + 2025} \right)$

Xét chuỗi: $\displaystyle \sum_{n = 0}^{+\infty} \left| \sqrt{n + \frac{1}{2}} - \sqrt[4]{n^2 + n + 2025} \right|$

$= \displaystyle \sum_{n = 0}^{+\infty} \left| \dfrac{n + \dfrac{1}{2} - \sqrt{n^2 + n + 2025}}{\sqrt{n + \dfrac{1}{2}} + \sqrt[4]{n^2 + n + 2025}} \right|$

Ta có: $\sqrt{n + \dfrac{1}{2}} + \sqrt[4]{n^2 + n + 2025} \sim \sqrt{n} + \sqrt[4]{n^2} = \sqrt{n} + \sqrt{n} = 2\sqrt{n}$

Thay vào chuỗi trên, ta có:

$\displaystyle \sum_{n = 0}^{+\infty} \left| \dfrac{\left( n + \dfrac{1}{2} \right) - \sqrt{n^2 + n + 2025}}{2\sqrt{n}} \right|$

$= \displaystyle \sum_{n = 0}^{+\infty} \left| \dfrac{n^2 + n + \dfrac{1}{4} - n^2 - n - 2025}{2\sqrt{n} \left[ \left( n + \dfrac{1}{2} \right) + \sqrt{n^2 + n + 2025} \right]} \right|$

$= \displaystyle \sum_{n = 0}^{+\infty} \left| \dfrac{\dfrac{-8099}{4}}{2\sqrt{n} \left[ \left( n + \dfrac{1}{2} \right) + \sqrt{n^2 + n + 2025} \right]} \right|$

Ta có: $2\sqrt{n} \left[ \left( n + \dfrac{1}{2} \right) + \sqrt{n^2 + n + 2025} \right] \sim \sqrt{n}(n + \sqrt{n^2}) = 2n\sqrt{n}$.

Thay vào chuỗi trên, ta có: $\displaystyle \sum_{n = 0}^{+\infty} \left| \dfrac{-8099}{4} \cdot \dfrac{1}{2n\sqrt{n}} \right|$.

Xét giới hạn: $\displaystyle \lim_{n \to \infty} \left| \dfrac{\dfrac{-8099}{4} \cdot \dfrac{1}{2n\sqrt{n}}}{\dfrac{1}{n \sqrt{n}}} \right| = \left| \dfrac{-8099}{8} \right| = \dfrac{8099}{8}$.

Vì giới hạn này tồn tại khác $0$ nên chuỗi số $\displaystyle \sum_{n = 0}^{+\infty} \left| \dfrac{-8099}{4} \cdot \dfrac{1}{2n\sqrt{n}} \right|$ sẽ cùng hội tụ hoặc cùng phân kỳ với chuỗi số $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{1}{n\sqrt{n}}$ theo dấu hiệu so sánh.

Mà $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{1}{n\sqrt{n}} = \sum_{n = 0}^{+\infty} \dfrac{1}{n^{\frac{3}{2}}}$ là chuỗi $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{1}{n^{\alpha}}$ với $\alpha = \dfrac{3}{2} > 1$, vậy nên chuỗi này hội tụ.

Theo dấu hiệu so sánh, $\displaystyle \sum_{n = 0}^{+\infty} \left| \sqrt{n + \frac{1}{2}} - \sqrt[4]{n^2 + n + 2025} \right|$ cũng hội tụ.

Vậy $\displaystyle \sum_{n = 0}^{+\infty} \left( \sqrt{n + \frac{1}{2}} - \sqrt[4]{n^2 + n + 2025} \right)$ hội tụ tuyệt đối.

### Câu 2.2
$\displaystyle \sum_{n = 0}^{+\infty} (-1)^n \left( \dfrac{2n + 100}{3n^2 + n} \right)$

Xét chuỗi: $\displaystyle \sum_{n = 0}^{+\infty} \left| (-1)^n \left( \dfrac{2n + 100}{3n^2 + n} \right) \right| = \sum_{n = 0}^{+\infty} \left| \dfrac{2n + 100}{3n^2 + n} \right| = \sum_{n = 0}^{+\infty} \dfrac{2n + 100}{3n^2 + n}$.

Ta có: $\dfrac{2n + 100}{3n^2 + n} \sim \dfrac{2n}{3n^2} = \dfrac{2}{3n}$.

Thay vào chuỗi trên, ta có: $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{2}{3n}$.

Xét giới hạn: $\displaystyle \lim_{n \to \infty} \dfrac{\dfrac{2}{3n}}{\dfrac{1}{n}} = \dfrac{2}{3}$.

Vì giới hạn này tồn tại khác $0$ nên chuỗi số $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{2}{3n}$ sẽ cùng hội tụ hoặc cùng phân kỳ với chuỗi số $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{1}{n}$ theo dấu hiệu so sánh.

Mà $\displaystyle \sum_{n = 0}^{+\infty} \dfrac{1}{n}$ là chuỗi điều hòa, vậy nên chuỗi này phân kỳ.

Theo dấu hiệu so sánh, $\displaystyle \sum_{n = 0}^{+\infty} \left| (-1)^n \left( \dfrac{2n + 100}{3n^2 + n} \right) \right|$ cũng phân kỳ $\boxed{*}$.

<hr />

Xét chuỗi: $\displaystyle \sum_{n = 0}^{+\infty} (-1)^n \left( \dfrac{2n + 100}{3n^2 + n} \right)$ là chuỗi đan dấu.

Ta có: $\displaystyle \lim_{n \to \infty} \dfrac{2n + 100}{3n^2 + n} = 0 \; \boxed{1}$.

Xét hàm số $f(x) = \dfrac{2x + 100}{3x^2 + x}$.

$\Rightarrow f'(x) = \dfrac{2(3x^2 + x) - (6x + 1)(2x + 100)}{(3x^2 + x)^2} = \dfrac{6x^2 + 2x - 12x^2 - 600x - 2x - 100}{(3x^2 + x)^2} = \dfrac{-6x^2 - 612x - 100}{(3x^2 + x)^2}$.

$\forall \; x > 0: \begin{cases}
-6x^2 - 612x - 100 < 0 \\
(3x^2 + x)^2 > 0
\end{cases} \Rightarrow \dfrac{-6x^2 - 612x - 100}{(3x^2 + x)^2} < 0 \Rightarrow f'(x) < 0 \; \forall \; x > 0$.

Như vậy, $\left\{ \dfrac{2n + 100}{3n^2 + n} \right\}_{n = 0}^\infty$ lập thành một dãy số giảm $\boxed{2}$.

Từ $\boxed{1}$ và $\boxed{2}$: Chuỗi số $\displaystyle \sum_{n = 0}^{+\infty} (-1)^n \left( \dfrac{2n + 100}{3n^2 + n} \right)$ hội tụ theo dấu hiệu Leibniz $\boxed{**}$.

<hr />

Từ $\boxed{*}$ và $\boxed{**}$: Chuỗi số $\displaystyle \sum_{n = 0}^{+\infty} (-1)^n \left( \dfrac{2n + 100}{3n^2 + n} \right)$ bán hội tụ.

## Câu 3
Khảo sát sự hội tụ đều của các chuỗi hàm-dãy hàm sau trong khoảng $(0; +\infty)$.
1) $\displaystyle \sum_{x = 1}^{+\infty} \dfrac{\sin(x) \sin(nx)}{\sqrt{n + x}}$
2) $f_n(x) = n \left( \sqrt{x + \dfrac{1}{n}} - \sqrt{x} \right)$

### Câu 3.1
$\displaystyle \sum_{n = 1}^{+\infty} \dfrac{\sin(x) \sin(nx)}{\sqrt{n + x}} = \sin(x) \sum_{n = 1}^{+\infty} \dfrac{\sin(nx)}{\sqrt{n + x}}$.

Xét: $I = \displaystyle \sum_{k = 1}^{n} \sin(kx)$, nhân cả hai vế với $\sin \left( \dfrac{x}{2} \right)$:

$I \sin \left( \dfrac{x}{2} \right) = \displaystyle \sum_{k = 1}^{n} \sin(kx) \cdot \sin \left( \dfrac{x}{2} \right)$

$= \displaystyle \sum_{k = 1}^{n} \dfrac{1}{2} \left[ \cos \left( kx - \dfrac{x}{2} \right) - \cos \left( kx + \dfrac{x}{2} \right) \right]$

$= \dfrac{1}{2} \left[ \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{3x}{2} \right) + \cos \left( \dfrac{3x}{2} \right) - \cdots + \cdots + \cos \left( \dfrac{(2n - 1)x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right]$

$= \dfrac{1}{2} \left[ \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right]$

Ta có: $I \sin \left( \dfrac{x}{2} \right) = \dfrac{1}{2} \left[ \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right]$

$\Rightarrow I = \dfrac{\cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right)}{2 \sin \left( \dfrac{x}{2} \right)}$.

Ta có: $\sin x = 2 \sin \left( \dfrac{x}{2} \right) \cos \left( \dfrac{x}{2} \right) \Rightarrow 2 \sin \left( \dfrac{x}{2} \right) = \dfrac{\sin x}{\cos \left( \dfrac{x}{2} \right)}$.

Thay vào $I$, ta có: $I = \displaystyle \sum_{k = 1}^{n} \sin(kx) = \dfrac{\cos \left( \dfrac{x}{2} \right) \left[ \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right]}{\sin x}$.

Xét chuỗi: $\displaystyle \sum_{k = 1}^{n} \sin(x) \sin(kx) = \sin x \cdot \dfrac{\cos \left( \dfrac{x}{2} \right) \left[ \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right]}{\sin x}$

$= \cos \left( \dfrac{x}{2} \right) \left[ \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right]$.

Ta có: $\left| \displaystyle \sum_{k = 1}^{n} \sin(x) \sin(kx) \right| = \left| \cos \left( \dfrac{x}{2} \right) \left[ \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right] \right|$

$= \left| \cos \left( \dfrac{x}{2} \right) \right| \cdot \left| \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right|$

$\le 1 \cdot \left| \cos \left( \dfrac{x}{2} \right) - \cos \left( \dfrac{(2n + 1)x}{2} \right) \right|$

$\le \left| \cos \left( \dfrac{x}{2} \right) \right| + \left| \cos \left( \dfrac{(2n + 1)x}{2} \right) \right|$

$\le 1 + 1 = 2$,

Như vậy, dãy tổng riêng $\displaystyle \sum_{k = 1}^{n} \sin(x) \sin(kx)$ bị chặn trên bởi $2$.

Hơn nữa, $\displaystyle \lim_{n \to \infty} \dfrac{1}{\sqrt{n + x}} = 0$.

Vậy $\displaystyle \sum_{n = 1}^{+\infty} \dfrac{\sin(x) \sin(nx)}{\sqrt{n + x}}$ hội tụ đều theo dấu hiệu Dirichlet.

### Câu 3.2
$f_n(x) = n \left( \sqrt{x + \dfrac{1}{n}} - \sqrt{x} \right)$

$= n \left( \dfrac{\dfrac{1}{n}}{\sqrt{x + \dfrac{1}{n}} + \sqrt{x}} \right) = \dfrac{1}{\sqrt{x + \dfrac{1}{n}} + \sqrt{x}}$.

Ta có: $f(x) = \displaystyle \lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} \dfrac{1}{\sqrt{x + \dfrac{1}{n}} + \sqrt{x}} = \dfrac{1}{2\sqrt{x}}$.

Xét biểu thức: $\displaystyle \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \left| f(x) - f_n(x) \right| = \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \left| \dfrac{1}{\sqrt{x + \dfrac{1}{n}} + \sqrt{x}} - \dfrac{1}{2\sqrt{x}} \right|$

$= \displaystyle \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \left| \dfrac{2\sqrt{x} - \sqrt{x + \dfrac{1}{n}} - \sqrt{x}}{2 \sqrt{x} \left( \sqrt{x + \dfrac{1}{n}} + \sqrt{x} \right)} \right| = \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \left| \dfrac{\sqrt{x} - \sqrt{x + \dfrac{1}{n}}}{2 \sqrt{x} \left( \sqrt{x + \dfrac{1}{n}} + \sqrt{x} \right)} \right|$

$= \displaystyle \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \left| \dfrac{x - x - \dfrac{1}{n}}{2 \sqrt{x} \left( \sqrt{x + \dfrac{1}{n}} + \sqrt{x} \right)^2} \right| = \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \dfrac{\dfrac{1}{n}}{2 \sqrt{x} \left( \sqrt{x + \dfrac{1}{n}} + \sqrt{x} \right)^2}$

$= \displaystyle \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \dfrac{1}{2n \sqrt{x} \left( \sqrt{x + \dfrac{1}{n}} + \sqrt{x} \right)^2}$

Khi $x \to 0^+$ thì $2n \sqrt{x} \left( \sqrt{x + \dfrac{1}{n}} + \sqrt{x} \right)^2 \to 0 \; \forall \; n > 0$.

$\Rightarrow \displaystyle \sup_{x \in (0; +\infty)} \dfrac{1}{2n \sqrt{x} \left( \sqrt{x + \dfrac{1}{n}} + \sqrt{x} \right)^2} = +\infty \; \forall \; n > 0$.

$\displaystyle \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \dfrac{1}{2n \sqrt{x} \left( \sqrt{x + \dfrac{1}{n}} + \sqrt{x} \right)^2} = +\infty$.

$\displaystyle \lim_{n \to \infty} \sup_{x \in (0; +\infty)} \left| f(x) - f_n(x) \right| = +\infty \ne 0$.

Vậy $f_n(x) = n \left( \sqrt{x + \dfrac{1}{n}} - \sqrt{x} \right)$ không hội tụ đều.

## Câu 4
Xác định miền hội tụ, miền hội tụ đều và tính tổng của chuỗi hàm sau:

<div align="center">
$\displaystyle \sum_{n = 1}^{+\infty} (-1)^{n - 1} x^{2n - 2}$
</div>

Xét giới hạn: $D = \displaystyle \lim_{n \to \infty} \left| \dfrac{(-1)^{n} x^{2n}}{(-1)^{n - 1} x^{2n - 2}} \right| = \lim_{n \to \infty} \left| \dfrac{x^{2n}}{x^{2n - 2}} \right| = |x^2| = x^2$

Chuỗi lũy thừa trên hội tụ $\Leftrightarrow D < 1 \Leftrightarrow x^2 < 1 \Leftrightarrow x \in (-1; 1)$.

Khoảng hội tụ: $(-1; 1)$.

Xét tại cả hai đầu mút là $x = -1$ và $x = 1$, chuỗi lũy thừa trở thành:

$\displaystyle \sum_{n = 1}^{+\infty} (-1)^{n - 1} 1^{2n - 2} = \sum_{n = 1}^{+\infty} (-1)^{n - 1}$.

Xét giới hạn: $\displaystyle \lim_{n \to \infty} (-1)^{n - 1} = \begin{cases}
n \text{ is odd} &: \displaystyle \lim_{\substack{n \to \infty \\ n \text{ is odd}}} (-1)^{n - 1} = 1 \\
n \text{ is even} &: \displaystyle \lim_{\substack{n \to \infty \\ n \text{ is even}}} (-1)^{n - 1} = -1
\end{cases}$

Như vậy, không tồn tại giới hạn $\displaystyle \lim_{n \to \infty} (-1)^{n - 1}$.

$\Rightarrow$ Chuỗi lũy thừa $\displaystyle \sum_{n = 1}^{+\infty} (-1)^{n - 1}$ phân kỳ (Điều kiện cần của chuỗi số).

Vậy miền hội tụ của chuỗi lũy thừa $\displaystyle \sum_{n = 1}^{+\infty} (-1)^{n - 1} x^{2n - 2}$ là $(-1; 1)$.

<hr />

Ta có: $|(-1)^{n - 1} x^{2n - 2}| = |x^{2n - 2}| = |x|^{2n - 2} \le |q|^{2n - 2} (q > x)$.

Mà $\displaystyle \sum_{n = 1}^{+\infty} |q|^{2n - 2}$ hội tụ $\forall \; |q| < 1$.

Vậy $\displaystyle \sum_{n = 1}^{+\infty} (-1)^{n - 1} x^{2n - 2}$ hội tụ đều trên mọi đoạn $[-a; a] \; (0 \le a < 1)$.

<hr />

$\displaystyle \sum_{n = 1}^{+\infty} (-1)^{n - 1} x^{2n - 2} = \sum_{n = 1}^{+\infty} (-1)^{n - 1} (x^2)^{n - 1}$

$\displaystyle \sum_{n = 1}^{+\infty} (-x^2)^{n - 1}$.

Theo công thức của cấp số nhân lùi vô hạn: $S = \dfrac{u_1}{1 - q}$, ta có:

$\displaystyle \sum_{n = 1}^{+\infty} (-x^2)^{n - 1} = \dfrac{(-x^2)^{1 - 1}}{1 - (-x^2)} = \dfrac{1}{1 + x^2}$.

Vậy $\displaystyle \sum_{n = 1}^{+\infty} (-1)^{n - 1} x^{2n - 2} = \dfrac{1}{1 + x^2}$.

## Câu 5
1) Tính $\displaystyle \int \dfrac{\text{d}x}{1 + x^7}$ dưới dạng một chuỗi lũy thừa.
2) Áp dụng để tính gần đúng $\displaystyle \int_0^{0,5} \dfrac{\text{d}x}{1 + x^7}$ chính xác đến $10^{-7}$.

### Câu 5.1
Theo khai triển Maclaurin:

$\dfrac{1}{1 + x} = \displaystyle \sum_{n = 0}^{+\infty} (-1)^n x^n = 1 - x + x^2 - \cdots + \cdots (x \in (-1; 1))$.

Thay $x \to x^7$, ta có:

$\dfrac{1}{1 + x^7} = \displaystyle \sum_{n = 0}^{+\infty} (-1)^n x^{7n} = 1 - x^7 + x^{14} - \cdots + \cdots (x \in (-1; 1))$.

Nguyên hàm hai vế, ta có:

$\displaystyle \int \dfrac{\text{d}x}{1 + x^7} = \displaystyle \int \sum_{n = 0}^{+\infty} (-1)^n x^{7n} \, \text{d}x = \sum_{n = 0}^{+\infty} \int (-1)^n x^{7n} \, \text{d}x$

$= \displaystyle \sum_{n = 0}^{+\infty} (-1)^n \int x^{7n} \, \text{d}x = \sum_{n = 0}^{+\infty} (-1)^n \dfrac{x^{7n + 1}}{7n + 1}$.

Vậy $\displaystyle \int \dfrac{\text{d}x}{1 + x^7} = \sum_{n = 0}^{+\infty} (-1)^n \dfrac{x^{7n + 1}}{7n + 1}$.

### Câu 5.2
$\displaystyle \int_0^{0,5} \dfrac{\text{d}x}{1 + x^7} = \sum_{n = 0}^{+\infty} (-1)^n \dfrac{0,5^{7n + 1}}{7n + 1}$

Theo định lý *Ước lượng tổng của chuỗi đan dấu*:

$R_n = \left| \displaystyle \sum_{k = n + 1}^{+\infty} (-1)^k \dfrac{0,5^{7k + 1}}{7k + 1} \right|$

$= \left| \dfrac{0,5^{7k + 8}}{7k + 8} - \dfrac{0,5^{7k + 15}}{7k + 15} + \cdots - \cdots \right|$

$< \left| \dfrac{0,5^{7k + 8}}{7k + 8} \right| < 10^{-7}$.

Xét với các giá trị của $n$:
  - $n = 1$: $R_n \approx 2 \cdot 10^{-6} > 10^{-7}$
  - $n = 2$: $R_n \approx 1 \cdot 10^{-8} < 10^{-7}$

$\Rightarrow$ Lấy $n = 2$.

$\displaystyle \int_0^{0,5} \dfrac{\text{d}x}{1 + x^7} \approx \sum_{n = 0}^{2} (-1)^n \dfrac{0,5^{7n + 1}}{7n + 1} = 0,4495137533 \dots$

<hr />

$\displaystyle \int_0^{0,5} \dfrac{\text{d}x}{1 + x^7} \approx 0,449513\underline{7}533 \dots$

$\displaystyle \int_0^{0,5} \dfrac{\text{d}x}{1 + x^7} = 0,449513\underline{7}425 \dots$
