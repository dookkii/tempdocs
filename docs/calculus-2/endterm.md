# Một số thứ liên quan đến bài thi cuối kỳ

## Câu 1: Định nghĩa chuỗi luỹ thừa. Phát biểu định lý Abel về bán kính hội tụ của chuỗi lũy thừa.
- Chuỗi lũy thừa là một chuỗi hàm có dạng:

    $$
    \sum_{n = 0}^{\infty} a_n (x - a)^n = a_0 + a_1(x - a) + \cdots + a_n(x - a)^n + \cdots
    $$

    trong đó $a, a_n$ $(n = 0, 1, 2, \cdots)$ là các hằng số.

---
#### Định lý Abel:

- Chuỗi hàm $\displaystyle \sum_{n = 1}^\infty a_n(x) \cdot b_n(x)$ hội tụ đều trên tập $\mathbb{X}_0$ nếu:
1) Chuỗi $\displaystyle \sum_{n = 1}^\infty a_n(x)$ hội tụ đều trên tập $\mathbb{X}_0$.
2) Dãy $\{ b_n(x) \}_{n = 1}^\infty$ đơn điệu với mỗi $x \in \mathbb{X}_0$ và bị chặn đều trên $\mathbb{X}_0$, tức là tồn tại hằng số $M > 0$ sao cho: $|b_n(x)| \le M \; \forall \; x \in \mathbb{X}_0, n = 1, 2, 3, \dots$.

## Câu 2: Phát biểu định lý Cauchy - Hadamard về bán kính hội tụ của chuỗi lũy thừa.
- Cho chuỗi lũy thừa có dạng $\displaystyle \sum_{n = 0}^{\infty} a_n(x - a)^n$ thì bán kính hội tụ của chuỗi lũy thừa được xác định theo công thức Cauchy - Hadamard:

$$
\dfrac{1}{R} = \overline{\lim_{n \to \infty}} \sqrt[n]{|a_n|}
$$

## Câu 3. Nêu định nghĩa chuỗi Fourier của một hàm khả tích trên đoạn $[−π, π]$, tuần hoàn với chu kỳ $2π$.
- Chuỗi hàm

    $$
    \dfrac{a_0}{2} + \displaystyle \sum_{n = 1}^\infty [a_n \cos(nx) + b_n \sin(nx)]
    $$

    $$
    (a_0, a_n, b_n = \text{const}; n = 1, 2, 3, \dots)
    $$

    được gọi là chuỗi lượng giác.

- Giả sử $f(x)$ là hàm liên tục trong khoảng $(-\pi; +\pi)$, tuần hoàn với chu kỳ $2\pi$. Ta xác định các hệ số $a_0, a_n, b_n$ $(n = 1, 2, \cdots)$ theo công thức:
    - $a_0 = \dfrac{1}{\pi} \displaystyle \int_{-\pi}^{\pi} f(x) \, \text{d}x$
    - $a_n = \dfrac{1}{\pi} \displaystyle \int_{-\pi}^{\pi} f(x) \cdot \cos(nx) \, \text{d}x \; \; (n = 1, 2, \dots)$
    - $b_n = \dfrac{1}{\pi} \displaystyle \int_{-\pi}^{\pi} f(x) \cdot \sin(nx) \, \text{d}x$

- Khi đó chuỗi lượng giác với các hệ số $a_0, a_n, b_n$ được xác định theo các công thức trên được gọi là chuỗi Fourier của hàm $f(x)$ và ký hiệu:

$$
f(x) \sim \dfrac{a_0}{2} + \sum_{n = 1}^{\infty} (a_n \cos(nx) + b_n \sin(nx))
$$

## Câu 4. Phát biểu định lý về sự hội tụ của chuỗi Fourier.
- $f(x)$ được xác định trên $[-\pi; \pi]$ được gọi là khả vi từng khúc nếu:

    $$
    [a; b] = \displaystyle \bigcup_{i = 1}^k \; [a_i; b_i]
    $$

    sao cho trên $(a_i; b_i)$ $(i = 1, 2, 3, \dots, k)$ hàm số $f(x)$ khả vi và có thể xác định giá trị của hàm $f(x)$ tại các điểm đầu mút $a_i, b_i$ sao cho hàm số khả vi phải tại $a_i$, khả vi trái tại $b_i$.

- Nếu hàm số $f(x)$ tuần hoàn với chu kỳ $2\pi$, khả vi từng khúc trên $[-\pi; \pi]$ thì chuỗi Fourier của nó hội tụ tại mỗi điểm $x = x_0$ và có tổng là:

    $$
    S(x_0) = \dfrac{f(x_0 + 0) + f(x_0 - 0)}{2}
    $$

    - Đặc biệt, tại các điểm liên tục chuỗi Fourier của hàm $f(x)$ hội tụ và chính giá trị của hàm số tại điểm đó.

## Câu 5: Viết biểu thức khai triển chẵn, khai triển lẻ của một hàm xác định, khả vi từng khúc trên đoạn $[0, π]$.
- Nếu $f(x)$ là hàm chẵn:
    - $a_0 = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \, \text{d}x$
    - $a_n = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \cos(nx) \, \text{d}x$
    - $b_n = 0$
    - Như vậy: $f(x) \sim \dfrac{a_0}{2} + \displaystyle \sum_{n = 1}^\infty a_n \cos(nx)$.
- Nếu $f(x)$ là hàm lẻ:
    - $a_0 = 0$
    - $a_n = 0$
    - $b_n = \dfrac{2}{\pi} \displaystyle \int_0^\pi f(x) \sin(nx) \, \text{d}x$
    - Như vậy: $f(x) \sim \displaystyle \sum_{n = 1}^\infty b_n \sin(nx)$.s

## Câu 6. Nêu định nghĩa một số khái niệm tô-pô trong không gian nhiều chiều: điểm trong, điểm dính, điểm biên, điểm tụ, ...
Giả sử $A$ là một tập hợp trong không gian Metric $\mathbb{X}$:

1. Điểm $x \in A$ được gọi là điểm trong của A nếu tồn tại một số $r > 0$ sao cho $B(x, r) \subset A$.
    - Tập hợp tất cả các điểm trong của $A$ được gọi là phầm trong của tập hợp đó;
    - Ký hiêu: $\text{Int} \, A$.
2. Điểm $x \in \mathbb{X}$ được gọi là điểm dính của tập hợp $A$ nếu với mọi $r > 0: B(x, r) \cap A \ne \varnothing$.
    - Tập hợp tất cả các điểm dính của $A$ được gọi là bao đóng của tập hợp đó;
    - Ký hiệu: $\overline{A}$;
    - $\overline{A}$ là tập đóng nhỏ nhất chứa $A$.
3. Điểm $x \in \mathbb{X}$ được gọi là điểm tụ của tập hợp $A$ nếu với mọi $r > 0: B(x, r) \cap (A \setminus \{ x \}) \ne \varnothing$.
    - Tập hợp tất cả các điểm tụ của $A$ được gọi là tập hợp dẫn xuất của tập hợp đó;
    - Ký hiệu là $A'$.
4. Điểm $x \in \mathbb{X}$ được gọi là điểm biên của tập hợp $A$ nếu $x \in \overline{A} \cap \left( \overline{X \setminus A} \right)$.
    - Tập hợp $\text{Fr}(A) = \overline{A} \cap \left( \overline{X \setminus A} \right)$ được gọi là biên của tập hợp $A$.

## Câu 7. Nêu định nghĩa giới hạn của hàm nhiều biến

## Câu 8. Nêu định nghĩa giới hạn lặp của hàm số hai biến số, cho ví dụ về một hàm hai biến số có hai giới hạn lặp khác nhau. Phát biểu định lý về mối quan hệ giữa giới hạn lặp và giới hạn kép.
- Cho $A \subset \mathbb{R}^2$ và $f: A \to \mathbb{R}$. Giả sử $(a, b) \in \mathbb{R}^2$ là điểm tụ của tập hợp $A$. Ta ký hiệu:
    - $\forall \, y$ cố định: $A_y = \{ x \in \mathbb{R} \, | \, (x, y) \in A \}$ và
    - $\forall \, x$ cố định: $A_x = \{ y \in \mathbb{R} \, | \, (x, y) \in A \}$

- Như vậy với mỗi $y$ cố định, $f(x, y)$ là hàm xác định trên $A_y$ và $a$ là điểm tụ của $A_y$. Giả sử tồn tại:

    $$
    \lim_{x \to a} f(x, y) = \varphi(y)
    $$

- Ký hiệu: $B = \{y \in \mathbb{R} \, | \, \exist \, \displaystyle \lim_{x \to a} f(x, y) = \varphi(y) \}$.
- Xét $b$ là điểm tụ của $B$. Khi đó giới hạn $\displaystyle \lim_{y \to b} \varphi(y)$ nếu tồn tại, được gọi là giới hạn lặp và ký hiệu là $\displaystyle \lim_{y \to b} \lim_{x \to a} f(x, y)$.

---

- Tương tự ta có giới hạn lặp: $\displaystyle \lim_{x \to a} \lim_{y \to b} f(x, y)$.

---

Giới hạn kép:

$$
\lim_{(x, y) \to (a, b)} f(x, y) = \lim_{\substack{x \to a \\ y \to b}} f(x, y)
$$

#### Định lý về mối quan hệ giữa giới hạn lặp và giới hạn kép
$$
\lim_{(x, y) \to (a, b)} f(x, y) = L \Longrightarrow \lim_{x \to a} \lim_{y \to b} f(x, y) = \lim_{y \to b} \lim_{x \to a} f(x, y) = L
$$

:::danger[Lưu ý]
Điều ngược lại không đúng!
:::

## Câu 9. Nêu định nghĩa hàm nhiều biến liên tục, liên tục theo từng biến.
- Cho $A \subset \mathbb{R}^n$ và $f : A \to \mathbb{M}$. Ta nói hàm $f(x) = f(x_1, x_2, \dots, x_n)$ liên tục tại điểm $a = (a_1, a_2, \dots, a_n) \in A$ nếu:

$$
\forall \; \varepsilon > 0 \; \exist \; \delta = \delta(a, \varepsilon) : \forall \; x \in A : ||x - a|| < \delta \Longrightarrow ||f(x) - f(a)|| < \varepsilon
$$

- Hàm $f(x)$ được gọi là liên tục theo biến $x_i$ tại điểm $a = (x_1, x_2, \dots, x_n) \in A$ nếu:

$$
\forall \; \varepsilon > 0 \; \exist \; \delta = \delta(a, \varepsilon) : \forall \; x_i |x_i - a_i| < \delta\Longrightarrow ||f(a_1, \dots, x_i, \dots, a_n) - f(a)|| < \varepsilon
$$


## Câu 10. Nêu khái niệm khả vi của hàm nhiều biến.

## Câu 11. Nêu định nghĩa đạo hàm riêng của hàm nhiều biến.

## Câu 12. Nêu định nghĩa đạo hàm theo hướng.
- Cho $U \subset \mathbb{R}^n$, $U$ mở, $f : U \to \mathbb{R}$ và $a \in U$.
- Ký hiệu: $\vec{v} = (v_1, v_2, \dots, v_n) \in \mathbb{R}^n$; $||\vec{v}|| = 1$.
- Khi đó đạo hàm của hàm $f(x)$ theo hướng $\vec{v}$ được xác định theo công thức:

$$
\dfrac{\partial f}{\partial \vec{v}} (a) = \lim_{t \to 0} \dfrac{f(a + tv) - f(a)}{t}
$$

---

- Nếu hàm $f(x)$ có các đạo hàm riêng cấp $\dfrac{\partial f}{\partial x_i} (a)$ $(i = 1, 2, \dots, n)$ thì có đạo hàm theo hướng $\vec{v}$ tại điểm $a$ và:

$$
\dfrac{\partial f}{\partial \vec{v}} (a) = \sum_{i = 1}^{n} \dfrac{\partial f}{\partial x_i} (a) \cdot v_i = \dfrac{\partial f}{\partial x_1} (a) \cdot v_1 + \dots + \dfrac{\partial f}{\partial x_n} (a) \cdot v_n = f'(a) \cdot \vec{v}
$$

## Câu 13. Nêu định nghĩa đạo hàm riêng cấp cao. Phát biểu định lý Schwarz về mối quan hệ giữa các đạo hàm riêng.
- Giả sử hàm $f$ có đạo hàm riêng $\dfrac{\partial f}{\partial x_k}$ trong một lân cận nào đó của điểm $a$. Khi đó nếu tồn tại đạo hàm $\dfrac{\partial}{\partial x_l} \left( \dfrac{\partial f}{\partial x_k} \right)$ tại $x = a$ thì nó được gọi là đạo hàm riêng cấp 2 $\dfrac{\partial^2 f}{\partial x_l \partial x_k}$ tại $x = a$.

- **Định lý Schwarz**: Nếu tồn tại các đạo hàm hỗn hợp $\dfrac{\partial^2 f}{\partial x_l \partial x_k}$ và $\dfrac{\partial^2 f}{\partial x_k \partial x_l}$ trong lân cận của điểm $x = a$ và chúng liên tục tại điểm này thì:

$$
\boxed{
    \dfrac{\partial^2 f}{\partial x_l \partial x_k} (a) = \dfrac{\partial^2 f}{\partial x_k \partial x_l} (a)
}
$$

- Bằng cách tương tự ta có thể định nghĩa đạo hàm cấp $m$ tùy ý:

$$
\dfrac{\partial^m f}{\partial x_1^{m_1} \dots \partial x_n^{m_n}}(a) \;\;\; , m_1 + \dots + m_n = m
$$

## Câu 14. Phát biểu công thức Taylor đối với hàm nhiều biến.

- Nếu $f(x, y)$ có tất cả các đạo hàm riêng liên tục cho đến cấp $n + 1$ trong lân cận của điểm $(a, b)$ thì trong lân cận này có thể khai triển hàm $f(x, y)$ theo công thức Taylor.
- Công thức Taylor đối với hàm hai biến có dạng như sau:

$$
f(x, y) = f(a, b) + \sum_{i = 1}^n \frac{1}{i!} \left[ (x - a) \frac{\partial}{\partial x} + (y - b) \frac{\partial}{\partial y} \right]^i f(a, b) + R_n(x, y)
$$

trong đó:

$$
R_n(x, y) = \frac{1}{(n + 1)!} \left[ (x - a) \frac{\partial}{\partial x} + (y - b) \frac{\partial}{\partial y} \right]^{n + 1} f(a + \theta_n(x - a), b + \theta_n(y - b))
$$

$$
(0 < \theta_n < 1)
$$